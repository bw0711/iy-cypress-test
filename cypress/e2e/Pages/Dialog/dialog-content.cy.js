/// <reference types= "cypress" />
import { PAGES } from "../../../support/pages"

describe("Dialog", () => {
    it("Test 1, verify dialog form", () => {
            cy.visit(PAGES.Dialog);
            cy.get(".ng-star-inserted .result-from-dialog button").click();
            cy.get(".cdk-overlay-pane").should("be.visible");
            cy.get(".cdk-overlay-pane nb-card-header").should("include.text", "Enter your name");
            cy.get("input[placeholder=Name]").should("be.visible");
            cy.get("[data-testid=cy-btn-cancel]").should("be.visible");
            cy.get("[data-testid=cy-btn-submit]").should("be.visible");
    })
})