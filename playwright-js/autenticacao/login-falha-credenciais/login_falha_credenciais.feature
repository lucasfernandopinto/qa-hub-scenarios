# autenticacao/login-falha-credenciais/login-falha-credenciais.feature

Funcionalidade: Autenticação de Usuário

  Como um usuário não registrado ou com credenciais incorretas
  Eu quero tentar fazer login no sistema
  Para ser informado sobre o erro e não ter acesso indevido

  Cenário: Tentativa de login com credenciais inválidas
    Dado que estou na página de login
    E que eu insiro um email não registrado "naoexiste@exemplo.com"
    E que eu insiro uma senha incorreta "senhaErrada123"
    Quando eu clico no botão "Entrar"
    Então eu devo ver a mensagem de erro "Email ou senha inválidos."
    E eu devo permanecer na página de login

