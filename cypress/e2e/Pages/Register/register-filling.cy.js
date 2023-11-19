/// <reference types= "cypress" />
import { PAGES } from "../../../support/pages"

describe("Register form", () => {
    it("Test 1, fill in all the required fields and checkboxes", () => {
        cy.visit(PAGES.Register_Form);

        cy.get('[aria-labelledby="title"]').within(() => {
            cy.get("[name=fullName]").type("Ivan Yeremenko");
            cy.get("[name=email]").type("email@mail.com");
            cy.get("[name=password]").type("p@ssw0rd");
            cy.get("[name=rePass]").type("p@ssw0rd");
      
            cy.get("span.custom-checkbox").click();
      
            cy.get("[name=fullName]").should("have.value", "Ivan Yeremenko");
            cy.get("[name=email]").should("have.value", "email@mail.com");
            cy.get("[name=password]").should("have.value", "p@ssw0rd");
            cy.get("[name=rePass]").should("have.value", "p@ssw0rd");
            cy.get("[ng-reflect-disabled]").should("not.be.true");
          });
      
          cy.contains("Register").click();
    });
});