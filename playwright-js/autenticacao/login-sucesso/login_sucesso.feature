# autenticacao/login-sucesso/login_sucesso.feature

Funcionalidade: Autenticação de Usuário

  Como um usuário registrado
  Eu quero fazer login no sistema
  Para acessar minhas funcionalidades

  Cenário: Login com credenciais válidas
    Dado que estou na página de login
    E que eu insiro um email válido "usuario@exemplo.com"
    E que eu insiro uma senha válida "SenhaSegura123"
    Quando eu clico no botão "Entrar"
    Então eu devo ser redirecionado para a página do "Dashboard"
    E eu devo ver a mensagem de boas-vindas "Bem-vindo"
