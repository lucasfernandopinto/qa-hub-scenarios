# Cenário: Login com Campos Vazios

## Descrição

Este cenário de teste automatizado verifica o comportamento do sistema quando um usuário tenta realizar o login sem preencher os campos obrigatórios (e-mail e/ou senha). O objetivo é garantir que o sistema exiba mensagens de erro de validação para os campos vazios e não permita o acesso.

## Pré-requisitos

* Ambiente de teste configurado e acessível (URL base: `https://www.exemplo.com.br`).

## Comportamento Esperado

Ao executar este cenário, espera-se que:

1. A página de login seja carregada corretamente.

2. O usuário tente clicar no botão de login sem preencher o e-mail e/ou a senha.

3. O sistema exiba mensagens de erro de validação para os campos vazios (ex: "Campo obrigatório", "Por favor, insira seu e-mail").

4. O login seja negado e o usuário permaneça na página de login.

## Como Executar

Este cenário pode ser executado utilizando os frameworks de automação correspondentes (Cypress JS, Playwright JS).

### Para Cypress JS:

1. Navegue até a pasta raiz do seu projeto Cypress.

2. Abra o Cypress Test Runner: `npx cypress open`

3. Na interface do Cypress, navegue até `cypress/e2e/autenticacao/login-campos-vazios/login_campos_vazios_test.js` e clique para executá-lo.

### Para Playwright JS:

1. Navegue até a pasta raiz do seu projeto Playwright.

2. Execute o teste via linha de comando: `npx playwright test login_campos_vazios_test.js`

## Observações

* Os seletores e URLs são exemplos e devem ser substituídos pelos reais da sua aplicação.

* As mensagens de erro esperadas devem ser ajustadas para corresponder às mensagens exatas exibidas pelo sistema para campos vazios.