// playwright-js/gerenciamento-usuario/visualizar-perfil/visualizar_perfil_test.js

const { test, expect } = require('@playwright/test');

test('Visualizar Informações do Perfil - Deve exibir as informações do perfil do usuário corretamente', async ({ page }) => {
    const nomeUsuario = 'Usuário Exemplo';
    const emailUsuario = 'usuario@exemplo.com';

    // Pré-requisito: Realizar login
    // Substitua a URL de login e os seletores de campos de e-mail/senha pelos reais da sua aplicação.
    await page.goto('https://www.exemplo.com.br/login');
    await page.fill('#email', emailUsuario);
    await page.fill('#senha', 'SenhaSegura123');
    await page.click('#botaoLogin');
    await expect(page).toHaveURL(/.*dashboard/);
    console.log('Pré-requisito: Login realizado com sucesso.');

    // 1. Navegar para a página de perfil
    // Substitua a URL da página de perfil real.
    await page.goto('https://www.exemplo.com.br/perfil');
    
    // 2. Verificar se o nome e o e-mail estão corretos
    // Substitua os seletores pelos que exibem o nome e o e-mail na sua aplicação.
    await expect(page.locator('#nomeExibicao')).toContainText(nomeUsuario);
    await expect(page.locator('#emailExibicao')).toContainText(emailUsuario);
});
