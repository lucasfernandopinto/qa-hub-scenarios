Funcionalidade: Autenticação de Usuário

  Como um usuário
  Eu quero tentar fazer login
  Para ser informado sobre campos obrigatórios

  Cenário: Tentativa de login com campos vazios
    Dado que estou na página de login
    Quando eu clico no botão "Entrar" sem preencher os campos
    Então eu devo ver a mensagem de erro "Campo e-mail é obrigatório."
    E eu devo ver a mensagem de erro "Campo senha é obrigatório."
    E eu devo permanecer na página de login
