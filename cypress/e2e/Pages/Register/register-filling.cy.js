/// <reference types= "cypress" />
import { PAGES } from "../../../support/pages";
import { RegisterPage } from "../../../po/pages/registerPage";

describe("Register form", () => {
    const registerPage = new RegisterPage();

    it("Test 1, fill in all the required fields and checkboxes", () => {
        cy.visit(PAGES.Register_Form);

        registerPage.fillAUseData();
        registerPage.registerAUser();
    });
});
