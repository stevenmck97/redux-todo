import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../app/actions/addTodo";

const AddToDo = () => {
  //   const [value, setValue] = useState("");
  const [todo, setTodo] = useState({ id: 1, text: "" });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    // setValue("");
  };

  return (
    <>
      <form>
        <label>Add a new item</label>
        <input
          type="text"
          value={todo.text}
          onChange={(e) => {
            setTodo({ id: (todo.id += 1), text: e.target.value });
          }}
        />
        <button onClick={handleSubmit}>Add</button>
      </form>
    </>
  );
};

export default AddToDo;
