// playwright-js/autenticacao/cadastro-senha-fraca/cadastro_senha_fraca_test.js

const { test, expect } = require('@playwright/test');

test('Cadastro com Senha Fraca/Inválida - Deve exibir mensagem de erro e não permitir o cadastro', async ({ page }) => {
    // 1. Navegar para a página de cadastro
    await page.goto('https://www.exemplo.com.br/cadastro'); // Substitua pela URL real

    // 2. Preencher formulário com senha fraca
    await page.fill('#nome', 'Usuário Fraco'); // Substitua pelo ID/Seletor real
    await page.fill('#email', 'usuario.fraco@exemplo.com'); // E-mail válido, mas não existente
    await page.fill('#senha', '123456'); // Senha fraca
    await page.click('#botaoCadastrar'); // Clicar no botão de cadastro

    // 3. Aguardar e verificar a mensagem de erro da senha
    const errorMessageLocator = page.locator('.mensagem-erro-senha'); // Substitua pelo seletor da mensagem de erro da senha
    await expect(errorMessageLocator).toBeVisible();
    await expect(errorMessageLocator).toContainText('A senha deve ter no mínimo 8 caracteres, incluindo letras maiúsculas, minúsculas e números.'); // Substitua pela mensagem real

    // 4. Verificar se a URL não mudou (permanece na página de cadastro)
    await expect(page).toHaveURL(/.*cadastro/); // Substitua pela URL real
});
