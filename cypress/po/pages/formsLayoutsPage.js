/// <reference types= "cypress" />
import { validUserData } from "../../support/testData" 

export class FormsLayoutsPage {

    #formsLayoutsPageSelectors = {
        horizontalFormEmailInput: (() => cy.get("#inputEmail3")),
        horizontalFormPwdInput: (() => cy.get("#inputPassword3")),
        horizontalFormRmCheckbox: (() => cy.get("[data-testid=cy-checkbox-rm]")),
        horizontalFormSignInBtn: (() => cy.get("[data-testid=cy-btn-sign-in]"))
    }

    inputnUserName() {
        this.#formsLayoutsPageSelectors.horizontalFormEmailInput()
            .type(validUserData.validUserName);
    }

    inputUserPwd() {
        this.#formsLayoutsPageSelectors.horizontalFormPwdInput()
            .type(validUserData.validPassword);
    }

    clickRemebmerMeCheckbox() {
        this.#formsLayoutsPageSelectors.horizontalFormRmCheckbox()
            .click();
    }

    clickSignInBtn() {
        this.#formsLayoutsPageSelectors.horizontalFormSignInBtn()
            .click();
    }

}