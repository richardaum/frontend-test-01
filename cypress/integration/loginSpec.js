describe("Login and Logout", () => {
  it("should have a loading screen", () => {
    cy.visit("http://localhost:8080");
    cy.get(".loading");
    cy.get(".login__submit").not();
  });
  it("should have a login button", () => {
    cy.get(".login__submit").click();
  });
  it("should have a logout button", () => {
    cy.get(".sidenav .logout-button").click();
  });
});
