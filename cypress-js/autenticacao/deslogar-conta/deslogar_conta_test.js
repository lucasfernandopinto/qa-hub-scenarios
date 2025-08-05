// cypress-js/autenticacao/deslogar-conta/deslogar_conta_test.js

describe('Autenticação - Deslogar da Conta', () => {
    beforeEach(() => {
        // Pré-requisito: Realizar login para estar em uma sessão autenticada
        cy.visit('https://www.exemplo.com.br/login'); // Substitua pela URL real
        cy.get('#email').type('usuario@exemplo.com');
        cy.get('#senha').type('SenhaSegura123');
        cy.get('#botaoLogin').click();
        cy.url().should('include', '/dashboard');
        cy.log('Pré-requisito: Login realizado com sucesso.');
    });

    it('Deve deslogar da conta com sucesso e redirecionar para a página de login', () => {
        // 1. Clicar no botão/link de logout
        cy.get('#botaoSair').click(); // Substitua pelo ID/Seletor real do botão de sair

        // 2. Verificar o redirecionamento para a página de login
        cy.url().should('include', '/login'); // Substitua pela URL real da página de login

        // 3. Tentar acessar uma página restrita e verificar se é negado
        cy.visit('https://www.exemplo.com.br/dashboard', { failOnStatusCode: false }); // Visita a página restrita, permitindo falha de status para ver redirecionamento
        cy.url().should('include', '/login'); // Deve ser redirecionado de volta para o login
    });
});
