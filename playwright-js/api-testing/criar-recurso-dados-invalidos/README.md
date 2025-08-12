# Cenário: Criar Recurso com Dados Inválidos (400 Bad Request)

## Descrição

Este cenário de teste automatizado verifica a validação de um endpoint de API que cria um recurso. O objetivo é garantir que a API retorne um código de status HTTP **400 (Bad Request)** e um corpo de resposta detalhando os erros de validação quando uma requisição `POST` é enviada com dados inválidos ou faltando.

## Pré-requisitos

* Ambiente de teste de API configurado e acessível.

## Comportamento Esperado

Ao executar este cenário, espera-se que:
1.  Uma requisição `POST` seja enviada para o endpoint com um payload que não atende aos requisitos de validação.
2.  A API retorne com o código de status HTTP 400.
3.  O corpo da resposta contenha uma lista ou descrição dos erros de validação (ex: "O campo 'nome' é obrigatório").

## Como Executar

Este cenário pode ser executado utilizando os frameworks de automação correspondentes (Cypress JS, Playwright JS).

### Para Cypress JS:
1.  Navegue até a pasta raiz do seu projeto Cypress.
2.  Abra o Cypress Test Runner: `npx cypress open`
3.  Na interface do Cypress, navegue até `cypress/e2e/api-testing/criar-recurso-dados-invalidos/criar_recurso_dados_invalidos_test.js` e clique para executá-lo.

### Para Playwright JS:
1.  Navegue até a pasta raiz do seu projeto Playwright.
2.  Execute o teste via linha de comando: `npx playwright test criar_recurso_dados_invalidos_test.js`

## Observações

* A URL da API e o payload são exemplos e devem ser substituídos pelos reais da sua aplicação.
* Este teste pressupõe que o campo "nome" é obrigatório.