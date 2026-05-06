///<reference types="cypress" />

export default{
    acessarCadastrUsuario(){
        cy.visit('/')
          .get('#top_header')
        cy.get('.fa-lock').click()
    }
}