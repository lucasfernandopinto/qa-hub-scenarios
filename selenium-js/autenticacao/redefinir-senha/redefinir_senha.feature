# autenticacao/refefinir-senha/redefinir-senha.feature

Funcionalidade: Redefinição de Senha

  Como um usuário que esqueceu minha senha
  Eu quero redefinir minha senha
  Para poder acessar novamente minha conta

  Cenário: Redefinição de senha bem-sucedida
    Dado que estou na página de login
    E que eu clico no link "Esqueci minha senha"
    E que eu insiro meu email registrado "usuario_reset@exemplo.com"
    Quando eu clico no botão "Enviar link de redefinição"
    Então eu devo ver uma confirmação de envio de email
    E eu devo receber um email com o link de redefinição de senha
    Quando eu clico no link de redefinição no email
    E eu insiro a nova senha "NovaSenhaSegura123"
    E eu confirmo a nova senha "NovaSenhaSegura123"
    E eu clico no botão "Redefinir Senha"
    Então eu devo ver uma mensagem de sucesso "Senha redefinida com sucesso!"
    E eu devo conseguir fazer login com a nova senha
