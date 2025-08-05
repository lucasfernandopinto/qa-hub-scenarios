// playwright-js/autenticacao/login-falha-credenciais-invalidas/login_falha_credenciais_invalidas_test.js

const { test, expect } = require('@playwright/test');

test('Login com Credenciais Inválidas - Deve exibir mensagem de erro e permanecer na página de login', async ({ page }) => {
    // Navegar para a URL de login
    await page.goto('https://www.exemplo.com.br/login'); // Substitua pela URL real

    // Preencher campos de email e senha com credenciais inválidas
    await page.fill('#email', 'naoexiste@exemplo.com'); // Substitua pelo ID/Seletor real
    await page.fill('#senha', 'senhaErrada123'); // Substitua pelo ID/Seletor real

    // Clicar no botão de login
    await page.click('#botaoLogin'); // Substitua pelo ID/Seletor real

    // Aguardar e verificar se a mensagem de erro é exibida
    const errorMessageLocator = page.locator('.mensagem-erro'); // Substitua pelo seletor da mensagem de erro
    await expect(errorMessageLocator).toBeVisible();
    await expect(errorMessageLocator).toContainText('Email ou senha inválidos.'); // Substitua pela mensagem real

    // Verificar se a URL não mudou (permanece na página de login)
    await expect(page).toHaveURL(/.*login/); // Substitua pela URL real
});
