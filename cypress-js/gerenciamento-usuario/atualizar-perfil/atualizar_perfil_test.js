// cypress-js/gerenciamento-usuario/atualizar-perfil/atualizar_perfil_test.js

describe('Gerenciamento de Usuário - Atualizar Perfil', () => {
    const userEmail = 'usuario@exemplo.com';
    const userPassword = 'SenhaSegura123';
    const novoNome = 'Usuário Atualizado';

    beforeEach(() => {
        // Pré-requisito: Realizar login
        cy.visit('https://www.exemplo.com.br/login');
        cy.get('#email').type(userEmail);
        cy.get('#senha').type(userPassword);
        cy.get('#botaoLogin').click();
        cy.url().should('include', '/dashboard');
        cy.log('Pré-requisito: Login realizado com sucesso.');
    });

    it('Deve atualizar as informações do perfil com sucesso', () => {
        // 1. Navegar para a página de perfil
        cy.visit('https://www.exemplo.com.br/perfil'); // Substitua pela URL real
        
        // 2. Editar as informações (ex: nome)
        cy.get('#nome').clear().type(novoNome); // Substitua pelo ID/Seletor real do campo nome
        
        // 3. Salvar as alterações
        cy.get('#botaoSalvar').click(); // Substitua pelo ID/Seletor real do botão salvar

        // 4. Verificar mensagem de sucesso
        cy.get('.mensagem-sucesso').should('be.visible').and('contain', 'Perfil atualizado com sucesso.'); // Substitua pelo seletor e mensagem real

        // 5. Verificar se o nome foi atualizado na página
        cy.get('#nomeExibicao').should('contain.text', novoNome); // Substitua pelo seletor que exibe o nome
    });
});
