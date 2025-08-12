# Cenário: Excluir Conta

## Descrição

Este cenário de teste automatizado verifica a funcionalidade de exclusão de conta de um usuário logado. O objetivo é garantir que o usuário possa remover sua conta de forma segura, com uma confirmação clara, e que após a exclusão ele não possa mais fazer login com suas credenciais.

## Pré-requisitos

* Ambiente de teste configurado e acessível (URL base: `https://www.exemplo.com.br`).
* Um usuário de teste válido e já logado no sistema (ex: `usuario_excluir@exemplo.com`, `SenhaExcluir123`).

## Comportamento Esperado

Ao executar este cenário, espera-se que:

1. O usuário esteja logado no sistema e navegue para a página de configurações de conta.
2. O usuário inicie o processo de exclusão de conta e confirme a ação.
3. A conta do usuário seja removida com sucesso.
4. O usuário seja redirecionado para uma página pública (ex: página de login).
5. Uma tentativa de login com as credenciais da conta excluída resulte em falha.

## Como Executar

Este cenário pode ser executado utilizando os frameworks de automação correspondentes (Cypress JS, Playwright JS).

### Para Cypress JS:

1. Navegue até a pasta raiz do seu projeto Cypress.
2. Abra o Cypress Test Runner: `npx cypress open`
3. Na interface do Cypress, navegue até `cypress/e2e/gerenciamento-usuario/excluir-conta/excluir_conta_test.js` e clique para executá-lo.

### Para Playwright JS:

1. Navegue até a pasta raiz do seu projeto Playwright.
2. Execute o teste via linha de comando: `npx playwright test excluir_conta_test.js`

## Observações

* Este teste deve ser executado com um usuário de teste específico para exclusão, pois a ação é permanente.
* Os seletores e URLs são exemplos e devem ser substituídos pelos reais da sua aplicação.