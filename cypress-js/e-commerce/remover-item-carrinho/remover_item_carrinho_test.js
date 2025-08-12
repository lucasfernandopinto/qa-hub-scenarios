// cypress-js/e-commerce/remover-item-carrinho/remover_item_carrinho_test.js

describe('E-commerce - Remover Item do Carrinho', () => {
    beforeEach(() => {
        // Pré-requisito: Adicionar um item ao carrinho antes de cada teste
        cy.visit('https://www.exemplo-loja.com.br/produto/tenis-de-corrida');
        cy.get('#botaoAdicionarCarrinho').click();
        cy.get('.icone-carrinho').click();
        cy.url().should('include', '/carrinho');
        cy.log('Pré-requisito: Item adicionado ao carrinho.');
    });

    it('Deve remover um item do carrinho com sucesso e recalcular o total', () => {
        cy.get('.lista-itens-carrinho').should('have.length', 1);

        // Remover o item do carrinho
        cy.get('.botao-remover-item').click(); // Substitua pelo seletor real

        // Verificar se o item foi removido
        cy.get('.lista-itens-carrinho').should('have.length', 0);
        cy.contains('Seu carrinho está vazio.').should('be.visible');

        // Opcional: Verificar se o total é zero
        cy.get('.total-carrinho').should('contain.text', 'R$ 0,00');
    });
});
