/// <reference types= "cypress" />

export class StepperPage {

    #stepperPageLocators = {
        stepNumber: (() => cy.get(".cy-stp-card .header .step")),
        stepHeader: (() => cy.get(".cy-stp-card .step-content h3")),
        stepperNextBtn: (() => cy.get("[data-testid=cy-stp-btn-next]")),
        stepperPreviousBtn: (() => cy.get("[data-testid=cy-stp-btn-prev]"))
    }

    verifyFromHeader() {
        this.#stepperPageLocators.stepHeader().should("be.visible");
    }

    clickNextUntilAvailable() {
        this.#stepperPageLocators.stepNumber().each((_, index, list) => {
            this.verifyFromHeader();
            if (index < list.length - 1) {
                this.#stepperPageLocators.stepperNextBtn().click();
            }
        })
    }
}