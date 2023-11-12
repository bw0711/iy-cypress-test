/// <reference types= "cypress" />
import { PAGES } from "../../../support/pages"

describe("Smart-Table: add new row, edit a row, verify changes", () => {

    const inputData = [61, "Ivan", "Yeremenko", "bw0711", "bw0711@gmail.com", 31];
    const editedInputData = [2, "Updated Ivan", "Updated Yeremenko", "updated_bw0711", "updated_bw0711@gmail.com", 32];
    const locators = [
        { placeholder: 'ID', index: 1 },
        { placeholder: 'First Name', index: 1 },
        { placeholder: 'Last Name', index: 1 },
        { placeholder: 'Username', index: 1 },
        { placeholder: 'E-mail', index: 1 },
        { placeholder: 'Age', index: 1 }
    ];

    beforeEach(() => {
        cy.visit(PAGES.Smart_Table);
    })

    afterEach(() => {
        cy.get(".nb-checkmark").click();
    })

    it("Add new row into table", () => {

        cy.get(".nb-plus").click();
        locators.forEach((locator, index) => {
            cy.get(`[placeholder="${locator.placeholder}"]`).eq(locator.index).type(inputData[index]);
        });
    })

    it("Edit first row in a table", () => {
        
        cy.get(".nb-edit").eq(1).click();
        locators.forEach((locator, index) => {
            cy.get(`[placeholder="${locator.placeholder}"]`).eq(locator.index).clear().type(editedInputData[index]);
        });
    });
});
