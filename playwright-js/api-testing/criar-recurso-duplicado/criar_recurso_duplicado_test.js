// playwright-js/api-testing/criar-recurso-duplicado/criar_recurso_duplicado_test.js

const { test, expect } = require('@playwright/test');

test('Criar Recurso Duplicado - Deve retornar status 409 ao tentar criar um recurso que já existe', async ({ request }) => {
    const recursoExistente = {
        nome: 'Recurso Existente',
        email: 'recurso.existente@exemplo.com' // E-mail que já existe no sistema
    };
    const response = await request.post('https://api.exemplo.com.br/recursos', { // Substitua pela URL real
        data: recursoExistente,
    });

    expect(response.status()).toBe(409);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('mensagem', 'O recurso já existe com este e-mail.'); // Substitua pela mensagem de erro real
});
