import { useSelector } from "react-redux";

const ToDoList = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  return (
    <>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.text}</li>;
        })}
      </ul>
    </>
  );
};

export default ToDoList;
