// playwright-js/e-commerce/adicionar-item-carrinho/adicionar_item_carrinho_test.js

const { test, expect } = require('@playwright/test');

test('Adicionar Item a um Carrinho - Deve adicionar um produto ao carrinho e verificar se ele está presente', async ({ page }) => {
    await page.goto('https://www.exemplo-loja.com.br/produto/tenis-de-corrida'); // Substitua pela URL de um produto real

    // Clicar no botão para adicionar ao carrinho
    await page.click('#botaoAdicionarCarrinho'); // Substitua pelo seletor real

    // Verificar a mensagem de confirmação
    const mensagemConfirmacao = page.locator('.mensagem-confirmacao');
    await expect(mensagemConfirmacao).toBeVisible();
    await expect(mensagemConfirmacao).toContainText('Adicionado ao carrinho!');

    // Verificar se o ícone do carrinho mostra a quantidade correta
    const iconeCarrinho = page.locator('.icone-carrinho');
    await expect(iconeCarrinho).toContainText('1');

    // Navegar para o carrinho e verificar se o item está lá
    await iconeCarrinho.click();
    await expect(page).toHaveURL(/.*carrinho/);
    await expect(page.locator('.lista-itens-carrinho')).toContainText('Tênis de Corrida');
});
