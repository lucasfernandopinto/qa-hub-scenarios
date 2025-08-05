Funcionalidade: Cadastro de Usuário

  Como um novo usuário
  Eu quero me cadastrar no sistema
  Para criar uma conta com uma senha segura

  Cenário: Tentativa de cadastro com senha fraca
    Dado que estou na página de cadastro
    E que eu insiro um nome "Usuário Fraco"
    E que eu insiro um email válido "usuario.fraco@exemplo.com"
    E que eu insiro uma senha fraca "123456"
    Quando eu clico no botão "Cadastrar"
    Então eu devo ver a mensagem de erro "A senha deve ter no mínimo 8 caracteres, incluindo letras maiúsculas, minúsculas e números."
    E minha conta não deve ser criada
    E eu devo permanecer na página de cadastro
