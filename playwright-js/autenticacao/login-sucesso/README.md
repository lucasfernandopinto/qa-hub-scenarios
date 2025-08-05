# Cenário: Login com Sucesso

## Descrição

Este cenário de teste automatizado verifica a funcionalidade de login de um usuário no sistema, garantindo que, ao fornecer credenciais válidas, o usuário seja autenticado com sucesso e redirecionado para a página de dashboard ou área logada.

## Pré-requisitos

* Ambiente de teste configurado e acessível (URL base: `https://www.exemplo.com.br`).

* Um usuário de teste válido cadastrado no sistema com as credenciais:

  * **Email:** `usuario@exemplo.com`

  * **Senha:** `SenhaSegura123`

## Comportamento Esperado

Ao executar este cenário, espera-se que:

1. A página de login seja carregada corretamente.

2. Os campos de email e senha sejam preenchidos com as credenciais válidas.

3. O botão de login seja clicado.

4. O sistema autentique o usuário com sucesso.

5. O usuário seja redirecionado para a página principal do sistema.

6. Um elemento de confirmação (ex: mensagem de boas-vindas, nome do usuário logado) seja visível na página.

## Como Executar

Este cenário pode ser executado utilizando os frameworks de automação correspondentes (Selenium JS, Cypress JS, Playwright JS).

### Para Selenium JS:

1. Certifique-se de ter o `chromedriver` (ou outro driver de navegador) instalado e configurado em seu PATH.

2. Navegue até a pasta `qahub-scenarios/selenium-js/autenticacao/login-sucesso/`.

3. Execute o teste via Node.js: `node login_sucesso_test.js`

### Para Cypress JS:

1. Navegue até a pasta raiz do seu projeto Cypress.

2. Abra o Cypress Test Runner: `npx cypress open`

3. Na interface do Cypress, navegue até `cypress/e2e/autenticacao/login-sucesso/login_sucesso_test.js` e clique para executá-lo.

### Para Playwright JS:

1. Navegue até a pasta raiz do seu projeto Playwright.

2. Execute o teste via linha de comando: `npx playwright test login_sucesso_test.js`

## Observações

* Os seletores e URLs são exemplos e devem ser substituídos pelos reais da sua aplicação.

* A URL (`https://www.exemplo.com.br/login`) deve ser alterada para a URL de login do ambiente de teste.

* Este cenário foca apenas no fluxo de sucesso. Cenários de falha (credenciais inválidas, campos vazios) devem ser criados separadamente.