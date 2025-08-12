// cypress-js/api-testing/criar-recurso-api/criar_recurso_api_test.js

describe('API Testing - Criar Novo Recurso', () => {
    it('Deve criar um novo recurso com status 201', () => {
        const novoRecurso = {
            // Defina um payload genérico para o seu recurso
            nome: 'Recurso Teste',
            identificador: `teste-${Date.now()}`
        };
        cy.request('POST', 'https://api.exemplo.com.br/recursos', novoRecurso) // Substitua pela URL real da sua API
            .then((response) => {
                expect(response.status).to.eq(201);
                expect(response.body).to.have.property('id'); // Verifica se um ID foi gerado
                // Adicione outras verificações de propriedades genéricas aqui
            });
    });
});
