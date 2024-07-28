const express = require('express');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');

const app = express();
const port = 3000;
const prisma = new PrismaClient();
const secretKey = 'lappu'; // Define your secret key here

app.use(express.json());
app.use(cors());

// Middleware to verify JWT for blog routes
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ error: 'No token provided.' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to authenticate token.' });
        }
        req.userId = decoded.id;
        next();
    });
};

// Signup route
app.post('/api/v1/signup', async (req, res) => {
    const { email, password, name } = req.body;

    try {
        const user = await prisma.user.create({
            data: {
                email,
                password, // Note: Password should be hashed securely!
                name
            }
        });

        const token = jwt.sign({ id: user.id }, secretKey);
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(403).json({ error: "User could not be created." });
    }
});

// Signin route
app.post('/api/v1/signin', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await prisma.user.findFirst({
            where: {
                email,
                password // Note: Password should be hashed and compared securely!
            }
        });

        if (!user) {
            return res.status(403).json({ message: "Incorrect credentials" });
        }

        const token = jwt.sign({ id: user.id }, secretKey);
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(403).json({ error: "User could not be found." });
    }
});

// Blog route to create a new post
app.post('/api/v1/blog', verifyToken, async (req, res) => {
    const { title, content } = req.body;
    try {
        if (!req.userId) {
            return res.status(403).json({ error: 'User ID not found.' });
        }

        const blog = await prisma.post.create({
            data: {
                title,
                content,
                authorId: req.userId
            }
        });

        return res.json({ id: blog.id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the blog post.' });
    }
});

// Blog route to update a post
app.put('/api/v1/blog', verifyToken, async (req, res) => {
    const { title, content, id } = req.body;
    try {
        const blog = await prisma.post.update({
            where: { id: id}, // Ensure ID is a number
            data: {
                title,
                content
            }
        });

        return res.json({ id: blog.id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while updating the blog post.' });
    }
});

// Route to fetch all posts
app.get('/api/v1/blog/bulk', verifyToken, async (req, res) => {
    try {
        const blogs = await prisma.post.findMany({
            select: {
                id: true,
                title: true,
                content: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        });

        return res.json({ blogs });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error while fetching blogs." });
    }
});

// Blog route to fetch a post by ID
app.get('/api/v1/blog/:id', verifyToken, async (req, res) => {
    const id = req.params.id; // Ensure ID is a number
    try {
        const blog = await prisma.post.findFirst({
            where: { id },
            select: {
                title: true,
                content: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        });

        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        return res.json({ blog });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error while fetching blog" });
    }
});

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
