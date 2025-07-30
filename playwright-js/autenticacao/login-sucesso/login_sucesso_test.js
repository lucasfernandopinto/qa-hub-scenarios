// playwright-js/autenticacao/login-sucesso/login_sucesso_test.js

const { test, expect } = require('@playwright/test');

test('Login com Sucesso - Deve realizar o login com credenciais válidas e redirecionar para o dashboard', async ({ page }) => {
    // Navegar para a URL de login
    await page.goto('https://www.exemplo.com.br/login'); // Substitua pela URL real

    // Preencher campos de email e senha
    await page.fill('#email', 'usuario@exemplo.com'); // Substitua pelo ID/Seletor real
    await page.fill('#senha', 'SenhaSegura123'); // Substitua pelo ID/Seletor real

    // Clicar no botão de login
    await page.click('#botaoLogin'); // Substitua pelo ID/Seletor real

    // Aguardar o redirecionamento e verificar a URL
    await expect(page).toHaveURL(/.*dashboard/); // Substitua pela URL real

    // Verificar se um elemento da página pós-login está visível
    await expect(page.locator('.boas-vindas')).toBeVisible(); // Substitua pelo seletor real
    await expect(page.locator('text=Bem-vindo')).toBeVisible(); // Exemplo de verificação de texto
});
