/// <reference types= "cypress" />

describe("Testsuite for homework 12", () => {

    it("Task 1, verify step content", () => {
        cy.fixture("pages").then((pages) => {
            const stepper = pages.stepper;
            cy.visit(stepper);
            const steps = cy.get(".cy-stp-card .header .step");
            steps.each((_, index, list) => {
                cy.get(".cy-stp-card .step-content h3").should("be.visible");
                if (index < list.length - 1) {
                    cy.get(".cy-stp-action-next").click();
                }
            })
        })
    })

    it("Task 2, verify dialog form", () => {
        cy.fixture("pages").then((pages) => {
            const dialog_page = pages.dialog;
            cy.visit(dialog_page);
            cy.get(".ng-star-inserted .result-from-dialog button").click();
            cy.get(".cdk-overlay-pane").should("be.visible");
            cy.get(".cdk-overlay-pane nb-card-header").should("include.text", "Enter your name");
            cy.get("input[placeholder=Name]").should("be.visible");
            cy.get("#cy-btn-cancel").should("be.visible");
            cy.get("#cy-btn-submit").should("be.visible");
        })
    })

    it("Task 3, verify Layout form", () => {
        cy.fixture("pages").then((pages) => {
            const form_page = pages.forms;
            cy.visit(form_page);
            cy.get("#inputEmail3")
                .clear()
                .type("test@test.com");
            cy.get("#inputPassword3")
                .clear()
                .type("p@ssw0rd");
            cy.get("#cy-checkbox-rm")
                .click();
            cy.get("#cy-btn-sign-in")
                .click();
        })
    })
})