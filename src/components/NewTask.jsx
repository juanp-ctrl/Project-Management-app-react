import { useState } from "react";

export default function NewTask({ onAddTask }) {
  const [inputTask, setInputTask] = useState("");

  function handleInput(event) {
    setInputTask(event.target.value);
  }

  function handleSendInput() {
    if(inputTask.trim() === ''){
      return;
    }
    setInputTask('');
    onAddTask(inputTask);
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        value={inputTask}
        onChange={handleInput}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        onClick={handleSendInput}
        className="text-stone-700 hover:text-stone-900"
      >
        Add task
      </button>
    </div>
  );
}
