import { LogIn } from "../pages/logIn";
import { PostPage } from "../pages/postPage";
import { PrincipalPage } from "../pages/principalPage";
import { faker } from '@faker-js/faker';

describe('Escenarios E2E para Ghost', function () {

    beforeEach(() => {
        //Given que estoy en la pagina del login del Admin
        cy.visit('http://localhost:2368/ghost');

        //When inicio sesión con mis credenciales
        LogIn.logIn('d.andrades@uniandes.edu.co', 'ArpolisVI204*');
        LogIn.logInButton();

        //Then debería estar en el sitio principal
        PrincipalPage.getTitle().should('have.text', 'MISW4103');
    });

    // it('E0001 - Crear un post con titulo', function () {
    //     //When le de click en la sección de Posts
    //     PrincipalPage.clickPosts();

    //     //Then el administrador debería ver la página de listado de posts
    //     PostPage.getTitleSection().should('include.text', 'Posts');

    //     //When le de click en el boton New Post
    //     PostPage.clickNewPost();

    //     //Then el administrador debería ver la página de creación de post
    //     PostPage.creationPostPage().should('have.value', '');

    //     //Then escriba el titulo del post
    //     let titulo = faker.lorem.word();
    //     PostPage.writeTitle(titulo);

    //     //Then escribimos contenido y borramos para activar boton de publicar
    //     let contenido = faker.lorem.words();
    //     PostPage.writeContent(contenido);
    //     PostPage.clearContent();

    //     //And le de click en el boton de Publish
    //     PostPage.publishPostButton();
    //     cy.wait(1000);
        
    //     //And le de click en el boton Continue, final review
    //     PostPage.continueButton();
       
    //     //And le de click en el boton Publish post, right now
    //     PostPage.publishPostButtonFinal();

    //     //And cierre el modal de confirmación de publicación
    //     PostPage.closePublishModal();

    //     //Then debería ver el post publicado en la lista de posts
    //     PostPage.lastPostCreated(titulo);
    // });

    // it('E0002 - Crear un post con titulo y contenido', function () {
    //     //When le de click en la sección de Posts
    //     PrincipalPage.clickPosts();

    //     //Then el administrador debería ver la página de listado de posts
    //     PostPage.getTitleSection().should('include.text', 'Posts');

    //     //When le de click en el boton New Post
    //     PostPage.clickNewPost();

    //     //Then el administrador debería ver la página de creación de post
    //     PostPage.creationPostPage().should('have.value', '');

    //     //When escriba el titulo del post
    //     let titulo = faker.lorem.word();
    //     PostPage.writeTitle(titulo);

    //     //And el contenido del post
    //     let contenido = faker.lorem.words();
    //     PostPage.writeContent(contenido);

    //     //And le de click en el boton de Publish
    //     PostPage.publishPostButton();
    //     cy.wait(1000);

    //     //And le de click en el boton Continue, final review
    //     PostPage.continueButton();
       
    //     //And le de click en el boton Publish post, right now
    //     PostPage.publishPostButtonFinal();

    //     //And cierre el modal de confirmación de publicación
    //     PostPage.closePublishModal();

    //     //Then debería ver el post publicado en la lista de posts
    //     PostPage.lastPostCreated(titulo, 'notClick');

    //     // //When le de click en el post editado
    //     PostPage.lastPostCreated(titulo, 'click');

    //     // //Then el contenido del post debería ser el editado
    //     PostPage.viewContent(contenido);
    // });

    // it('E0003 - Editar el titulo de un post previamente creado', function () {
    //     //When le de click en la sección de Posts
    //     PrincipalPage.clickPosts();

    //     //Then el administrador debería ver la página de listado de posts
    //     PostPage.getTitleSection().should('include.text', 'Posts');

    //     //When le de click en el boton New Post
    //     PostPage.clickNewPost();

    //     //Then el administrador debería ver la página de creación de post
    //     PostPage.creationPostPage().should('have.value', '');

    //     //When escriba el titulo del post
    //     let titulo = faker.lorem.word();
    //     PostPage.writeTitle(titulo);

    //     //And el contenido del post
    //     let contenido = faker.lorem.words();
    //     PostPage.writeContent(contenido);

    //     //And le de click en el boton de Publish
    //     PostPage.publishPostButton();
    //     cy.wait(1000);

    //     //And le de click en el boton Continue, final review
    //     PostPage.continueButton();
       
    //     //And le de click en el boton Publish post, right now
    //     PostPage.publishPostButtonFinal();

    //     //And cierre el modal de confirmación de publicación
    //     PostPage.closePublishModal();

    //     //Then debería ver el post publicado en la lista de posts
    //     PostPage.lastPostCreated(titulo, 'notClick');

    //     //When le de click en el post creado
    //     PostPage.lastPostCreated(titulo, 'click');
        
    //     //Then edito el titulo del post
    //     let tituloEditado = faker.lorem.word();
    //     PostPage.writeTitle(tituloEditado);

    //     //And le de click en el boton de update
    //     PostPage.updatePostButton();

    //     //And le de click en el boton de devolverme a la lista de posts
    //     PostPage.clickBackToPosts();

    //     //Then debería ver el post publicado en la lista de posts
    //     PostPage.lastPostCreated(tituloEditado, 'notClick');
    // });

    // it('E0004 - Editar el titulo y contenido de un post previamente creado', function () {
    //     //When le de click en la sección de Posts
    //     PrincipalPage.clickPosts();

    //     //Then el administrador debería ver la página de listado de posts
    //     PostPage.getTitleSection().should('include.text', 'Posts');

    //     //When le de click en el boton New Post
    //     PostPage.clickNewPost();

    //     //Then el administrador debería ver la página de creación de post
    //     PostPage.creationPostPage().should('have.value', '');

    //     //When escriba el titulo del post
    //     let titulo = faker.lorem.word();
    //     PostPage.writeTitle(titulo);

    //     //And el contenido del post
    //     let contenido = faker.lorem.words();
    //     PostPage.writeContent(contenido);

    //     //And le de click en el boton de Publish
    //     PostPage.publishPostButton();
    //     cy.wait(1000);

    //     //And le de click en el boton Continue, final review
    //     PostPage.continueButton();
       
    //     //And le de click en el boton Publish post, right now
    //     PostPage.publishPostButtonFinal();

    //     //And cierre el modal de confirmación de publicación
    //     PostPage.closePublishModal();

    //     //Then debería ver el post publicado en la lista de posts
    //     PostPage.lastPostCreated(titulo, 'notClick');

    //     //When le de click en el post creado
    //     PostPage.lastPostCreated(titulo, 'click');
        
    //     //Then edito el titulo del post
    //     let tituloEditado = faker.lorem.word();
    //     PostPage.writeTitle(tituloEditado);

    //     //Then edito el contenido del post
    //     let contenidoEditado = faker.lorem.words();
    //     PostPage.writeContent(contenidoEditado);

    //     //And le de click en el boton de update
    //     PostPage.updatePostButton();
    //     cy.wait(1000);

    //     //And le de click en el boton de devolverme a la lista de posts
    //     PostPage.clickBackToPosts();
    //     cy.wait(1000);

    //     //Then debería ver el post publicado en la lista de posts
    //     PostPage.lastPostCreated(tituloEditado, 'notClick');

    //     // //When le de click en el post editado
    //     PostPage.lastPostCreated(tituloEditado, 'click');

    //     // //Then el contenido del post debería ser el editado
    //     PostPage.viewContent(contenidoEditado);
    // });

    it('E0005 - Eliminamos un post previamente creado', function () {
        //When le de click en la sección de Posts
        PrincipalPage.clickPosts();

        //Then el administrador debería ver la página de listado de posts
        PostPage.getTitleSection().should('include.text', 'Posts');

        //When le de click en el boton New Post
        PostPage.clickNewPost();

        //Then el administrador debería ver la página de creación de post
        PostPage.creationPostPage().should('have.value', '');

        //When escriba el titulo del post
        let titulo = faker.lorem.word();
        PostPage.writeTitle(titulo);

        //And el contenido del post
        let contenido = faker.lorem.words();
        PostPage.writeContent(contenido);

        //And le de click en el boton de Publish
        PostPage.publishPostButton();
        cy.wait(1000);

        //And le de click en el boton Continue, final review
        PostPage.continueButton();
       
        //And le de click en el boton Publish post, right now
        PostPage.publishPostButtonFinal();

        //And cierre el modal de confirmación de publicación
        PostPage.closePublishModal();

        //Then debería ver el post publicado en la lista de posts
        PostPage.lastPostCreated(titulo, true);

        //When le de click derecho en el post creado
        PostPage.lastPostCreated(titulo, 'rightClick');

        //Then le de click en el boton de delete
        PostPage.deletePost();
    });
});