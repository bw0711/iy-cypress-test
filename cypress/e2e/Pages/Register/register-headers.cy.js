/// <reference types= "cypress" />
import { PAGES } from "../../../support/pages"

describe("Register form", () => {
    it("Test 1, verify headers", () => {
        cy.visit(PAGES.Register_Form);
        cy.get("#title").should("have.text", "Register");
        cy.get("[for=input-name]").should("have.text", "Full name:");
        cy.get("[for=input-email]").should("have.text", "Email address:");
        cy.get("[for=input-password]").should("have.text", "Password:");
        cy.get("[for=input-re-password]").should("have.text", "Repeat password:");
        cy.get("[name=terms]").should("have.text", " Agree to Terms & Conditions");
    });
});
