# Cenário: Atualizar Informações do Perfil

## Descrição

Este cenário de teste automatizado verifica a funcionalidade de atualização de informações do perfil de um usuário logado. O objetivo é garantir que um usuário possa alterar seus dados pessoais (como nome ou e-mail) e que essas mudanças sejam salvas e exibidas corretamente no sistema.

## Pré-requisitos

* Ambiente de teste configurado e acessível (URL base: `https://www.exemplo.com.br`).

* Um usuário de teste válido e já logado no sistema (ex: `usuario@exemplo.com`, `SenhaSegura123`).

## Comportamento Esperado

Ao executar este cenário, espera-se que:

1. O usuário navegue até a página de configurações de perfil.

2. O usuário edite as informações de seu perfil (ex: altere o nome).

3. O usuário clique no botão de "Salvar" ou "Atualizar".

4. O sistema exiba uma mensagem de sucesso confirmando a atualização.

5. As informações atualizadas sejam refletidas corretamente na página de perfil e/ou em outras áreas relevantes do sistema.

## Como Executar

Este cenário pode ser executado utilizando os frameworks de automação correspondentes (Cypress JS, Playwright JS).

### Para Cypress JS:

1. Navegue até a pasta raiz do seu projeto Cypress.

2. Abra o Cypress Test Runner: `npx cypress open`

3. Na interface do Cypress, navegue até `cypress/e2e/gerenciamento-usuario/atualizar-perfil/atualizar_perfil_test.js` e clique para executá-lo.

### Para Playwright JS:

1. Navegue até a pasta raiz do seu projeto Playwright.

2. Execute o teste via linha de comando: `npx playwright test atualizar_perfil_test.js`

## Observações

* Os seletores e URLs são exemplos e devem ser substituídos pelos reais da sua aplicação.

* O teste deve simular o login do usuário antes de tentar atualizar o perfil.

* É importante que o teste verifique a alteração dos dados persistidos no banco de dados, se possível.