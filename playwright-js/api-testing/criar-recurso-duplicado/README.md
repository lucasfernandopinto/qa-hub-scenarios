# Cenário: Criar Recurso Duplicado (409 Conflict)

## Descrição

Este cenário de teste automatizado verifica o comportamento da API ao tentar criar um recurso que já existe com um identificador único (ex: um e-mail já cadastrado). O objetivo é garantir que a API retorne um código de status HTTP **409 (Conflict)**, evitando a duplicação de dados e informando o usuário sobre o problema.

## Pré-requisitos

* Ambiente de teste de API configurado e acessível.
* Um recurso existente com um identificador único (ex: um e-mail que já está no banco de dados).

## Comportamento Esperado

Ao executar este cenário, espera-se que:
1.  Uma requisição `POST` seja enviada para o endpoint de criação com dados de um recurso já existente.
2.  A API retorne com o código de status HTTP 409.
3.  O corpo da resposta contenha uma mensagem de erro clara, indicando que o recurso já existe.

## Como Executar

Este cenário pode ser executado utilizando os frameworks de automação correspondentes (Cypress JS, Playwright JS).

### Para Cypress JS:
1.  Navegue até a pasta raiz do seu projeto Cypress.
2.  Abra o Cypress Test Runner: `npx cypress open`
3.  Na interface do Cypress, navegue até `cypress/e2e/api-testing/criar-recurso-duplicado/criar_recurso_duplicado_test.js` e clique para executá-lo.

### Para Playwright JS:
1.  Navegue até a pasta raiz do seu projeto Playwright.
2.  Execute o teste via linha de comando: `npx playwright test criar_recurso_duplicado_test.js`

## Observações

* A URL da API e os dados de criação são exemplos e devem ser substituídos pelos reais da sua aplicação.
* Este teste pressupõe que o recurso com o identificador único já existe no banco de dados antes da execução.