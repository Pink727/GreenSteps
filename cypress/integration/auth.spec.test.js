describe("User Authentication", () => {
    it("should allow a user to sign up", () => {
      cy.visit("/signup"); // Navigate to signup page
  
      cy.get('input[name="username"]').type("testuser");
      cy.get('input[name="email"]').type("test@example.com");
      cy.get('input[name="password"]').type("password123");
      cy.get('button[type="submit"]').contains("Sign Up").click();
  
      cy.url().should("include", "/dashboard"); // Redirects to dashboard after signup
    });
  
    it("should allow a user to log in", () => {
      cy.visit("/login");
  
      cy.get('input[name="email"]').type("test@example.com");
      cy.get('input[name="password"]').type("password123");
      cy.get('button[type="submit"]').contains("Login").click();
  
      cy.url().should("include", "/dashboard");
    });
  });
