// cypress-js/gerenciamento-usuario/excluir-conta/excluir_conta_test.js

describe('Gerenciamento de Usuário - Excluir Conta', () => {
    const email = 'usuario_excluir@exemplo.com';
    const senha = 'SenhaExcluir123';

    beforeEach(() => {
        // Pré-requisito: Realizar login com usuário de teste para exclusão
        cy.visit('https://www.exemplo.com.br/login');
        cy.get('#email').type(email);
        cy.get('#senha').type(senha);
        cy.get('#botaoLogin').click();
        cy.url().should('include', '/dashboard');
        cy.log('Pré-requisito: Login realizado com sucesso.');
    });

    it('Deve excluir a conta com sucesso e impedir novo login com as mesmas credenciais', () => {
        // 1. Navegar para a página de configurações
        cy.visit('https://www.exemplo.com.br/configuracoes');
        
        // 2. Clicar no botão de exclusão de conta e confirmar
        cy.get('#botaoExcluirConta').click();
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Tem certeza que deseja excluir sua conta?'); // Verifica o texto do alerta
            return true; // Aceita a confirmação
        });

        // 3. Verificar o redirecionamento para a página de login
        cy.url().should('include', '/login');
        
        // 4. Tentar fazer login com a conta excluída e verificar a falha
        cy.get('#email').type(email);
        cy.get('#senha').type(senha);
        cy.get('#botaoLogin').click();
        cy.get('.mensagem-erro').should('be.visible').and('contain', 'Credenciais inválidas.');
    });
});
