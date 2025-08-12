# Cenário: Visualizar Informações do Perfil

## Descrição

Este cenário de teste automatizado verifica se a página de perfil do usuário exibe corretamente as informações pessoais (como nome, e-mail, etc.) do usuário logado. O objetivo é garantir a integridade dos dados e que eles sejam apresentados de forma correta e acessível.

## Pré-requisitos

* Ambiente de teste configurado e acessível (URL base: `https://www.exemplo.com.br`).
* Um usuário de teste válido e já logado no sistema (ex: `usuario@exemplo.com`, `SenhaSegura123`).

## Comportamento Esperado

Ao executar este cenário, espera-se que:

1. O usuário esteja logado no sistema e navegue para a página de perfil.
2. O nome, e-mail e outras informações do usuário sejam exibidos corretamente na tela.
3. As informações exibidas correspondam aos dados do usuário logado.

## Como Executar

Este cenário pode ser executado utilizando os frameworks de automação correspondentes (Cypress JS, Playwright JS).

### Para Cypress JS:

1. Navegue até a pasta raiz do seu projeto Cypress.
2. Abra o Cypress Test Runner: `npx cypress open`
3. Na interface do Cypress, navegue até `cypress/e2e/gerenciamento-usuario/visualizar-perfil/visualizar_perfil_test.js` e clique para executá-lo.

### Para Playwright JS:

1. Navegue até a pasta raiz do seu projeto Playwright.
2. Execute o teste via linha de comando: `npx playwright test visualizar_perfil_test.js`

## Observações

* Os seletores e URLs são exemplos e devem ser substituídos pelos reais da sua aplicação.
* O teste deve ter um usuário pré-definido e logado para verificar a correspondência dos dados.