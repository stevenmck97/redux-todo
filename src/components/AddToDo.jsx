import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../app/actions/addTodo";
import uniqid from "uniqid";

const AddToDo = () => {
  const [todo, setTodo] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo.text) {
      dispatch(addTodo(todo));
      setTodo({});
    }
  };

  return (
    <>
      <form>
        <label>Add a new item</label>
        <input
          type="text"
          value={todo.text || ""}
          onChange={(e) => {
            setTodo({ id: uniqid(), text: e.target.value });
          }}
        />
        <button onClick={handleSubmit}>Add</button>
      </form>
    </>
  );
};

export default AddToDo;
