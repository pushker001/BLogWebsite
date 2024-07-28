import React from 'react'

const Texteditor = ({onChange}) => {
  return (
    <div className='flex justify-center'>
        <div className='flex flex-col justify-center w-[60%] pt-10 '>
            
            <textarea onChange={onChange} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

            


        </div>
      
    </div>
  )
}

export default Texteditor
