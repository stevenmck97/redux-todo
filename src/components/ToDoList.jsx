import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  return (
    <>
      <ul>
        {todos.map((todo) => {
          //   return <li key={todo.id}>{todo.text}</li>;
          return <ToDoItem key={todo.id} todo={todo} />;
        })}
      </ul>
    </>
  );
};

export default ToDoList;
