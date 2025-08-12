// playwright-js/api-testing/excluir-recurso/excluir_recurso_test.js

const { test, expect } = require('@playwright/test');

test.describe('API Testing - Excluir Recurso com Sucesso', () => {
    let recursoIdParaExcluir;

    test.beforeAll(async ({ request }) => {
        // Pré-requisito: Criar um recurso para garantir que ele exista para exclusão
        const response = await request.post('https://api.exemplo.com.br/recursos', { data: { nome: 'Recurso Temporário' } });
        const body = await response.json();
        recursoIdParaExcluir = body.id;
    });

    test('Deve excluir um recurso com status 204 e torná-lo inacessível', async ({ request }) => {
        const response = await request.delete(`https://api.exemplo.com.br/recursos/${recursoIdParaExcluir}`);
        
        // Verificar se o status da resposta é 204 e se o corpo está vazio
        expect(response.status()).toBe(204);
        expect(response.text()).resolves.toBe('');
        
        // Verificar se o recurso foi realmente excluído
        const getResponse = await request.get(`https://api.exemplo.com.br/recursos/${recursoIdParaExcluir}`);
        expect(getResponse.status()).toBe(404); // Espera-se um status 404
    });
});
