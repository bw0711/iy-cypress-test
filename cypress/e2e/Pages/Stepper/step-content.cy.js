/// <reference types= "cypress" />
import { PAGES } from "../../../support/pages";

describe("Steppr", () => {

    it("Test 1, verify step content", () => {
        cy.visit(PAGES.Stepper);
        const steps = cy.get(".cy-stp-card .header .step");
        steps.each((_, index, list) => {
            cy.get(".cy-stp-card .step-content h3").should("be.visible");
            if (index < list.length - 1) {
                cy.get("[data-testid=cy-stp-btn-next]").click();
            }
        })
    })
})