/// <reference types= "cypress" />
import { PAGES } from "../../../support/pages";
import { FormsLayoutsPage } from "../../../po/pages/formsLayoutsPage"

describe("Forms", () => {
    const formsLayoutsPage = new FormsLayoutsPage();

    it("Test 1, verify Layout form", () => {
        cy.visit(PAGES.Forms);
        
        formsLayoutsPage.inputnUserName();
        formsLayoutsPage.inputUserPwd();
        formsLayoutsPage.clickRemebmerMeCheckbox();
        formsLayoutsPage.clickSignInBtn();
    })
})
