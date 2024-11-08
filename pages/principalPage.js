export class PrincipalPage {
    static getTitle() {
        return cy.get('.gh-nav-menu-details-sitetitle');
    }
    static clickPosts() {
        return cy.get('[data-test-nav="posts"]').click({ force: true });
    }

    static clickPages() {
        return cy.get('[data-test-nav="pages"]').click({ force: true });
    }

    static clickTags() {
        return cy.get('[data-test-nav="tags"]').click({ force: true });
    }

    static clickSitePage() {
        return cy.get('[data-test-nav="site"]').click({ force: true });
    }
}