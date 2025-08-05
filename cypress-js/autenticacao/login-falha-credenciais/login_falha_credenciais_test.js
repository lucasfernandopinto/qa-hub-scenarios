// cypress-js/autenticacao/login-falha-credenciais-invalidas/login_falha_credenciais_invalidas_test.js

describe('Autenticação - Login com Credenciais Inválidas', () => {
    beforeEach(() => {
        // Visita a página de login antes de cada teste
        cy.visit('https://www.exemplo.com.br/login'); // Substitua pela URL real
    });

    it('Deve exibir mensagem de erro e permanecer na página de login ao usar credenciais inválidas', () => {
        // Inserir credenciais inválidas
        cy.get('#email').type('naoexiste@exemplo.com'); // Substitua pelo ID/Seletor real
        cy.get('#senha').type('senhaErrada123'); // Substitua pelo ID/Seletor real

        // Clicar no botão de login
        cy.get('#botaoLogin').click(); // Substitua pelo ID/Seletor real

        // Verificar se a mensagem de erro é exibida
        cy.get('.mensagem-erro').should('be.visible').and('contain', 'Email ou senha inválidos.'); // Substitua pelo seletor e mensagem real

        // Verificar se a URL não mudou (permanece na página de login)
        cy.url().should('include', '/login'); // Substitua pela URL real
    });
});
