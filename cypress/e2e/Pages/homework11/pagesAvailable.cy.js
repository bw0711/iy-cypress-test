/// <reference types= "cypress" />

beforeEach(() => {
    cy.fixture('pages').as('pagesData');
  });

describe("Verify all the pages are available", () => {

    it("Verify all the pages are available", () => {
        cy.get("@pagesData").then((pages) => {
            for (const pageName in pages) {
                const pageUrl = pages[pageName];
                cy.visit(pageUrl);
                cy.get('title').should('contain', 'ngx-admin Demo Application')
            }
        }) 
    })
})