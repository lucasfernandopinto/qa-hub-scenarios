// cypress-js/e-commerce/adicionar-item-carrinho/adicionar_item_carrinho_test.js

describe('E-commerce - Adicionar Item a um Carrinho', () => {
    it('Deve adicionar um produto ao carrinho e verificar se ele está presente', () => {
        cy.visit('https://www.exemplo-loja.com.br/produto/tenis-de-corrida'); // Substitua pela URL de um produto real

        // Clicar no botão para adicionar ao carrinho
        cy.get('#botaoAdicionarCarrinho').click(); // Substitua pelo seletor real

        // Verificar a mensagem de confirmação
        cy.get('.mensagem-confirmacao').should('be.visible').and('contain', 'Adicionado ao carrinho!');

        // Verificar se o ícone do carrinho mostra a quantidade correta
        cy.get('.icone-carrinho').should('contain', '1');

        // Navegar para o carrinho e verificar se o item está lá
        cy.get('.icone-carrinho').click();
        cy.url().should('include', '/carrinho');
        cy.get('.lista-itens-carrinho').should('contain', 'Tênis de Corrida');
    });
});
