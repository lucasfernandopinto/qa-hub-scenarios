# Cenário: Login com Credenciais Inválidas

## Descrição

Este cenário de teste automatizado verifica o fluxo de redefinição de senha para um usuário existente. O objetivo é garantir que o usuário possa solicitar um link de redefinição, receber o e-mail e, através do link, definir uma nova senha com sucesso.

## Pré-requisitos

* Ambiente de teste configurado e acessível (URL base: `https://www.exemplo.com.br`).

* Um usuário de teste válido e existente no sistema (ex: usuario_reset@exemplo.com)

* Acesso a um serviço de e-mail que possa ser inspecionado para obter o link de redefinição (pode ser simulado em testes de automação).


## Comportamento Esperado

Ao executar este cenário, espera-se que:

1. O usuário navegue até a página de "Esqueci minha senha" ou similar.

2. O e-mail do usuário seja inserido e a solicitação de redefinição seja enviada.

3. O sistema confirme o envio do e-mail.

4. Um e-mail contendo um link de redefinição de senha seja recebido.

5. Ao clicar no link de redefinição, o usuário seja direcionado para uma página onde possa definir uma nova senha.

6. A nova senha seja definida com sucesso.

7. O usuário possa fazer login com a nova senha.

## Como Executar

Este cenário pode ser executado utilizando os frameworks de automação correspondentes (Cypress JS, Playwright JS).

### Para Cypress JS:

1. Navegue até a pasta raiz do seu projeto Cypress.

2. Abra o Cypress Test Runner: `npx cypress open`

3. Na interface do Cypress, navegue até `cypress/e2e/autenticacao/resetar-senha/resetar-senha_test.js` e clique para executá-lo.

### Para Playwright JS:

1. Navegue até a pasta raiz do seu projeto Playwright.

2. Execute o teste via linha de comando: `npx playwright test resetar-senha_test.js`

## Observações

* A simulação de recebimento de e-mail é um ponto crucial e pode exigir mocks ou integrações com serviços de e-mail de teste.

* A URL (`https://www.exemplo.com.br/login`) deve ser alterada para a URL de login do ambiente de teste.

* Os seletores e URLs são exemplos e devem ser substituídos pelos reais da sua aplicação.