// playwright-js/api-testing/criar-recurso-dados-invalidos/criar_recurso_dados_invalidos_test.js

const { test, expect } = require('@playwright/test');

test('Criar Recurso com Dados Inválidos - Deve retornar status 400 e erros de validação', async ({ request }) => {
    const dadosInvalidos = {
        email: 'email-invalido', // Formato de e-mail inválido
        senha: '123' // Senha muito curta
    };
    const response = await request.post('https://api.exemplo.com.br/recursos', { // Substitua pela URL real
        data: dadosInvalidos,
    });

    expect(response.status()).toBe(400);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('erros'); // Substitua pela chave que contém os erros na sua API
    expect(Array.isArray(responseBody.erros)).toBe(true);
    expect(responseBody.erros.length).toBeGreaterThan(0);
});
