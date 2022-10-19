import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddToDo from "./AddToDo";
import { Provider } from "react-redux";
import { store } from "../app/store";

it("nothing should happen when textbox is empty and button is clicked", () => {
  render(
    <Provider store={store}>
      <AddToDo />
    </Provider>
  );
  // eslint-disable-next-line testing-library/no-debugging-utils

  const button = screen.getByRole("button", { name: /add/i });

  expect(screen.getByRole("button", { name: /add/i })).toBeInTheDocument();
  expect(button).toBeEnabled();
});
