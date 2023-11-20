/// <reference types= "cypress" />
import { validUserData, invalidUserData } from "../../support/testData" 

export class RegisterPage {

    #registerpageLocators = {
        formTitle: (() => cy.get("#title")),
        fullNameHeader: (() => cy.get("[for=input-name]")),
        emailHeader: (() => cy.get("[for=input-email]")),
        passwordHeader: (() => cy.get("[for=input-password]")),
        repeatPasswordHeader: (() => cy.get("[for=input-re-password]")),
        conditionsHeader: (() => cy.get("[name=terms]")),
        fullNameInput: (() => cy.get("[name=fullName]")),
        emailInput: (() => cy.get("[name=email]")),
        passwordInput: (() => cy.get("[name=password]")),
        repeatPasswordInput: (() => cy.get("[name=rePass]")),
        codnitionsCheckBox: (() => cy.get("span.custom-checkbox")),
        registerBtn: (() => cy.contains(" Register ")),
        registerBtnIsAvailable: (() => cy.get("[ng-reflect-disabled]")),
        validationMessage: (() => cy.get(".caption.status-danger"))
    }

    verifyRegisterFormHeaders() {
        this.#registerpageLocators.formTitle().should("have.text", "Register");
        this.#registerpageLocators.fullNameHeader().should("have.text", "Full name:");
        this.#registerpageLocators.emailHeader().should("have.text", "Email address:");
        this.#registerpageLocators.passwordHeader().should("have.text", "Password:");
        this.#registerpageLocators.repeatPasswordHeader().should("have.text", "Repeat password:");
        this.#registerpageLocators.conditionsHeader().should("have.text", " Agree to Terms & Conditions");
    }

    fillAUseData() {
        //i haven’t figured out how to input the same password in both fields using a faker, 
        //that's why "tempPwd" is here
        const tempPwd = validUserData.validPassword;
        this.#registerpageLocators.fullNameInput().type(validUserData.validFullName);
        this.#registerpageLocators.emailInput().type(validUserData.validEmail);
        this.#registerpageLocators.passwordInput().type(tempPwd);
        this.#registerpageLocators.repeatPasswordInput().type(tempPwd);
    }

    verifyRegisterFormInputs() {
        this.#registerpageLocators.fullNameInput().should("not.be.empty");
        this.#registerpageLocators.emailInput().should("not.be.empty");
        this.#registerpageLocators.passwordInput().should("not.be.empty");
        this.#registerpageLocators.repeatPasswordInput().should("not.be.empty");
        this.#registerpageLocators.registerBtnIsAvailable().should("not.be.true");
    }

    registerAUser() {
        this.#registerpageLocators.codnitionsCheckBox().click();
        this.#registerpageLocators.registerBtn().click();
    }

    validateFullNameErrorMessage() {
        this.#registerpageLocators.fullNameInput().type(invalidUserData.invalidFullName);
        cy.get("body").click();
        this.#registerpageLocators.validationMessage()
            .should("have.text", " Full name should contains from 4 to 50 characters ");
        this.#registerpageLocators.fullNameInput().clear();
    }

    validatePasswordErrorMessage() {
        this.#registerpageLocators.passwordInput().type(invalidUserData.invalidPassword);
        cy.get("body").click();
        this.#registerpageLocators.validationMessage()
            .should("have.text", " Password should contain from 4 to 50 characters ");
        this.#registerpageLocators.passwordInput()
            .clear()
            .type(validUserData.validPassword);
    }

    validatePasswordConfirmationErrorMessage() {
        this.validatePasswordErrorMessage;
        this.#registerpageLocators.repeatPasswordInput().clear();
        cy.get("body").click();
        this.#registerpageLocators.validationMessage()
            .should("have.text", " Password confirmation is required! ");
        this.#registerpageLocators.repeatPasswordInput()
            .clear()
            .type(validUserData.validPassword);
    }

    validateErrorMessages() {
        this.validateFullNameErrorMessage();
        this.validatePasswordErrorMessage();
        this.validatePasswordConfirmationErrorMessage();
    }
}