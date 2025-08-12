# Cenário: Verificar Histórico de Pedidos

## Descrição

Este cenário de teste automatizado verifica se um usuário logado pode acessar e visualizar seu histórico de pedidos. O objetivo é garantir que o histórico exiba os pedidos corretos, com os detalhes da compra, e que o fluxo de navegação funcione como esperado.

## Pré-requisitos

* Ambiente de teste configurado e acessível (URL base: `https://www.exemplo-loja.com.br`).
* Um usuário de teste válido e logado no sistema com, pelo menos, um pedido finalizado.

## Comportamento Esperado

Ao executar este cenário, espera-se que:
1.  O usuário esteja logado e navegue para a página de "Histórico de Pedidos".
2.  A lista de pedidos seja exibida.
3.  O pedido finalizado no cenário anterior esteja presente na lista.
4.  O usuário possa clicar em um pedido para visualizar seus detalhes.

## Como Executar

Este cenário pode ser executado utilizando os frameworks de automação correspondentes (Cypress JS, Playwright JS).

### Para Cypress JS:
1.  Navegue até a pasta raiz do seu projeto Cypress.
2.  Abra o Cypress Test Runner: `npx cypress open`
3.  Na interface do Cypress, navegue até `cypress/e2e/e-commerce/verificar-historico-pedidos/verificar_historico_pedidos_test.js` e clique para executá-lo.

### Para Playwright JS:
1.  Navegue até a pasta raiz do seu projeto Playwright.
2.  Execute o teste via linha de comando: `npx playwright test verificar_historico_pedidos_test.js`

## Observações

* O teste deve simular o login do usuário como pré-requisito.
* É importante que os dados de teste incluam um histórico de pedidos.