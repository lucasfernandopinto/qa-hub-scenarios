# Cenário: Cadastro com E-mail Já Existente

## Descrição

Este cenário de teste automatizado verifica o comportamento do sistema quando um usuário tenta se cadastrar utilizando um endereço de e-mail que já está registrado na base de dados. O objetivo é garantir que o sistema identifique o conflito, exiba uma mensagem de erro clara e não permita a criação de contas duplicadas.

## Pré-requisitos

* Ambiente de teste configurado e acessível (URL base: `https://www.exemplo.com.br`).
* Um e-mail de teste que já esteja previamente cadastrado no sistema (ex: `email_existente@exemplo.com`).

## Comportamento Esperado

Ao executar este cenário, espera-se que:

1.  A página de cadastro seja carregada corretamente.
2.  Os campos de nome, e-mail e senha sejam preenchidos, sendo o e-mail um já existente.
3.  O botão de cadastro seja clicado.
4.  O sistema identifique que o e-mail já está em uso.
5.  Uma mensagem de erro clara e específica seja exibida ao usuário (ex: "E-mail já cadastrado", "Este e-mail já está em uso").
6.  A conta não seja criada e o usuário permaneça na página de cadastro ou seja redirecionado para a mesma página.

## Como Executar

Este cenário pode ser executado utilizando os frameworks de automação correspondentes (Cypress JS, Playwright JS).

### Para Cypress JS:

1.  Navegue até a pasta raiz do seu projeto Cypress.

2.  Abra o Cypress Test Runner: `npx cypress open`

3.  Na interface do Cypress, navegue até `cypress/e2e/autenticacao/cadastro-email-existente/cadastro_email_existente_test.js` e clique para executá-lo.

### Para Playwright JS:

1.  Navegue até a pasta raiz do seu projeto Playwright.

2.  Execute o teste via linha de comando: `npx playwright test cadastro_email_existente_test.js`

## Observações

* Os seletores e URLs são exemplos e devem ser substituídos pelos reais da sua aplicação.
* A mensagem de erro esperada deve ser ajustada para corresponder à mensagem exata exibida pelo sistema.
* Este teste pressupõe que o e-mail `email_existente@exemplo.com` já existe no banco de dados antes da execução.