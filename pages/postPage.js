export class PostPage {
    static getTitleSection() {
        return cy.get('a.active.ember-view').should('be.visible');
    }

    static clickNewPost() {
        return cy.get('[data-test-new-post-button=""]').click({ force: true });
    }

    static writeTitle(title) {
        return cy.get('[data-test-editor-title-input=""]').type(title);
    }

    static clickInContent() {
        return cy.get('p[data-koenig-dnd-droppable="true"]').first().click({ force: true });
    }

    static writeContent(content) {
        return cy.get('p[data-koenig-dnd-droppable="true"]').first().type(content);
    }

    static creationPostPage() {
        return cy.get('[data-test-editor-title-input=""]').should('be.visible');
    }

    static publishPostButton() {
        return cy.get('[data-test-button="publish-flow"]').first().click({ force: true });
    }

    static continueButton() {
        return cy.get('[data-test-button="continue"]').first().click({ force: true });
    }

    static publishPostButtonFinal() {
        return cy.get('[data-test-button="confirm-publish"]').first().click({ force: true });
    }

    static closePublishModal() {
        return cy.get('[data-test-button="close-publish-flow"]').first().click({ force: true});
    }

    static lastPostCreated(title) {
        // Verifica si existe algún elemento en la lista de posts
        cy.get('body').then(($body) => {
            if ($body.find('div.gh-posts-list-item-group').length) {
                // Si existe, selecciona el primer elemento en la lista
                cy.get('li.gh-list-row.gh-posts-list-item.gh-post-list-plain-status').first().within(() => {
                    // Encuentra el post por data-test-post-id y guarda su ID
                    cy.get('a').first().then(($post) => {
                        cy.get('h3.gh-content-entry-title').first().should('include.text', title);
                    });
                });
            }
        });
    }
}