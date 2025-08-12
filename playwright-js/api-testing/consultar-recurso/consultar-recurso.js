// playwright-js/api-testing/consultar-recurso-api/consultar_recurso_api_test.js

const { test, expect } = require('@playwright/test');

test('Consultar Recurso por ID - Deve retornar os detalhes de um recurso com status 200', async ({ request }) => {
    const recursoId = 12345; // Substitua por um ID de recurso válido
    const response = await request.get(`https://api.exemplo.com.br/recursos/${recursoId}`);
    
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('id', recursoId);
    // Adicione outras verificações de propriedades genéricas aqui
});
