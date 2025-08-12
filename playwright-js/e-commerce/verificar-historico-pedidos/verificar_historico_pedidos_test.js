// playwright-js/e-commerce/verificar-historico-pedidos/verificar_historico_pedidos_test.js

const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    // Pré-requisito: Login e garantir que o usuário tem pedidos
    // Esta parte do código deve ser feita com uma função de login
    await page.goto('https://www.emplo-loja.com.br/login');
    await page.fill('#email', 'usuario_com_pedidos@exemplo.com');
    await page.fill('#senha', 'SenhaSegura123');
    await page.click('#botaoLogin');
    await expect(page).toHaveURL(/.*dashboard/);
    console.log('Pré-requisito: Login realizado com sucesso.');
});

test('Verificar Histórico de Pedidos - Deve exibir o histórico de pedidos e os detalhes de uma compra', async ({ page }) => {
    // 1. Navegar para a página de histórico de pedidos
    await page.goto('https://www.exemplo-loja.com.br/historico-pedidos');
    
    // 2. Verificar se a lista de pedidos é exibida e não está vazia
    const listaPedidos = page.locator('.lista-pedidos');
    await expect(listaPedidos).toBeVisible();
    await expect(page.locator('.item-pedido')).toHaveCount(1); // Assumindo 1 pedido para o teste
    
    // 3. Clicar no primeiro pedido para ver detalhes
    await page.locator('.item-pedido').first().click();
    
    // 4. Verificar a URL e o conteúdo da página de detalhes do pedido
    await expect(page).toHaveURL(/.*pedido\//);
    await expect(page.locator('.detalhes-pedido')).toBeVisible();
});
