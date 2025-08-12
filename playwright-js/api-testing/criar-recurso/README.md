# Cenário: Criar Novo Recurso na API

## Descrição

Este cenário de teste automatizado verifica a funcionalidade de um endpoint de API que cria um novo recurso. O objetivo é garantir que a API aceite uma requisição `POST` com os dados de um novo recurso, retorne um código de status HTTP 201 (Created) e que o corpo da resposta contenha as informações do recurso recém-criado.

## Pré-requisitos

* Ambiente de teste de API configurado e acessível.

## Comportamento Esperado

Ao executar este cenário, espera-se que:
1. Uma requisição `POST` seja enviada para o endpoint de criação de recursos com dados válidos.
2. A API retorne com o código de status HTTP 201.
3. O corpo da resposta contenha os dados do recurso criado, incluindo um ID gerado pela API.

## Como Executar

Este cenário pode ser executado utilizando os frameworks de automação correspondentes (Cypress JS, Playwright JS).

### Para Cypress JS:
1. Navegue até a pasta raiz do seu projeto Cypress.
2. Abra o Cypress Test Runner: `npx cypress open`
3. Na interface do Cypress, navegue até `cypress/e2e/api-testing/criar-recurso-api/criar_recurso_api_test.js` e clique para executá-lo.

### Para Playwright JS:
1. Navegue até a pasta raiz do seu projeto Playwright.
2. Execute o teste via linha de comando: `npx playwright test criar_recurso_api_test.js`

## Observações

* A URL da API é um exemplo e deve ser substituída pela real da sua aplicação.
* O teste deve gerar dados de recurso de forma dinâmica para evitar conflitos de "e-mail já existente" em execuções subsequentes.
* Este teste não interage com a interface do usuário (UI).