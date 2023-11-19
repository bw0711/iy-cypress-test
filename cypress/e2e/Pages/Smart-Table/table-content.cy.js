/// <reference types= "cypress" />
import { SmartTablePage } from "../../../po/pages/smartTablePage";
import { PAGES } from "../../../support/pages"

describe("Smart-Table: add new row, edit a row, verify changes", () => {
    const smartTablePage = new SmartTablePage();

    beforeEach(() => {
        cy.visit(PAGES.Smart_Table);
    })

    afterEach(() => {
        smartTablePage.saveChanges();
    })

    it("Add new row into table", () => {
        smartTablePage.addNewRow();
    })

    it("Edit first row in a table", () => {
        smartTablePage.editRow();
    });
});
