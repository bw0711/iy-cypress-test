/// <reference types= "cypress" />
import { PAGES } from "../../../support/pages"

describe("Register form", () => {
    it("Test 2, verify validation messages", () => {
        cy.visit(PAGES.Register_Form);

        cy.get("[name=fullName").type("AAA");
        cy.get("body").click();
        cy.get(".caption.status-danger").should("have.text", " Full name should contains from 4 to 50 characters ");
        cy.get("[name=fullName").clear();

        cy.get("[name=password]").type("AAA");
        cy.get("body").click();
        cy.get(".caption.status-danger").should("have.text", " Password should contain from 4 to 50 characters ");
        cy.get("[name=password]")
            .clear()
            .type("AAAA");
            
        cy.get("[name=rePass").clear();
        cy.get("body").click();
        cy.get(".caption.status-danger").should("have.text", " Password confirmation is required! ");
    });
});
