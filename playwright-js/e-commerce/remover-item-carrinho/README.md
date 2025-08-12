# Cenário: Remover Item do Carrinho de Compras

## Descrição

Este cenário de teste automatizado verifica a funcionalidade de remover um item do carrinho de compras. O objetivo é garantir que, ao remover um produto, o item seja retirado da lista e que o total da compra seja atualizado corretamente.

## Pré-requisitos

* Ambiente de teste configurado e acessível (URL base: `https://www.exemplo-loja.com.br`).
* O carrinho de compras já deve conter pelo menos um item.

## Comportamento Esperado

Ao executar este cenário, espera-se que:
1.  O usuário navegue até a página do carrinho de compras.
2.  O usuário clique no botão de "Remover" de um item específico.
3.  O item seja removido da lista do carrinho.
4.  O total da compra seja recalculado e atualizado na tela.

## Como Executar

Este cenário pode ser executado utilizando os frameworks de automação correspondentes (Cypress JS, Playwright JS).

### Para Cypress JS:
1.  Navegue até a pasta raiz do seu projeto Cypress.
2.  Abra o Cypress Test Runner: `npx cypress open`
3.  Na interface do Cypress, navegue até `cypress/e2e/e-commerce/remover-item-carrinho/remover_item_carrinho_test.js` e clique para executá-lo.

### Para Playwright JS:
1.  Navegue até a pasta raiz do seu projeto Playwright.
2.  Execute o teste via linha de comando: `npx playwright test remover_item_carrinho_test.js`

## Observações

* O teste deve simular a adição de um item ao carrinho como uma etapa inicial (`beforeEach` ou `beforeAll`).
* Os seletores e URLs são exemplos e devem ser substituídos pelos reais da sua aplicação.