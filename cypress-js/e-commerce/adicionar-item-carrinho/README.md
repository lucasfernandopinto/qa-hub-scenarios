# Cenário: Adicionar Item a um Carrinho de Compras

## Descrição

Este cenário de teste automatizado verifica a funcionalidade de adicionar um item ao carrinho de compras em uma loja virtual. O objetivo é garantir que o produto seja adicionado com sucesso, que o carrinho seja atualizado e que o total da compra reflita a inclusão do novo item.

## Pré-requisitos

* Ambiente de teste configurado e acessível (URL base: `https://www.exemplo-loja.com.br`).
* Acesso a uma página de produto com um botão "Adicionar ao Carrinho" funcional.

## Comportamento Esperado

Ao executar este cenário, espera-se que:
1.  O usuário navegue até a página de um produto.
2.  O usuário clique no botão "Adicionar ao Carrinho".
3.  O sistema exiba uma confirmação de que o item foi adicionado.
4.  O ícone do carrinho de compras (ou um indicador visual) mostre a quantidade correta de itens.
5.  Ao visualizar o carrinho, o item adicionado esteja listado.

## Como Executar

Este cenário pode ser executado utilizando os frameworks de automação correspondentes (Cypress JS, Playwright JS).

### Para Cypress JS:
1.  Navegue até a pasta raiz do seu projeto Cypress.
2.  Abra o Cypress Test Runner: `npx cypress open`
3.  Na interface do Cypress, navegue até `cypress/e2e/e-commerce/adicionar-item-carrinho/adicionar_item_carrinho_test.js` e clique para executá-lo.

### Para Playwright JS:
1.  Navegue até a pasta raiz do seu projeto Playwright.
2.  Execute o teste via linha de comando: `npx playwright test adicionar_item_carrinho_test.js`

## Observações

* Os seletores e URLs são exemplos e devem ser substituídos pelos reais da sua aplicação.
* Este teste pressupõe que o usuário não está logado, testando o fluxo básico de um visitante.