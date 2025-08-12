# Cenário: Login com Credenciais Inválidas

## Descrição

Este cenário de teste automatizado verifica a funcionalidade de login de um usuário no sistema quando são fornecidas credenciais inválidas (e-mail ou senha incorretos). O objetivo é garantir que o sistema exiba uma mensagem de erro apropriada e não permita o acesso.

## Pré-requisitos

* Ambiente de teste configurado e acessível (URL base: `https://www.exemplo.com.br`).

* Não é necessário um usuário específico, apenas um e-mail/senha que se saiba ser inválido(a).


## Comportamento Esperado

Ao executar este cenário, espera-se que:

1. A página de login seja carregada corretamente.

2. Os campos de email e senha sejam preenchidos com as credenciais inválidas.

3. O botão de login seja clicado.

4. O sistema negue o acesso.

5. Uma mensagem de erro clara e específica seja exibida ao usuário (ex: "Credenciais inválidas", "Email ou senha incorretos").

6. O usuário permaneça na página de login ou seja redirecionado para a mesma página.

## Como Executar

Este cenário pode ser executado utilizando os frameworks de automação correspondentes (Cypress JS, Playwright JS).

### Para Cypress JS:

1. Navegue até a pasta raiz do seu projeto Cypress.

2. Abra o Cypress Test Runner: `npx cypress open`

3. Na interface do Cypress, navegue até `cypress/e2e/autenticacao/login-falha-credenciais-invalidas/login-falha-credenciais-invalidas_test.js` e clique para executá-lo.

### Para Playwright JS:

1. Navegue até a pasta raiz do seu projeto Playwright.

2. Execute o teste via linha de comando: `npx playwright test login-falha-credenciais-invalidas_test.js`

## Observações

* Os seletores e URLs são exemplos e devem ser substituídos pelos reais da sua aplicação.

* A URL (`https://www.exemplo.com.br/login`) deve ser alterada para a URL de login do ambiente de teste.

* A mensagem de erro esperada deve ser ajustada para corresponder à mensagem exata exibida pelo sistema.