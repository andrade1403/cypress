import { LogIn } from "../pages/logIn";
import { PostPage } from "../pages/postPage";
import { PrincipalPage } from "../pages/principalPage";

describe('Escenarios E2E para Ghost', function () {
    it('E0001 - Crear un post con titulo y contenido', function () {
        //Given que estoy en la pagina del login del Admin
        cy.visit('http://localhost:2368/ghost');

        //When escriba mis credenciales
        LogIn.logIn('d.andrades@uniandes.edu.co', 'ArpolisVI204*');

        //And le de click en el boton de Sign In
        LogIn.logInButton();

        //Then debería ver la página principal del administrador y su titulo
        PrincipalPage.getTitle().should('have.text', 'MISW4103');

        //When le de click en la sección de Posts
        PrincipalPage.clickPosts();

        //Then el administrador debería ver la página de listado de posts
        PostPage.getTitleSection().should('include.text', 'Posts');

        //When le de click en el boton New Post
        PostPage.clickNewPost();

        //Then el administrador debería ver la página de creación de post
        PostPage.creationPostPage().should('have.value', '');

        //When escriba el titulo del post
        let titulo = 'Prueba';
        PostPage.writeTitle(titulo);

        //And el contenido del post
        let contenido = 'Este es un post de prueba';
        PostPage.writeContent(contenido);

        //And le de click en el boton de Publish
        PostPage.publishPostButton();

        //And le de click en el boton Continue, final review
        PostPage.continueButton();

        //And le de click en el boton Publish post, right now
        PostPage.publishPostButtonFinal();

        //And cierre el modal de confirmación de publicación
        PostPage.closePublishModal();

        //Then debería ver el post publicado en la lista de posts
        PostPage.lastPostCreated();
    });
});