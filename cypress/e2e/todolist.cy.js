/* eslint-disable no-undef */
<reference types="cypress" />;

describe("Todo List", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  //   it('adds a todo', () => {
  //     cy.get('[data-cy="add-todo"]').type('test{enter}');
  //     cy.get('[data-cy="todo-list"]').should('have.length', 1);
  //   });

  //   it('deletes a todo', () => {
  //     cy.get('[data-cy="add-todo"]').type('test{enter}');
  //     cy.get('[data-cy="todo-list"]').should('have.length', 1);
  //     cy.get('[data-cy="delete-todo"]').click();
  //     cy.get('[data-cy="todo-list"]').should('have.length', 0);
  //   });

  it("adds a todo item", () => {
    cy.findByRole("textbox").type("Get apples in the shop");
    cy.findByRole("button", { name: /add/i }).click();
    // cy.findByRole("listitem").should("have.text", "Get apples in the shop");
  });
});
