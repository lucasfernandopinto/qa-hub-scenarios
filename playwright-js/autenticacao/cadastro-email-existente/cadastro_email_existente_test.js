// playwright-js/autenticacao/cadastro-email-existente/cadastro_email_existente_test.js

const { test, expect } = require('@playwright/test');

test('Cadastro com E-mail Já Existente - Deve exibir mensagem de erro e não permitir o cadastro', async ({ page }) => {
    // 1. Navegar para a página de cadastro
    await page.goto('https://www.exemplo.com.br/cadastro'); // Substitua pela URL real

    // 2. Preencher formulário com e-mail já existente
    await page.fill('#nome', 'Novo Usuário'); // Substitua pelo ID/Seletor real
    await page.fill('#email', 'email_existente@exemplo.com'); // E-mail que já existe
    await page.fill('#senha', 'SenhaNova123'); // Substitua pelo ID/Seletor real
    await page.click('#botaoCadastrar'); // Clicar no botão de cadastro

    // 3. Aguardar e verificar a mensagem de erro
    const errorMessageLocator = page.locator('.mensagem-erro'); // Substitua pelo seletor da mensagem de erro
    await expect(errorMessageLocator).toBeVisible();
    await expect(errorMessageLocator).toContainText('Este email já está em uso.'); // Substitua pela mensagem real

    // 4. Verificar se a URL não mudou (permanece na página de cadastro)
    await expect(page).toHaveURL(/.*cadastro/); // Substitua pela URL real
});
