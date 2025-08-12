# Cenário: Consultar Recurso Inexistente (404 Not Found)

## Descrição

Este cenário de teste automatizado verifica a funcionalidade de um endpoint de API ao tentar consultar um recurso que não existe. O objetivo é garantir que a API retorne um código de status HTTP **404 (Not Found)** e uma mensagem de erro apropriada, em vez de um código de sucesso inesperado.

## Pré-requisitos

* Ambiente de teste de API configurado e acessível.
* Um ID de recurso que se saiba que não existe no sistema (ex: `99999`).

## Comportamento Esperado

Ao executar este cenário, espera-se que:
1.  Uma requisição `GET` seja enviada para o endpoint com um ID inexistente.
2.  A API retorne com o código de status HTTP 404.
3.  O corpo da resposta contenha uma mensagem de erro indicando que o recurso não foi encontrado.

## Como Executar

Este cenário pode ser executado utilizando os frameworks de automação correspondentes (Cypress JS, Playwright JS).

### Para Cypress JS:
1.  Navegue até a pasta raiz do seu projeto Cypress.
2.  Abra o Cypress Test Runner: `npx cypress open`
3.  Na interface do Cypress, navegue até `cypress/e2e/api-testing/consultar-recurso-inexistente/consultar_recurso_inexistente_test.js` e clique para executá-lo.

### Para Playwright JS:
1.  Navegue até a pasta raiz do seu projeto Playwright.
2.  Execute o teste via linha de comando: `npx playwright test consultar_recurso_inexistente_test.js`

## Observações

* A URL da API e o ID do recurso são exemplos e devem ser substituídos pelos reais da sua aplicação.
* É importante que a requisição seja configurada para não falhar automaticamente com status de erro, permitindo a validação do status 404.