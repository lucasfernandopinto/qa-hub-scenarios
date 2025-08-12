// cypress-js/gerenciamento-usuario/visualizar-perfil/visualizar_perfil_test.js

describe('Gerenciamento de Usuário - Visualizar Informações do Perfil', () => {
    const nomeUsuario = 'Usuário Exemplo';
    const emailUsuario = 'usuario@exemplo.com';

    beforeEach(() => {
        // Pré-requisito: Realizar login
        cy.visit('https://www.exemplo.com.br/login');
        cy.get('#email').type(emailUsuario);
        cy.get('#senha').type('SenhaSegura123');
        cy.get('#botaoLogin').click();
        cy.url().should('include', '/dashboard');
        cy.log('Pré-requisito: Login realizado com sucesso.');
    });

    it('Deve exibir as informações do perfil do usuário corretamente', () => {
        // 1. Navegar para a página de perfil
        cy.visit('https://www.exemplo.com.br/perfil');
        
        // 2. Verificar se o nome e e-mail estão corretos
        cy.get('#nomeExibicao').should('contain.text', nomeUsuario);
        cy.get('#emailExibicao').should('contain.text', emailUsuario);
    });
});
