// playwright-js/api-testing/consultar-recurso-inexistente/consultar_recurso_inexistente_test.js

const { test, expect } = require('@playwright/test');

test('Consultar Recurso Inexistente - Deve retornar status 404 ao consultar um recurso que não existe', async ({ request }) => {
    const recursoIdInexistente = 99999; // ID que não existe
    const response = await request.get(`https://api.exemplo.com.br/recursos/${recursoIdInexistente}`); // Substitua pela URL real

    expect(response.status()).toBe(404);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('mensagem', 'Recurso não encontrado.'); // Substitua pela mensagem de erro real
});
