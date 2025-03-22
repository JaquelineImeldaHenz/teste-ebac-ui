/// <reference types= "cyspress"/>

describe ('Funcionalidade: login', () =>{

    it ('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('jaque.henz@testes.com.br')
        cy.get('#password').type('Teste.1234')
        cy.get('.woocommerce-form > .button').click ()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, jaque.henz (não é jaque.henz? Sair)')
    })

})
