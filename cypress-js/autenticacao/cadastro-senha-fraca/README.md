# Cenário: Cadastro com Senha Fraca/Inválida

## Descrição

Este cenário de teste automatizado verifica o comportamento do sistema quando um usuário tenta se cadastrar utilizando uma senha que não atende aos requisitos de segurança definidos (ex: muito curta, sem caracteres especiais, sem números, etc.). O objetivo é garantir que o sistema rejeite a senha, exiba uma mensagem de erro clara e não permita a criação da conta.

## Pré-requisitos

* Ambiente de teste configurado e acessível (URL base: `https://www.exemplo.com.br`).
* Conhecimento da política de senha do sistema (ex: mínimo 8 caracteres, 1 maiúscula, 1 número, 1 especial).

## Comportamento Esperado

Ao executar este cenário, espera-se que:

1. A página de cadastro seja carregada corretamente.

2. Os campos de nome, e-mail e senha sejam preenchidos, sendo a senha uma que não atenda à política.

3. O botão de cadastro seja clicado.

4. O sistema identifique que a senha é inválida.

5. Uma mensagem de erro clara e específica sobre a política de senha seja exibida ao usuário (ex: "Senha muito curta", "Senha deve conter ao menos um número").

6. A conta não seja criada e o usuário permaneça na página de cadastro.

## Como Executar

Este cenário pode ser executado utilizando os frameworks de automação correspondentes (Cypress JS, Playwright JS).

### Para Cypress JS:

1. Navegue até a pasta raiz do seu projeto Cypress.

2. Abra o Cypress Test Runner: `npx cypress open`

3. Na interface do Cypress, navegue até `cypress/e2e/autenticacao/cadastro-senha-fraca/cadastro_senha_fraca_test.js` e clique para executá-lo.

### Para Playwright JS:

1. Navegue até a pasta raiz do seu projeto Playwright.

2. Execute o teste via linha de comando: `npx playwright test cadastro_senha_fraca_test.js`

## Observações

* Os seletores e URLs são exemplos e devem ser substituídos pelos reais da sua aplicação.
* A senha "fraca" utilizada no teste (`123456`) deve ser ajustada para violar a política de senha específica do seu sistema.
* A mensagem de erro esperada deve ser ajustada para corresponder à mensagem exata exibida pelo sistema.