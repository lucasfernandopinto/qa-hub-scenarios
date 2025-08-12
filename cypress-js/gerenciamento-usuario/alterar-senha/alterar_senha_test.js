// cypress-js/gerenciamento-usuario/alterar-senha/alterar_senha_test.js

describe('Gerenciamento de Usuário - Alterar Senha', () => {
    const email = 'usuario@exemplo.com';
    const senhaAntiga = 'SenhaSegura123';
    const novaSenha = 'NovaSenhaSegura456';

    beforeEach(() => {
        // Pré-requisito: Realizar login
        cy.visit('https://www.exemplo.com.br/login');
        cy.get('#email').type(email);
        cy.get('#senha').type(senhaAntiga);
        cy.get('#botaoLogin').click();
        cy.url().should('include', '/dashboard');
        cy.log('Pré-requisito: Login realizado com sucesso.');
    });

    it('Deve alterar a senha com sucesso e permitir login com a nova senha', () => {
        // 1. Navegar para a página de alteração de senha
        cy.visit('https://www.exemplo.com.br/configuracoes/seguranca');
        
        // 2. Preencher os campos de senha
        cy.get('#senhaAtual').type(senhaAntiga);
        cy.get('#novaSenha').type(novaSenha);
        cy.get('#confirmacaoNovaSenha').type(novaSenha);
        
        // 3. Salvar as alterações
        cy.get('#botaoSalvarSenha').click();

        // 4. Verificar mensagem de sucesso
        cy.get('.mensagem-sucesso').should('be.visible').and('contain', 'Senha alterada com sucesso!');

        // 5. Verificar login com a nova senha
        cy.visit('https://www.exemplo.com.br/logout');
        cy.visit('https://www.exemplo.com.br/login');
        cy.get('#email').type(email);
        cy.get('#senha').type(novaSenha);
        cy.get('#botaoLogin').click();
        cy.url().should('include', '/dashboard');
    });
});
