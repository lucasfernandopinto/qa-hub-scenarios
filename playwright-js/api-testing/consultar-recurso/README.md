# Cenário: Consultar Recurso por ID (API)

## Descrição

Este cenário de teste automatizado verifica a funcionalidade de um endpoint de API que consulta os detalhes de um recurso com base em seu ID. O objetivo é garantir que a API retorne o código de status HTTP 200 (OK) e que o corpo da resposta contenha as informações corretas do recurso.

## Pré-requisitos

* Ambiente de teste de API configurado e acessível.
* Um ID de recurso válido e conhecido para ser usado no teste (ex: `12345`).

## Comportamento Esperado

Ao executar este cenário, espera-se que:
1. Uma requisição `GET` seja enviada para o endpoint de recursos com um ID válido.
2. A API retorne com o código de status HTTP 200.
3. O corpo da resposta (`response body`) seja um objeto JSON contendo os dados do recurso, incluindo o ID consultado.

## Como Executar

Este cenário pode ser executado utilizando os frameworks de automação correspondentes (Cypress JS, Playwright JS).

### Para Cypress JS:
1. Navegue até a pasta raiz do seu projeto Cypress.
2. Abra o Cypress Test Runner: `npx cypress open`
3. Na interface do Cypress, navegue até `cypress/e2e/api-testing/consultar-recurso-api/consultar_recurso_api_test.js` e clique para executá-lo.

### Para Playwright JS:
1. Navegue até a pasta raiz do seu projeto Playwright.
2. Execute o teste via linha de comando: `npx playwright test consultar_recurso_api_test.js`

## Observações

* A URL da API e o ID do recurso são exemplos e devem ser substituídos pelos reais da sua aplicação.
* Este teste não interage com a interface do usuário (UI).