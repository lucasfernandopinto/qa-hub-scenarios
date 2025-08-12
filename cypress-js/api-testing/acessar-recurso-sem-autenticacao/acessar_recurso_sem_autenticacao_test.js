// cypress-js/api-testing/acessar-recurso-sem-autenticacao/acessar_recurso_sem_autenticacao_test.js

describe('API Testing - Acessar Recurso sem Autenticação (401)', () => {
    it('Deve retornar status 401 ao tentar acessar um recurso protegido sem token', () => {
        const recursoId = 123; // ID de um recurso protegido
        cy.request({
            method: 'GET',
            url: `https://api.exemplo.com.br/recursos-protegidos/${recursoId}`, // Substitua pela URL de um recurso protegido
            failOnStatusCode: false // Impede o Cypress de falhar automaticamente
        }).then((response) => {
            expect(response.status).to.eq(401);
            expect(response.body).to.have.property('mensagem', 'Token de autenticação ausente ou inválido.'); // Substitua pela mensagem de erro real
        });
    });
});
