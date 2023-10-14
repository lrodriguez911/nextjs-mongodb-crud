import React from 'react'

function TaskCard({ task }) {
  return (
    <div key={task._id}>
          <div className='bg-gray-800 p-10 text-white rounded-md hover:cursor-pointer hover:bg-gray-700'>
            <h3>{task.title}</h3>
            {task.completed ? <p>✅</p> : <p>❌</p>}
          </div>
          <p>{task.description}</p>
        </div>
  )
}

export default TaskCard