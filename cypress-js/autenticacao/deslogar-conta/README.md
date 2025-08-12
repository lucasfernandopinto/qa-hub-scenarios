# Cenário: Deslogar da Conta

## Descrição

Este cenário de teste automatizado verifica a funcionalidade de logout do sistema. O objetivo é garantir que, após o usuário clicar no botão de "Sair" ou "Deslogar", sua sessão seja encerrada corretamente e ele seja redirecionado para a página de login ou uma página pública, sem acesso a áreas restritas.

## Pré-requisitos

* Ambiente de teste configurado e acessível (URL base: `https://www.exemplo.com.br`).

* Um usuário de teste válido e logado no sistema (ex: `usuario@exemplo.com`, `SenhaSegura123`).

## Comportamento Esperado

Ao executar este cenário, espera-se que:

1.  O usuário esteja logado no sistema e em uma página autenticada (ex: Dashboard).

2.  O usuário clique no botão ou link de "Sair" / "Deslogar".

3.  A sessão do usuário seja encerrada.

4.  O usuário seja redirecionado para a página de login ou uma página pública.

5.  O usuário não consiga mais acessar áreas restritas sem realizar um novo login.

## Como Executar

Este cenário pode ser executado utilizando os frameworks de automação correspondentes (Cypress JS, Playwright JS).

### Para Cypress JS:

1.  Navegue até a pasta raiz do seu projeto Cypress.

2.  Abra o Cypress Test Runner: `npx cypress open`

3.  Na interface do Cypress, navegue até `cypress/e2e/autenticacao/deslogar-conta/deslogar_conta_test.js` e clique para executá-lo.

### Para Playwright JS:

1.  Navegue até a pasta raiz do seu projeto Playwright.

2.  Execute o teste via linha de comando: `npx playwright test deslogar_conta_test.js`

## Observações

* Os seletores e URLs são exemplos e devem ser substituídos pelos reais da sua aplicação.

* É importante que o teste inclua uma verificação de que o acesso a uma página restrita é negado após o logout.