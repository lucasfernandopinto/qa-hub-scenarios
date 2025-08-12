// cypress-js/api-testing/consultar-recurso-inexistente/consultar_recurso_inexistente_test.js

describe('API Testing - Consultar Recurso Inexistente (404)', () => {
    it('Deve retornar status 404 ao consultar um recurso que não existe', () => {
        const recursoIdInexistente = 99999; // ID que não existe
        cy.request({
            method: 'GET',
            url: `https://api.exemplo.com.br/recursos/${recursoIdInexistente}`, // Substitua pela URL real
            failOnStatusCode: false // Impede o Cypress de falhar com status de erro (4xx)
        }).then((response) => {
            expect(response.status).to.eq(404);
            expect(response.body).to.have.property('mensagem', 'Recurso não encontrado.'); // Substitua pela mensagem de erro real
        });
    });
});
