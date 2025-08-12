// playwright-js/e-commerce/finalizar-compra/finalizar_compra_test.js

const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    // Pré-requisito: Login e adição de item ao carrinho
    // Esta parte do código deve ser feita com uma função de login
    await page.goto('https://www.exemplo-loja.com.br/login');
    await page.fill('#email', 'usuario@exemplo.com');
    await page.fill('#senha', 'SenhaSegura123');
    await page.click('#botaoLogin');
    await expect(page).toHaveURL(/.*dashboard/);

    await page.goto('https://www.exemplo-loja.com.br/produto/tenis-de-corrida');
    await page.click('#botaoAdicionarCarrinho');
    await page.locator('.icone-carrinho').click();
    await expect(page).toHaveURL(/.*carrinho/);
    console.log('Pré-requisito: Login e item no carrinho.');
});

test('Finalizar uma Compra - Deve completar o processo de checkout com sucesso e gerar um pedido', async ({ page }) => {
    // 1. Iniciar o checkout
    await page.click('#botaoFinalizarCompra');
    await expect(page).toHaveURL(/.*checkout/);

    // 2. Preencher informações de envio
    await page.fill('#endereco', 'Rua Teste, 123');
    await page.fill('#cidade', 'Cidade Exemplo');
    await page.fill('#cep', '12345-678');
    await page.click('#botaoContinuarEnvio');

    // 3. Preencher informações de pagamento
    await page.fill('#cartaoCredito', '1111222233334444');
    await page.fill('#cvv', '123');
    await page.click('#botaoContinuarPagamento');

    // 4. Confirmar a compra
    await expect(page).toHaveURL(/.*confirmacao/);
    await page.click('#botaoConfirmarCompra');

    // 5. Verificar a página de confirmação do pedido
    await expect(page).toHaveURL(/.*pedido-confirmado/);
    const mensagemConfirmacao = page.locator('.mensagem-confirmacao-pedido');
    await expect(mensagemConfirmacao).toBeVisible();
    await expect(mensagemConfirmacao).toContainText('Obrigado por sua compra!');
    await expect(page.locator('.numero-pedido')).toBeVisible();
});
