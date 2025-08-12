// cypress-js/e-commerce/finalizar-compra/finalizar_compra_test.js

describe('E-commerce - Finalizar uma Compra', () => {
    beforeEach(() => {
        // Pré-requisito: Login e adição de item ao carrinho
        cy.login('usuario@exemplo.com', 'SenhaSegura123'); // Custom command para login
        cy.visit('https://www.exemplo-loja.com.br/produto/tenis-de-corrida');
        cy.get('#botaoAdicionarCarrinho').click();
        cy.get('.icone-carrinho').click();
        cy.url().should('include', '/carrinho');
        cy.log('Pré-requisito: Login e item no carrinho.');
    });

    it('Deve completar o processo de checkout com sucesso e gerar um pedido', () => {
        // 1. Iniciar o checkout
        cy.get('#botaoFinalizarCompra').click();
        cy.url().should('include', '/checkout');

        // 2. Preencher informações de envio (se houver)
        cy.get('#endereco').type('Rua Teste, 123');
        cy.get('#cidade').type('Cidade Exemplo');
        cy.get('#cep').type('12345-678');
        cy.get('#botaoContinuarEnvio').click();

        // 3. Preencher informações de pagamento
        cy.get('#cartaoCredito').type('1111222233334444');
        cy.get('#cvv').type('123');
        cy.get('#botaoContinuarPagamento').click();

        // 4. Confirmar a compra
        cy.url().should('include', '/confirmacao');
        cy.get('#botaoConfirmarCompra').click();

        // 5. Verificar a página de confirmação do pedido
        cy.url().should('include', '/pedido-confirmado');
        cy.get('.mensagem-confirmacao-pedido').should('be.visible').and('contain', 'Obrigado por sua compra!');
        cy.get('.numero-pedido').should('be.visible');
    });
});
