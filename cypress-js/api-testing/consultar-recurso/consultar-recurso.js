// cypress-js/api-testing/consultar-recurso-api/consultar_recurso_api_test.js

describe('API Testing - Consultar Recurso por ID', () => {
    it('Deve retornar os detalhes de um recurso com status 200', () => {
        const recursoId = 12345; // Substitua por um ID de recurso válido
        cy.request('GET', `https://api.exemplo.com.br/recursos/${recursoId}`) // Substitua pela URL real da sua API
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('id', recursoId);
                // Adicione outras verificações de propriedades genéricas aqui
            });
    });
});
