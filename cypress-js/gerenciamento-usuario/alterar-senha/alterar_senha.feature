Funcionalidade: Alteração de Senha

  Como um usuário logado
  Eu quero alterar minha senha
  Para manter minha conta segura

  Cenário: Alteração de senha bem-sucedida
    Dado que estou logado no sistema como "usuario@exemplo.com"
    E que eu navego para a área de "Segurança da Conta"
    Quando eu insiro minha senha atual "SenhaSegura123"
    E eu insiro a nova senha "NovaSenhaSegura456"
    E eu confirmo a nova senha "NovaSenhaSegura456"
    E eu clico no botão "Salvar Senha"
    Então eu devo ver uma mensagem de sucesso "Senha alterada com sucesso!"
    E eu devo conseguir fazer login com a nova senha
