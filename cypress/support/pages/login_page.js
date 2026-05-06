///<reference types="cypress" />

export default{

     preencheEmail(email){
      cy.get('#user').type(email)
    },
    clicarLogar (){
       cy.get('#btnLogin').click()
    },
    validarMensagemErro(mensagem){
         cy.get('.invalid_input')
         .should('be.visible')
         .should('have.text',mensagem)
    },
    preencheSenha(senha){
      cy.get('#password').type(senha)
    },
    validarMensagemSucesso(email){
      cy.get('#swal2-title')
         .should('be.visible')
         .should('have.text','Login realizado')

      cy.get('#swal2-html-container')
          .should('be.visible')
          .should('have.text',`Olá, ${email}`)
        }
}