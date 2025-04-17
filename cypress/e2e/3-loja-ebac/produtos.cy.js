/// <reference types= "cypress"/>

describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')//foram feitos testes com outros caminhos, mas meu interesse foi manter assim
            //.first()
            //.click()
            //.eq(2)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()

            cy.get('#tab-title-description > a').should('contain', 'Descrição')
        
    });
});