// playwright-js/gerenciamento-usuario/atualizar-perfil/atualizar_perfil_test.js

const { test, expect } = require('@playwright/test');

test('Atualizar Informações do Perfil - Deve atualizar as informações do perfil com sucesso', async ({ page }) => {
    const userEmail = 'usuario@exemplo.com';
    const userPassword = 'SenhaSegura123';
    const novoNome = 'Usuário Atualizado';

    // Pré-requisito: Realizar login
    await page.goto('https://www.exemplo.com.br/login');
    await page.fill('#email', userEmail);
    await page.fill('#senha', userPassword);
    await page.click('#botaoLogin');
    await expect(page).toHaveURL(/.*dashboard/);
    console.log('Pré-requisito: Login realizado com sucesso.');

    // 1. Navegar para a página de perfil
    await page.goto('https://www.exemplo.com.br/perfil'); // Substitua pela URL real
    
    // 2. Editar as informações (ex: nome)
    await page.fill('#nome', novoNome); // Substitua pelo ID/Seletor real do campo nome
    
    // 3. Salvar as alterações
    await page.click('#botaoSalvar'); // Substitua pelo ID/Seletor real do botão salvar

    // 4. Verificar mensagem de sucesso
    const successMessageLocator = page.locator('.mensagem-sucesso');
    await expect(successMessageLocator).toBeVisible();
    await expect(successMessageLocator).toContainText('Perfil atualizado com sucesso.'); // Substitua pela mensagem real

    // 5. Verificar se o nome foi atualizado na página
    await expect(page.locator('#nomeExibicao')).toContainText(novoNome); // Substitua pelo seletor que exibe o nome
});
