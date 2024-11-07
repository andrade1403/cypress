export class PrincipalPage {
    static getTitle() {
        return cy.get('.gh-nav-menu-details-sitetitle');
    }
    static clickPosts() {
        return cy.get('#ember19').click({ force: true });
    }

    static clickPages() {
        return cy.get('#ember28').click({ force: true });
    }

    static clickTags() {
        return cy.get('#ember29').click({ force: true });
    }
}