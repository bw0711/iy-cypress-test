/// <reference types= "cypress" />
import { PAGES } from "../../../support/pages"
import { RegisterPage } from "../../../po/pages/registerPage";

describe("Register form", () => {
    const registerPage = new RegisterPage();

    it("Test 2, verify validation messages", () => {
        cy.visit(PAGES.Register_Form);

        registerPage.validateErrorMessages();

    });
});
