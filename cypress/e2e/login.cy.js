///<reference types="cypress" />

import { faker } from '@faker-js/faker'
import home_page from '../support/pages/home_page'
import login_page from '../support/pages/login_page'

describe('Login usuario', () => {

  beforeEach('acessar tela de login',() => {
          home_page.acessarLoginUsuario()
      })

  it('Email invalido', () => {
    // Test implementation
    login_page.preencheEmail('teste@')
    login_page.clicarLogar()
    login_page.validarMensagemErro('E-mail inválido.')
  })

  it('Email vazio', () => {
    // Test implementation
    login_page.clicarLogar()
    login_page.validarMensagemErro('E-mail inválido.')
  })

  it('senha vazio', () => {
    // Test implementation
    login_page.preencheEmail(faker.internet.email())
    login_page.clicarLogar()
    login_page.validarMensagemErro('Senha inválida.')
  })

  it('senha invalida', () => {
    // Test implementation
    login_page.preencheEmail(faker.internet.email())
    login_page.preencheSenha('12e@')
    login_page.clicarLogar()
    login_page.validarMensagemErro('Senha inválida.')
  })

  it.only('Login com credenciais válidas',  async  () => {
    const emailuser = await faker.internet.email()
    // Test implementation
    login_page.preencheEmail(emailuser)
    login_page.preencheSenha('12e@456')
    login_page.clicarLogar()
    login_page.validarMensagemSucesso(emailuser)
  })

})