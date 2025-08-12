// cypress-js/e-commerce/verificar-historico-pedidos/verificar_historico_pedidos_test.js

describe('E-commerce - Verificar Histórico de Pedidos', () => {
    beforeEach(() => {
        // Pré-requisito: Login e garantir que o usuário tem pedidos
        cy.login('usuario_com_pedidos@exemplo.com', 'SenhaSegura123'); // Custom command para login
        cy.log('Pré-requisito: Login realizado com sucesso.');
    });

    it('Deve exibir o histórico de pedidos e os detalhes de uma compra', () => {
        // 1. Navegar para a página de histórico de pedidos
        cy.visit('https://www.exemplo-loja.com.br/historico-pedidos');
        
        // 2. Verificar se a lista de pedidos é exibida e não está vazia
        cy.get('.lista-pedidos').should('be.visible');
        cy.get('.item-pedido').should('have.length.greaterThan', 0);
        
        // 3. Clicar no primeiro pedido para ver detalhes
        cy.get('.item-pedido').first().click();
        
        // 4. Verificar a URL e o conteúdo da página de detalhes do pedido
        cy.url().should('include', '/pedido/');
        cy.get('.detalhes-pedido').should('be.visible');
    });
});
