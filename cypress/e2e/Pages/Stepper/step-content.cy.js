/// <reference types= "cypress" />
import { PAGES } from "../../../support/pages";
import { StepperPage } from "../../../po/pages/stepperPage"

describe("Steppr", () => {
    const stepperPage = new StepperPage();

    it("Test 1, verify step content", () => {
        cy.visit(PAGES.Stepper);

        stepperPage.clickNextUntilAvailable();
    })
})