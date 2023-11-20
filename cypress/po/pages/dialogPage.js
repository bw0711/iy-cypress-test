/// <reference types= "cypress" />

export class DialogPage {

    #dialogPageSelectors = {
        enterNameButton: (() => cy.get(".ng-star-inserted .result-from-dialog button")),
        enterNameModalWindow: (() => cy.get(".cdk-overlay-pane")),
        enterNameModalWindowHeader: (() => cy.get(".cdk-overlay-pane nb-card-header")),
        enterNameInputOnModalWindow: (() => cy.get("input[placeholder=Name]")),
        cancelBtnOnModalWindow: (() => cy.get("[data-testid=cy-btn-cancel]")),
        submitBtnOnModalWindow: (() => cy.get("[data-testid=cy-btn-submit]"))
    }

    showReturnResultFromDialogModal() {
        this.#dialogPageSelectors.enterNameButton().click();
    }

    verifyThatModalIsShown() {
        this.#dialogPageSelectors.enterNameModalWindow()
            .should("be.visible");
    }

    verifyModalHeader() {
        this.#dialogPageSelectors.enterNameModalWindowHeader()
            .should("include.text", "Enter your name");
    }

    verifyCancelBtn() {
        this.#dialogPageSelectors.cancelBtnOnModalWindow()
            .should("be.visible");
    }

    verifySubmitBtn() {
        this.#dialogPageSelectors.submitBtnOnModalWindow()
            .should("be.visible");
    }
}