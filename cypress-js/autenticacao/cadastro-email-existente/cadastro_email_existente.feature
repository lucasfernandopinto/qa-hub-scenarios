# autenticacao/cadastro-email-existente/cadastro-email-existente.feature

Funcionalidade: Cadastro de Usuário Com E-mail Existente

  Como um novo usuário
  Eu quero me cadastrar no sistema
  Para criar uma conta única

  Cenário: Tentativa de cadastro com email já existente
    Dado que estou na página de cadastro
    E que eu insiro um nome "Novo Usuário"
    E que eu insiro um email já cadastrado "email_existente@exemplo.com"
    E que eu insiro uma senha "SenhaNova123"
    Quando eu clico no botão "Cadastrar"
    Então eu devo ver a mensagem de erro "Este email já está em uso."
    E minha conta não deve ser criada
    E eu devo permanecer na página de cadastro