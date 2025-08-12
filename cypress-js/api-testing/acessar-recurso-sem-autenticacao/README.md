# Cenário: Acessar Recurso sem Autenticação (401 Unauthorized)

## Descrição

Este cenário de teste automatizado verifica a segurança da API ao tentar acessar um endpoint que requer autenticação, mas sem fornecer um token válido ou com o token ausente. O objetivo é garantir que a API retorne um código de status HTTP **401 (Unauthorized)**, impedindo o acesso indevido.

## Pré-requisitos

* Ambiente de teste de API configurado e acessível.
* Conhecimento de um endpoint que requer autenticação para ser acessado.

## Comportamento Esperado

Ao executar este cenário, espera-se que:
1.  Uma requisição `GET` (ou outro método) seja enviada para um endpoint protegido, sem o cabeçalho de autenticação (`Authorization`).
2.  A API retorne com o código de status HTTP 401.
3.  O corpo da resposta contenha uma mensagem de erro clara, indicando a falha de autenticação.

## Como Executar

Este cenário pode ser executado utilizando os frameworks de automação correspondentes (Cypress JS, Playwright JS).

### Para Cypress JS:
1.  Navegue até a pasta raiz do seu projeto Cypress.
2.  Abra o Cypress Test Runner: `npx cypress open`
3.  Na interface do Cypress, navegue até `cypress/e2e/api-testing/acessar-recurso-sem-autenticacao/acessar_recurso_sem_autenticacao_test.js` e clique para executá-lo.

### Para Playwright JS:
1.  Navegue até a pasta raiz do seu projeto Playwright.
2.  Execute o teste via linha de comando: `npx playwright test acessar_recurso_sem_autenticacao_test.js`

## Observações

* A URL da API é um exemplo e deve ser substituída pela real da sua aplicação.
* Este teste verifica a resposta da API, não interage com a interface do usuário.