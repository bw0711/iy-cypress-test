/// <reference types= "cypress" />
import { PAGES } from "../../../support/pages";
import { DialogPage } from "../../../po/pages/dialogPage"

describe("Dialog", () => {
    const dialogPage = new DialogPage();

    it("Test 1, verify dialog form", () => {
            cy.visit(PAGES.Dialog);

            dialogPage.showReturnResultFromDialogModal();
            dialogPage.verifyThatModalIsShown();
            dialogPage.verifyModalHeader();
            dialogPage.verifyCancelBtn();
            dialogPage.verifySubmitBtn();
    })
})