/// <reference types= "cypress"/>

describe ('Funcionalidade: login', () =>{

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it ('Deve fazer login com sucesso', () => {
        cy.get('#username').type('jaque.henz@testes.com.br')
        cy.get('#password').type('Teste.1234')
        cy.get('.woocommerce-form > .button').click ()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, jaque.henz (não é jaque.henz? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('jaque.enz@testes.com.br')
        cy.get('#password').type('Teste.1234')
        cy.get('.woocommerce-form > .button').click ()
        cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('jaque.henz@testes.com.br')
        cy.get('#password').type('Teste.12345')
        cy.get('.woocommerce-form > .button').click ()
        cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail jaque.henz@testes.com.br está incorreta. ')
        
    });

})
