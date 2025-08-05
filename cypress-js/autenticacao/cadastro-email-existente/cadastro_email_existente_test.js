// cypress-js/autenticacao/cadastro-email-existente/cadastro_email_existente_test.js

describe('Autenticação - Cadastro com E-mail Já Existente', () => {
    beforeEach(() => {
        // Visita a página de cadastro antes de cada teste
        cy.visit('https://www.exemplo.com.br/cadastro'); // Substitua pela URL real
    });

    it('Deve exibir mensagem de erro e não permitir o cadastro com e-mail já existente', () => {
        // Preencher formulário com e-mail já existente
        cy.get('#nome').type('Novo Usuário'); // Substitua pelo ID/Seletor real
        cy.get('#email').type('email_existente@exemplo.com'); // E-mail que já existe
        cy.get('#senha').type('SenhaNova123'); // Substitua pelo ID/Seletor real

        // Clicar no botão de cadastro
        cy.get('#botaoCadastrar').click(); // Substitua pelo ID/Seletor real

        // Verificar se a mensagem de erro é exibida
        cy.get('.mensagem-erro').should('be.visible').and('contain', 'Este email já está em uso.'); // Substitua pelo seletor e mensagem real

        // Verificar se a URL não mudou (permanece na página de cadastro)
        cy.url().should('include', '/cadastro'); // Substitua pela URL real
    });
});
