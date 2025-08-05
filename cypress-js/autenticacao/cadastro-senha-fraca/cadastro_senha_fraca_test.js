// cypress-js/autenticacao/cadastro-senha-fraca/cadastro_senha_fraca_test.js

describe('Autenticação - Cadastro com Senha Fraca/Inválida', () => {
    beforeEach(() => {
        // Visita a página de cadastro antes de cada teste
        cy.visit('https://www.exemplo.com.br/cadastro'); // Substitua pela URL real
    });

    it('Deve exibir mensagem de erro e não permitir o cadastro com senha fraca', () => {
        // Preencher formulário com senha fraca
        cy.get('#nome').type('Usuário Fraco'); // Substitua pelo ID/Seletor real
        cy.get('#email').type('usuario.fraco@exemplo.com'); // E-mail válido, mas não existente
        cy.get('#senha').type('123456'); // Senha fraca

        // Clicar no botão de cadastro
        cy.get('#botaoCadastrar').click(); // Substitua pelo ID/Seletor real

        // Verificar se a mensagem de erro da senha é exibida
        cy.get('.mensagem-erro-senha').should('be.visible').and('contain', 'A senha deve ter no mínimo 8 caracteres, incluindo letras maiúsculas, minúsculas e números.'); // Substitua pelo seletor e mensagem real

        // Verificar se a URL não mudou (permanece na página de cadastro)
        cy.url().should('include', '/cadastro'); // Substitua pela URL real
    });
});
