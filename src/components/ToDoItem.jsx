import { deleteTodo, editTodo } from "../app/actions/todoActions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const ToDoItem = ({ todo }) => {
  const [edit, setEdit] = useState(false);
  const [newText, setNewText] = useState("");
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteTodo(todo.id));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setNewText(e.target.value);
  };

  const handleEditToggle = (e) => {
    e.preventDefault();
    setEdit(true);
    setNewText(todo.text);
  };

  const handleEditSubmit = () => {
    dispatch(editTodo({ id: todo.id, text: newText }));
    setEdit(false);
  };

  return (
    <>
      <li key={todo.id}>
        {!edit ? (
          <>
            {todo.text}
            <button onClick={handleEditToggle}>Edit</button>
            <button onClick={handleDelete}>Delete Item</button>
          </>
        ) : (
          <>
            <input type="text" value={newText} onChange={handleEdit} />
            <button onClick={handleEditSubmit}>Confirm changes</button>
          </>
        )}
      </li>
    </>
  );
};

export default ToDoItem;
