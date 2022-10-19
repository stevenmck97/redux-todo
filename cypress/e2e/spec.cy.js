/* eslint-disable no-undef */
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
    cy.visit("http://localhost:3000/");
    cy.get("input").click();
    cy.get("input").type("hello");
    cy.get("button:nth-child(3)").click();
    cy.get("input:nth-child(1)").click();
    cy.get("input:nth-child(1)").type("hello how are you ");
    cy.get("button").click();

    // cy.findByRole("listitem").should("have.text", "Get apples in the shop");
  });
});
