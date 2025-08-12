// playwright-js/api-testing/acessar-recurso-sem-autenticacao/acessar_recurso_sem_autenticacao_test.js

const { test, expect } = require('@playwright/test');

test('Acessar Recurso sem Autenticação - Deve retornar status 401 ao tentar acessar um recurso protegido sem token', async ({ request }) => {
    const recursoId = 123; // ID de um recurso protegido
    const response = await request.get(`https://api.exemplo.com.br/recursos-protegidos/${recursoId}`); // Substitua pela URL de um recurso protegido

    expect(response.status()).toBe(401);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('mensagem', 'Token de autenticação ausente ou inválido.'); // Substitua pela mensagem de erro real
});
