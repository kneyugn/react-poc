import { useEffect, useState, useRef } from "react";

export type ToDoItem = { value: string; label: string };

export default function ToDo() {
  // TODO[ref]: input ref
  const inputRef = useRef<HTMLInputElement | null>(null);

  // TODO[useState]: useSetState typescript with empty array
  const [todos, setToDos] = useState<ToDoItem[] | []>([]);

  useEffect(() => {
    const getTodo = async () => {
      const mockTodo: ToDoItem[] = [
        { value: "sr", label: "study react" },
        { value: "spython", label: "study python" },
      ];
      const p = new Promise((resolve) => {
        setTimeout(() => {
          resolve(mockTodo);
        }, 1000);
      });
      const freshToDo = (await p) as ToDoItem[];
      setToDos(freshToDo);
    };

    getTodo();
  }, []);

  function handleInputChange(e: any) {
    // TODO[input]: onKeyDown save the input value
    if (e.key !== "Enter") {
      return;
    }
    const newItem = { value: e.target.value, label: e.target.value };
    const newTodo = [...todos, newItem];
    setToDos(newTodo);
  }

  function handleClick() {
    inputRef.current?.focus();
  }

  return (
    <>
      <label htmlFor="todoInput">Add your todos:</label>
      <input ref={inputRef} id="todoInput" onKeyDown={handleInputChange} />
      <button onClick={handleClick}>focus on input</button>
      <TodoList todos={todos}></TodoList>
    </>
  );
}

// TODO[x]: remember to add key when rendering list
// TODO[x]: style component
export function TodoList(props: { todos: ToDoItem[] }) {
  return (
    <div
      style={{
        backgroundColor: "lightblue",
      }}
    >
      <ul>
        {props.todos.map((item, idx) => (
          <li key={idx}>{item.label}</li>
        ))}
      </ul>
    </div>
  );
}

