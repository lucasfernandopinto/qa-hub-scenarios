// playwright-js/gerenciamento-usuario/excluir-conta/excluir_conta_test.js

const { test, expect } = require('@playwright/test');

test('Excluir Conta - Deve excluir a conta e impedir novo login com as mesmas credenciais', async ({ page }) => {
    const email = 'usuario_excluir@exemplo.com';
    const senha = 'SenhaExcluir123';

    // Pré-requisito: Realizar login com usuário de teste para exclusão
    await page.goto('https://www.exemplo.com.br/login');
    await page.fill('#email', email);
    await page.fill('#senha', senha);
    await page.click('#botaoLogin');
    await expect(page).toHaveURL(/.*dashboard/);
    console.log('Pré-requisito: Login realizado com sucesso.');

    // 1. Navegar para a página de configurações
    await page.goto('https://www.exemplo.com.br/configuracoes');
    
    // 2. Clicar no botão de exclusão de conta e confirmar
    page.on('dialog', dialog => dialog.accept()); // Aceita o alerta de confirmação
    await page.click('#botaoExcluirConta');
    
    // 3. Aguardar o redirecionamento para a página de login
    await expect(page).toHaveURL(/.*login/);
    console.log('Redirecionado para a página de login após a exclusão.');

    // 4. Tentar fazer login com a conta excluída e verificar a falha
    await page.fill('#email', email);
    await page.fill('#senha', senha);
    await page.click('#botaoLogin');
    const errorMessageLocator = page.locator('.mensagem-erro');
    await expect(errorMessageLocator).toBeVisible();
    await expect(errorMessageLocator).toContainText('Credenciais inválidas.');
    console.log('Tentativa de login com conta excluída falhou, conforme esperado.');
});
