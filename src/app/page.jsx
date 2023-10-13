import { connectDB } from "@/utils/mongoose";
import Task from "@/models/Task";

async function loadTasks() {
  connectDB();
  const tasks = await Task.find();
  return tasks;
}

async function Homepage() {
  const tasks = await loadTasks();
  return (
    <div>
      {tasks.map((task) => (
        <div key={task._id}>
          <div>
            <h3>{task.title}</h3>
            {task.completed ? <p>✅</p> : <p>❌</p>}
          </div>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Homepage;
