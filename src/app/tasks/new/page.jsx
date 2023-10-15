import React from 'react'

function FormPage() {
  return (
    <div className='h-[calc(100vh-7rem)] flex justify-center items-center'>
        <form >
            <input type='text' name="title" placeholder='Title' className='bg-gray-800 border-2 w-full p-4 rounded-lg my-4'/>
            <textarea name='description' placeholder='Description' className='bg-gray-800 border-2 w-full p-4 rounded-lg my-4'></textarea>
            <button className='bg-gray-800 border-2 w-full p-4 rounded-lg my-4 text-white hover:bg-gray-700 transition-colors duration-300 ease-in-out'>Save</button>
        </form>
    </div>
  )
}

export default FormPage