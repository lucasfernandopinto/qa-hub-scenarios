// playwright-js/gerenciamento-usuario/alterar-senha/alterar_senha_test.js

const { test, expect } = require('@playwright/test');

test('Alterar Senha - Deve alterar a senha com sucesso e permitir login com a nova senha', async ({ page }) => {
    const email = 'usuario@exemplo.com';
    const senhaAntiga = 'SenhaSegura123';
    const novaSenha = 'NovaSenhaSegura456';

    // Pré-requisito: Realizar login
    await page.goto('https://www.exemplo.com.br/login');
    await page.fill('#email', email);
    await page.fill('#senha', senhaAntiga);
    await page.click('#botaoLogin');
    await expect(page).toHaveURL(/.*dashboard/);
    console.log('Pré-requisito: Login realizado com sucesso.');

    // 1. Navegar para a página de alteração de senha
    await page.goto('https://www.exemplo.com.br/configuracoes/seguranca');
    
    // 2. Preencher os campos de senha
    await page.fill('#senhaAtual', senhaAntiga);
    await page.fill('#novaSenha', novaSenha);
    await page.fill('#confirmacaoNovaSenha', novaSenha);
    
    // 3. Salvar as alterações
    await page.click('#botaoSalvarSenha');

    // 4. Verificar mensagem de sucesso
    const successMessageLocator = page.locator('.mensagem-sucesso');
    await expect(successMessageLocator).toBeVisible();
    await expect(successMessageLocator).toContainText('Senha alterada com sucesso!');

    // 5. Verificar login com a nova senha
    await page.goto('https://www.exemplo.com.br/logout');
    await page.goto('https://www.exemplo.com.br/login');
    await page.fill('#email', email);
    await page.fill('#senha', novaSenha);
    await page.click('#botaoLogin');
    await expect(page).toHaveURL(/.*dashboard/);
    console.log('Login com a nova senha realizado com sucesso.');
});
