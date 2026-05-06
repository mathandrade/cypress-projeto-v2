///<reference types="cypress" />

import { faker } from '@faker-js/faker';

import commum_page from '../support/pages/commum_page'
import cadastro_page from '../support/pages/cadastro_usuario_page'
describe('Cadastro de Usuário', () => {

    beforeEach('acessar tela de cadastro',() => {
        commum_page.acessarCadastrUsuario()
    })
it('Campo nome vazio', () => {
    // Test implementation
    cadastro_page.clicarCadastrar()
    cadastro_page.validarMensagemErro('O campo nome deve ser prenchido')
  })

  it('Campo e-mail vazio', () => {
    //const name = faker.person.fullName()
     cadastro_page.preencheNome(faker.person.fullName())
     cadastro_page.clicarCadastrar()
     cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')

    // Test implementation
  })
   it('Campo e-mail inválido', () => {
     cadastro_page.preencheNome(faker.person.fullName())
     cadastro_page.preencheEmail('teste@')
     cadastro_page.clicarCadastrar()
     cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')

  })
   it('Campo senha vazio', () => {
    
     cadastro_page.preencheNome(faker.person.fullName())
     cadastro_page.preencheEmail(faker.internet.email())
     cadastro_page.clicarCadastrar()
     cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')

  })
   it('Campo senha inválida', () => {
     cadastro_page.preencheNome(faker.person.fullName())
     cadastro_page.preencheEmail(faker.internet.email())
     cadastro_page.preencheSenha('123@')
     cadastro_page.clicarCadastrar()
     cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')

  })

   it('Cadastro com sucesso', () => {
    const name =  faker.person.fullName()

    cadastro_page.preencheNome(name)
     cadastro_page.preencheEmail(faker.internet.email())
     cadastro_page.preencheSenha('1234569')
     cadastro_page.clicarCadastrar()
     cadastro_page.validarMensagemSucesso(name)
  })

  // caso de erro posso fazer essa função assincrona coisas
  // podem ser executadas antes do resultado esperado, 
  // como por exemplo o nome do usuário 
  // posso dar um await para realmente validar o resultado esperado
 // it.only('Cadastro com sucesso', async () => {
 //   const name = await faker.person.fullName()
//   cadastro_page.preencheNome(name)
// cadastro_page.preencheEmail(faker.internet.email())
   // cadastro_page.preencheSenha('1234569')
    // cadastro_page.clicarCadastrar()
    // cadastro_page.validarMensagemSucesso(name)
  //})
})
  
