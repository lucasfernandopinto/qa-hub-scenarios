# Cenário: Alterar Senha

## Descrição

Este cenário de teste automatizado verifica a funcionalidade de alteração de senha de um usuário que está logado. O objetivo é garantir que o usuário possa alterar sua senha com sucesso, fornecendo a senha atual e uma nova senha que atenda às políticas de segurança.

## Pré-requisitos

* Ambiente de teste configurado e acessível (URL base: `https://www.exemplo.com.br`).
* Um usuário de teste válido e logado no sistema (ex: `usuario@exemplo.com`, `SenhaSegura123`).
* Conhecimento da política de senha do sistema.

## Comportamento Esperado

Ao executar este cenário, espera-se que:

1. O usuário esteja logado no sistema e navegue para a área de segurança/configurações de conta.
2. O usuário insira sua senha atual e uma nova senha válida (com confirmação).
3. O usuário clique no botão de "Alterar Senha".
4. O sistema exiba uma mensagem de sucesso confirmando a alteração da senha.
5. O usuário consiga deslogar e fazer login novamente com a nova senha.

## Como Executar

Este cenário pode ser executado utilizando os frameworks de automação correspondentes (Cypress JS, Playwright JS).

### Para Cypress JS:

1. Navegue até a pasta raiz do seu projeto Cypress.
2. Abra o Cypress Test Runner: `npx cypress open`
3. Na interface do Cypress, navegue até `cypress/e2e/gerenciamento-usuario/alterar-senha/alterar_senha_test.js` e clique para executá-lo.

### Para Playwright JS:

1. Navegue até a pasta raiz do seu projeto Playwright.
2. Execute o teste via linha de comando: `npx playwright test alterar_senha_test.js`

## Observações

* Os seletores e URLs são exemplos e devem ser substituídos pelos reais da sua aplicação.
* A senha "NovaSenhaSegura456" deve ser ajustada para atender à política de segurança do seu sistema.