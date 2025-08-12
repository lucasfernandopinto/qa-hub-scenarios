// cypress-js/api-testing/criar-recurso-duplicado/criar_recurso_duplicado_test.js

describe('API Testing - Criar Recurso Duplicado (409)', () => {
    it('Deve retornar status 409 ao tentar criar um recurso que já existe', () => {
        const recursoExistente = {
            nome: 'Recurso Existente',
            email: 'recurso.existente@exemplo.com' // E-mail que já existe no sistema
        };
        cy.request({
            method: 'POST',
            url: 'https://api.exemplo.com.br/recursos', // Substitua pela URL real
            body: recursoExistente,
            failOnStatusCode: false // Impede o Cypress de falhar automaticamente
        }).then((response) => {
            expect(response.status).to.eq(409);
            expect(response.body).to.have.property('mensagem', 'O recurso já existe com este e-mail.'); // Substitua pela mensagem de erro real
        });
    });
});
