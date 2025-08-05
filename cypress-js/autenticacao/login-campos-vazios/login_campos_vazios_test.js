// cypress-js/autenticacao/login-campos-vazios/login_campos_vazios_test.js

describe('Autenticação - Login com Campos Vazios', () => {
    beforeEach(() => {
        // Visita a página de login antes de cada teste
        cy.visit('https://www.exemplo.com.br/login'); // Substitua pela URL real
    });

    it('Deve exibir mensagens de erro para campos vazios ao tentar logar', () => {
        // Tentar clicar no botão de login sem preencher nada
        cy.get('#botaoLogin').click(); // Substitua pelo ID/Seletor real

        // Verificar se as mensagens de erro são exibidas
        cy.get('.erro-email').should('be.visible').and('contain', 'Campo e-mail é obrigatório.'); // Substitua pelo seletor e mensagem real
        cy.get('.erro-senha').should('be.visible').and('contain', 'Campo senha é obrigatório.'); // Substitua pelo seletor e mensagem real

        // Verificar se a URL não mudou (permanece na página de login)
        cy.url().should('include', '/login'); // Substitua pela URL real
    });
});
