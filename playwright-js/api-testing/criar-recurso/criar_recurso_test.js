// playwright-js/api-testing/criar-recurso-api/criar_recurso_api_test.js

const { test, expect } = require('@playwright/test');

test('Criar Novo Recurso - Deve criar um novo recurso com status 201', async ({ request }) => {
    const novoRecurso = {
        // Defina um payload genérico para o seu recurso
        nome: 'Recurso Teste',
        identificador: `teste-${Date.now()}`
    };
    const response = await request.post('https://api.exemplo.com.br/recursos', { // Substitua pela URL real da sua API
        data: novoRecurso,
    });

    expect(response.status()).toBe(201);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('id');
    // Adicione outras verificações de propriedades genéricas aqui
});
