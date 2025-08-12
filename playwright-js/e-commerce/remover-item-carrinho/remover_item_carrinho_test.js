// playwright-js/e-commerce/remover-item-carrinho/remover_item_carrinho_test.js

const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    // Pré-requisito: Adicionar um item ao carrinho antes de cada teste
    await page.goto('https://www.exemplo-loja.com.br/produto/tenis-de-corrida');
    await page.click('#botaoAdicionarCarrinho');
    await page.locator('.icone-carrinho').click();
    await expect(page).toHaveURL(/.*carrinho/);
    console.log('Pré-requisito: Item adicionado ao carrinho.');
});

test('Remover Item do Carrinho - Deve remover um item do carrinho com sucesso e recalcular o total', async ({ page }) => {
    await expect(page.locator('.lista-itens-carrinho')).toHaveCount(1);

    // Remover o item do carrinho
    await page.locator('.botao-remover-item').first().click(); // Substitua pelo seletor real

    // Verificar se o item foi removido
    await expect(page.locator('.lista-itens-carrinho')).toHaveCount(0);
    await expect(page.locator('text=Seu carrinho está vazio.')).toBeVisible();

    // Opcional: Verificar se o total é zero
    await expect(page.locator('.total-carrinho')).toContainText('R$ 0,00');
});
