// playwright-js/autenticacao/deslogar-conta/deslogar_conta_test.js

const { test, expect } = require('@playwright/test');

test('Deslogar da Conta - Deve encerrar a sessão e redirecionar para a página de login', async ({ page }) => {
    // Pré-requisito: Realizar login para estar em uma sessão autenticada
    await page.goto('https://www.exemplo.com.br/login'); // Substitua pela URL real
    await page.fill('#email', 'usuario@exemplo.com');
    await page.fill('#senha', 'SenhaSegura123');
    await page.click('#botaoLogin');
    await expect(page).toHaveURL(/.*dashboard/);
    console.log('Pré-requisito: Login realizado com sucesso.');

    // 1. Clicar no botão/link de logout
    await page.click('#botaoSair'); // Substitua pelo ID/Seletor real do botão de sair

    // 2. Aguardar e verificar o redirecionamento para a página de login
    await expect(page).toHaveURL(/.*login/); // Substitua pela URL real da página de login

    // 3. Tentar acessar uma página restrita e verificar se é negado
    await page.goto('https://www.exemplo.com.br/dashboard'); // Substitua pela URL real de uma página restrita
    await expect(page).toHaveURL(/.*login/); // Deve ser redirecionado de volta para o login
});
