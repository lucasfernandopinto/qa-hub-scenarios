// cypress-js/api-testing/excluir-recurso/excluir_recurso_test.js

describe('API Testing - Excluir Recurso com Sucesso (204)', () => {
    // Definir um ID de recurso que será criado e depois excluído
    let recursoIdParaExcluir;

    before(() => {
        // Pré-requisito: Criar um recurso para garantir que ele exista para exclusão
        cy.request('POST', 'https://api.exemplo.com.br/recursos', { nome: 'Recurso Temporário' })
            .then((response) => {
                recursoIdParaExcluir = response.body.id;
            });
    });

    it('Deve excluir um recurso com status 204 e torná-lo inacessível', () => {
        cy.request('DELETE', `https://api.exemplo.com.br/recursos/${recursoIdParaExcluir}`)
            .then((response) => {
                expect(response.status).to.eq(204);
                expect(response.body).to.be.empty; // O corpo da resposta deve ser vazio
            });
            
        // Verificar se o recurso foi realmente excluído
        cy.request({
            method: 'GET',
            url: `https://api.exemplo.com.br/recursos/${recursoIdParaExcluir}`,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404); // Espera-se um status 404
        });
    });
});
