// playwright-js/autenticacao/resetar-senha/resetar_senha_test.js

const { test, expect } = require('@playwright/test');

test('Redefinir Senha - Deve permitir que um usuário redefina sua senha e faça login com a nova senha', async ({ page }) => {
    const userEmail = 'usuario_reset@exemplo.com';
    const novaSenha = 'NovaSenhaSegura123';

    // 1. Navegar para a página de login e clicar em "Esqueci minha senha"
    await page.goto('https://www.exemplo.com.br/login'); // Substitua pela URL real
    await page.locator('text=Esqueci minha senha?').click(); // Substitua pelo seletor do link

    // 2. Inserir e-mail para redefinição
    await expect(page).toHaveURL(/.*forgot-password/); // Aguardar página de "Esqueci a senha"
    await page.fill('#email', userEmail); // Substitua pelo ID/Seletor real
    await page.click('#botaoEnviarLink'); // Substitua pelo ID/Seletor real

    // 3. Verificar confirmação de envio de e-mail
    const confirmationMessageLocator = page.locator('.mensagem-sucesso'); // Substitua pelo seletor da mensagem de sucesso
    await expect(confirmationMessageLocator).toBeVisible();
    await expect(confirmationMessageLocator).toContainText('Link de redefinição enviado para seu email.'); // Substitua pela mensagem real

    // 4. SIMULAR o clique no link de redefinição
    // Em um cenário real, você usaria uma API de e-mail de teste para obter o link
    // Para este exemplo, vamos diretamente para a página de redefinição com um token fictício
    await page.goto(`https://www.exemplo.com.br/reset-password?token=ABC123DEF456`); // Substitua pela URL real e token

    // 5. Definir a nova senha
    await expect(page).toHaveURL(/.*reset-password/); // Aguardar página de redefinição
    await page.fill('#novaSenha', novaSenha); // Substitua pelo ID/Seletor real
    await page.fill('#confirmaSenha', novaSenha); // Substitua pelo ID/Seletor real
    await page.click('#botaoRedefinir'); // Substitua pelo ID/Seletor real

    // 6. Verificar confirmação de senha redefinida
    const resetSuccessMessageLocator = page.locator('.mensagem-sucesso');
    await expect(resetSuccessMessageLocator).toBeVisible();
    await expect(resetSuccessMessageLocator).toContainText('Senha redefinida com sucesso!'); // Substitua pela mensagem real

    // 7. Tentar login com a nova senha
    await page.goto('https://www.exemplo.com.br/login');
    await page.fill('#email', userEmail);
    await page.fill('#senha', novaSenha);
    await page.click('#botaoLogin');
    await expect(page).toHaveURL(/.*dashboard/);
    await expect(page.locator('.boas-vindas')).toBeVisible(); // Verificar elemento na página pós-login
});
