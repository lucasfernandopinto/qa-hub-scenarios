# Cenário: Finalizar uma Compra

## Descrição

Este cenário de teste automatizado verifica o fluxo completo de checkout, desde o carrinho de compras até a confirmação do pedido. O objetivo é garantir que o usuário possa preencher as informações de envio e pagamento, e que a compra seja finalizada com sucesso, gerando um pedido.

## Pré-requisitos

* Ambiente de teste configurado e acessível (URL base: `https://www.exemplo-loja.com.br`).
* Um usuário de teste válido e logado no sistema.
* O carrinho de compras deve conter pelo menos um item.

## Comportamento Esperado

Ao executar este cenário, espera-se que:
1.  O usuário esteja na página do carrinho com um item.
2.  O usuário inicie o processo de checkout.
3.  O usuário preencha as informações de envio e pagamento.
4.  O usuário confirme a compra.
5.  O sistema exiba uma página de confirmação de pedido, com os detalhes da compra.

## Como Executar

Este cenário pode ser executado utilizando os frameworks de automação correspondentes (Cypress JS, Playwright JS).

### Para Cypress JS:
1.  Navegue até a pasta raiz do seu projeto Cypress.
2.  Abra o Cypress Test Runner: `npx cypress open`
3.  Na interface do Cypress, navegue até `cypress/e2e/e-commerce/finalizar-compra/finalizar_compra_test.js` e clique para executá-lo.

### Para Playwright JS:
1.  Navegue até a pasta raiz do seu projeto Playwright.
2.  Execute o teste via linha de comando: `npx playwright test finalizar_compra_test.js`

## Observações

* O teste deve simular o login do usuário e a adição de itens ao carrinho como etapas iniciais.
* O teste de pagamento pode usar dados de cartão de crédito de teste fornecidos por processadores de pagamento (ex: Stripe, Braintree).