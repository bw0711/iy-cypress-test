/// <reference types= "cypress" />
import { tableInputData } from "../../support/testData";

export class SmartTablePage {

    #smartTablePageLocators = {
        addBtn: (() => cy.get(".nb-plus")),
        editBtn: (() => cy.get(".nb-edit")),
        saveBtn: (() => cy.get(".nb-checkmark")),
        deleteBtn: (() => cy.get(".nb-trash")),
        IDlocator: (() => cy.get('[placeholder="ID"]')),
        firstNameLocator: (() => cy.get('[placeholder="First Name"]')),
        lastNameLocator: (() => cy.get('[placeholder="Last Name"]')),
        userNameLocator: (() => cy.get('[placeholder="Username"]')),
        emailLocator: (() => cy.get('[placeholder="E-mail"]')),
        ageLocator: (() => cy.get('[placeholder="Age"]'))
    }

    saveChanges() {
        return this.#smartTablePageLocators.saveBtn().click();
    }

    addNewRow() {
        this.#smartTablePageLocators.addBtn().click();
        this.populateRowFields(tableInputData);
    }

    editRow() {
        this.#smartTablePageLocators.editBtn().eq(1).click();
        this.populateRowFields(tableInputData);
    }

    populateRowFields(tableInputData) {
        const locators = [
            this.#smartTablePageLocators.IDlocator().eq(1),
            this.#smartTablePageLocators.firstNameLocator().eq(1),
            this.#smartTablePageLocators.lastNameLocator().eq(1),
            this.#smartTablePageLocators.userNameLocator().eq(1),
            this.#smartTablePageLocators.emailLocator().eq(1),
            this.#smartTablePageLocators.ageLocator().eq(1)
        ];

        locators.forEach((locator, index) => {
            const value = tableInputData[Object.keys(tableInputData)[index]];
            locator.first().clear().type(value); 
        });
    }
}
