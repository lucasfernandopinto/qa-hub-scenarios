// cypress-js/autenticacao/login-sucesso/login_sucesso_test.js

describe('Autenticação - Login com Sucesso', () => {
    beforeEach(() => {
        // Visita a página de login antes de cada teste
        cy.visit('https://www.exemplo.com.br/login'); // Substitua pela URL real
    });

    it('Deve realizar o login com credenciais válidas e redirecionar para o dashboard', () => {
        // Inserir credenciais
        cy.get('#email').type('usuario@exemplo.com'); // Substitua pelo ID/Seletor real
        cy.get('#senha').type('SenhaSegura123'); // Substitua pelo ID/Seletor real

        // Clicar no botão de login
        cy.get('#botaoLogin').click(); // Substitua pelo ID/Seletor real

        // Verificar se o redirecionamento ocorreu e se um elemento da página inicial está visível
        cy.url().should('include', '/dashboard'); // Substitua pela URL real
        cy.get('.boas-vindas').should('be.visible'); // Substitua pelo seletor real
        cy.contains('Bem-vindo').should('be.visible'); // Exemplo de verificação de texto
    });
});
