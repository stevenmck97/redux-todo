import { deleteTodo, editTodo } from "../app/actions/todoActions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  & {
    background-color: #4caf50; /* Green */
    cursor: pointer;
  }
  &:hover {
    background-color: #3e8e41;
  }
`;

const ListWrapper = styled.li`
  & {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 0.5rem 0;
    width: 200px;
  }
`;

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
      <ListWrapper key={todo.id}>
        {!edit ? (
          <>
            {todo.text}
            <Button onClick={handleEditToggle}>Edit</Button>
            <button onClick={handleDelete}>Delete Item</button>
          </>
        ) : (
          <>
            <input type="text" value={newText} onChange={handleEdit} />
            <button onClick={handleEditSubmit}>Confirm changes</button>
          </>
        )}
      </ListWrapper>
    </>
  );
};

export default ToDoItem;
