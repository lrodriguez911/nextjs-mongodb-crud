import React from 'react'

function FormPage() {
  return (
    <div className='h-[calc(100vh-7rem)] flex justify-center items-center'>
        <form >
            <input type='text' name="title" placeholder='Title' />
            <textarea name='description' placeholder='Description'></textarea>
            <button>Save</button>
        </form>
    </div>
  )
}

export default FormPage