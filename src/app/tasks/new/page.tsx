"use client";
import { ChangeEvent , FormEvent, useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation';

function FormPage() {
  const [newTask, setNewTask] = useState({
    title: "",
    description: ""
  })
  const router = useRouter()
  const params = useParams()

  const createTask = async () => {
    try {
      const res = await fetch('api/tasks/', {
        method: "POST",
        body: JSON.stringify(newTask),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = await res.json()
      
      if (res.status === 200) {
        router.push("/")
      }
      
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    const res = await fetch('api/tasks/', {
      method: "POST",
      body: JSON.stringify(newTask),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()

    router.push("/")
    console.log(data);
    
  }

  const handleDelete = async () => {
    console.log("deleting");
    
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await createTask();
    
   }
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value
    })
  
  }

  useEffect(() => {
    console.log(params);
    
  },[])
  return (
    <div className='h-[calc(100vh-7rem)] flex justify-center items-center'>
        <form onSubmit={}>
          <h1 className='font-bold text-3xl'>
            { !params.id ? "Create New Task" : "Update Task"}
          </h1>
          <button onClick={handleDelete} className='bg-red-500 px-3 py-1 rounded-md'>Delete</button>
            <input type='text' name="title" placeholder='Title' className='bg-gray-800 border-2 w-full p-4 rounded-lg my-4' onChange={handleChange}/>
            <textarea name='description' placeholder='Description' className='bg-gray-800 border-2 w-full p-4 rounded-lg my-4' rows={3} onChange={handleChange}></textarea>
            <button className='bg-gray-800 border-2 w-full p-4 rounded-lg my-4 text-white hover:bg-gray-700 transition-colors duration-300 ease-in-out'>Save</button>
        </form>
    </div>
  )
}

export default FormPage