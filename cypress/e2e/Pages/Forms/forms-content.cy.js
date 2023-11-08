/// <reference types= "cypress" />
import { PAGES } from "../../../support/pages";

describe("Forms", () => {
    it("Test 1, verify Layout form", () => {
        cy.visit(PAGES.Forms);
        cy.get("#inputEmail3")
            .clear()
            .type("test@test.com");
        cy.get("#inputPassword3")
            .clear()
            .type("p@ssw0rd");
        cy.get("[data-testid=cy-checkbox-rm]")
            .click();
        cy.get("[data-testid=cy-btn-sign-in]")
            .click();
    })
})
