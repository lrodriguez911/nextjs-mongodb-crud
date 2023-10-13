import React from 'react'

function TaskCard({ task }) {
  return (
    <div key={task._id}>
          <div>
            <h3>{task.title}</h3>
            {task.completed ? <p>✅</p> : <p>❌</p>}
          </div>
          <p>{task.description}</p>
        </div>
  )
}

export default TaskCard