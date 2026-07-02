import { useState } from "react";

const UseStateToDoList = () => {
  const [tasks, setTasks] = useState(["hooks", "react-forms"]);
  const [currentTask, setCurrentTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

  const handleInputChange = (event) => {
    setCurrentTask(event.target.value);
  };

  const addTasks = () => {
    if (currentTask.trim() === "") return;
    setTasks([...tasks, currentTask]);
    setCurrentTask("");
  };

  const removeTask = (indexToRemove) => {
    
    const updatedTasks = tasks.filter((_, index) => index !== indexToRemove);
    setTasks(updatedTasks);
    
    // Reset editing state if the task being edited gets deleted
    if (editingIndex === indexToRemove) {
      setEditingIndex(null);
    }
  };

  const startEdit = (index, currentText) => {
    setEditingIndex(index);
    setEditingText(currentText);
  };

  const saveEdit = (index) => {
    if (editingText.trim() === "") return;
    
    const updatedTasks = [...tasks];
    updatedTasks[index] = editingText; 
    
    setTasks(updatedTasks);
    setEditingIndex(null); 
  };

  return (
    <div>
      <input
        type="text"
        placeholder="enter task to add"
        value={currentTask}
        onChange={handleInputChange}
      />
      <button onClick={addTasks}>Add Tasks</button>
      <br />

      <ul>
        {tasks.map((t, index) => {
          return (
            <li key={index} style={{ marginBottom: "8px" }}>
              {editingIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                  />
                  <button onClick={() => saveEdit(index)}>Save</button>
                  <button onClick={() => setEditingIndex(null)}>Cancel</button>
                </>
              ) : (
                <>
                  <span style={{ marginRight: "10px" }}>{t}</span>
                  <button onClick={() => startEdit(index, t)}>Edit</button>
                  <button onClick={() => removeTask(index)}>Delete</button>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UseStateToDoList;