// playwright-js/autenticacao/login-campos-vazios/login_campos_vazios_test.js

const { test, expect } = require('@playwright/test');

test('Login com Campos Vazios - Deve exibir mensagens de erro e permanecer na página de login', async ({ page }) => {
    // 1. Navegar para a página de login
    await page.goto('https://www.exemplo.com.br/login'); // Substitua pela URL real

    // 2. Clicar no botão de login sem preencher nada
    await page.click('#botaoLogin'); // Clicar no botão de login

    // 3. Aguardar e verificar as mensagens de erro para campos vazios
    const emailErrorMessageLocator = page.locator('.erro-email'); // Seletor da mensagem de erro do e-mail
    await expect(emailErrorMessageLocator).toBeVisible();
    await expect(emailErrorMessageLocator).toContainText('Campo e-mail é obrigatório.'); // Substitua pela mensagem real

    const passwordErrorMessageLocator = page.locator('.erro-senha'); // Seletor da mensagem de erro da senha
    await expect(passwordErrorMessageLocator).toBeVisible();
    await expect(passwordErrorMessageLocator).toContainText('Campo senha é obrigatório.'); // Substitua pela mensagem real

    // 4. Verificar se a URL não mudou (permanece na página de login)
    await expect(page).toHaveURL(/.*login/); // Substitua pela URL real
});
