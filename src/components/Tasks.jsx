import NewTask from "./NewTask";

export default function Tasks({ onAddTask, onDeleteTask, tasks }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask} />
      {tasks.length <= 0 ? (
        <p className="text-stone-800 my-4">
          This project doesn't have any tasks yet.
        </p>
      ) : (
        <ul>
          {tasks.map( (task) => (
            <li key={task.id} className="flex justify-between px-4 py-4 my-3 bg-stone-100 rounded-md">
              <p className="text-stone-700">{task.text}</p>
              <button onClick={ () => onDeleteTask(task.id) } className="hover:text-red-500" >Clear</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
