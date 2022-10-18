import { deleteTodo } from "../app/actions/todoActions";
import { useDispatch } from "react-redux";

const ToDoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteTodo(todo.id));
  };

  return (
    <>
      <li key={todo.id}>
        {todo.text}
        <button onClick={handleSubmit}>Delete Item</button>
      </li>
    </>
  );
};

export default ToDoItem;
