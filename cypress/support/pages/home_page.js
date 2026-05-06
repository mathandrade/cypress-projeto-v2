///<reference types="cypress" />

export default{
    acessarLoginUsuario(){
        cy.visit('/')
          .get('#top_header')
        cy.get('.fa-user').click()
    }
}