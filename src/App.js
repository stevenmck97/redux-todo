import React from "react";
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: #232323;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  text-align: center;
  margin: 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  background-color: #333333;
  border-radius: 10px;
  margin: 0;
  width: 50%;
  height: 50%;
  padding: 50%;
`;

const Heading = styled.h1`
  color: #ffffff;
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
`;

const CardHeading = styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
`;

// const ListStyle = styled.ul`
//   flex-direction: column;
//   list-style: none;
//   padding: 0;
//   margin: 0;
//   width: 100%;
// `;

function App() {
  return (
    <Container>
      <div className="App">
        <Heading>ToDo List</Heading>
        <Wrapper>
          <CardHeading>Add an item</CardHeading>
          <AddToDo />
          <ToDoList />
        </Wrapper>
      </div>
    </Container>
  );
}

export default App;
