// cypress-js/autenticacao/resetar-senha/resetar_senha_test.js

describe('Autenticação - Redefinir Senha', () => {
    const userEmail = 'usuario_reset@exemplo.com';
    const novaSenha = 'NovaSenhaSegura123';

    it('Deve permitir que um usuário redefina sua senha e faça login com a nova senha', () => {
        // 1. Navegar para a página de login e clicar em "Esqueci minha senha"
        cy.visit('https://www.exemplo.com.br/login'); // Substitua pela URL real
        cy.contains('Esqueci minha senha?').click(); // Substitua pelo texto ou seletor do link

        // 2. Inserir e-mail para redefinição
        cy.url().should('include', '/forgot-password'); // Aguardar página de "Esqueci a senha"
        cy.get('#email').type(userEmail); // Substitua pelo ID/Seletor real
        cy.get('#botaoEnviarLink').click(); // Substitua pelo ID/Seletor real

        // 3. Verificar confirmação de envio de e-mail
        cy.get('.mensagem-sucesso').should('be.visible').and('contain', 'Link de redefinição enviado para seu email.'); // Substitua pelo seletor e mensagem real

        // 4. SIMULAR o clique no link de redefinição
        // Em um cenário real, você usaria cy.request() para buscar o link no e-mail mockado
        // Para este exemplo, vamos direto para a página de redefinição com um token fictício
        cy.visit(`https://www.exemplo.com.br/reset-password?token=ABC123DEF456`); // Substitua pela URL real e token

        // 5. Definir a nova senha
        cy.url().should('include', '/reset-password'); // Aguardar página de redefinição
        cy.get('#novaSenha').type(novaSenha); // Substitua pelo ID/Seletor real
        cy.get('#confirmaSenha').type(novaSenha); // Substitua pelo ID/Seletor real
        cy.get('#botaoRedefinir').click(); // Substitua pelo ID/Seletor real

        // 6. Verificar confirmação de senha redefinida
        cy.get('.mensagem-sucesso').should('be.visible').and('contain', 'Senha redefinida com sucesso!'); // Substitua pelo seletor e mensagem real

        // 7. Tentar login com a nova senha
        cy.visit('https://www.exemplo.com.br/login');
        cy.get('#email').type(userEmail);
        cy.get('#senha').type(novaSenha);
        cy.get('#botaoLogin').click();
        cy.url().should('include', '/dashboard');
        cy.get('.boas-vindas').should('be.visible'); // Verificar elemento na página pós-login
    });
});
