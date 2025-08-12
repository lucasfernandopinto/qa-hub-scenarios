# Cenário: Excluir Recurso com Sucesso (204 No Content)

## Descrição

Este cenário de teste automatizado verifica a funcionalidade de um endpoint de API que exclui um recurso. O objetivo é garantir que a API retorne um código de status HTTP **204 (No Content)** após a exclusão bem-sucedida, confirmando que o recurso foi removido e que não há corpo de resposta esperado.

## Pré-requisitos

* Ambiente de teste de API configurado e acessível.
* Um ID de recurso válido que possa ser excluído (este recurso deve ser criado antes do teste).

## Comportamento Esperado

Ao executar este cenário, espera-se que:
1.  Uma requisição `DELETE` seja enviada para o endpoint com um ID válido.
2.  A API retorne com o código de status HTTP 204.
3.  O corpo da resposta esteja vazio.
4.  Uma subsequente requisição `GET` para o mesmo ID retorne 404 (Not Found).

## Como Executar

Este cenário pode ser executado utilizando os frameworks de automação correspondentes (Cypress JS, Playwright JS).

### Para Cypress JS:
1.  Navegue até a pasta raiz do seu projeto Cypress.
2.  Abra o Cypress Test Runner: `npx cypress open`
3.  Na interface do Cypress, navegue até `cypress/e2e/api-testing/excluir-recurso/excluir_recurso_test.js` e clique para executá-lo.

### Para Playwright JS:
1.  Navegue até a pasta raiz do seu projeto Playwright.
2.  Execute o teste via linha de comando: `npx playwright test excluir_recurso_test.js`

## Observações

* A URL da API e o ID do recurso são exemplos e devem ser substituídos pelos reais da sua aplicação.
* O teste deve ter uma etapa prévia para criar um recurso, garantindo que ele exista para ser excluído.