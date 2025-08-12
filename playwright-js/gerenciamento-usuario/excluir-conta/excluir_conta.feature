Funcionalidade: Exclusão de Conta

  Como um usuário
  Eu quero excluir minha conta permanentemente
  Para remover meus dados do sistema

  Cenário: Exclusão de conta bem-sucedida
    Dado que estou logado no sistema como "usuario_excluir@exemplo.com"
    E que eu navego para a área de "Configurações da Conta"
    Quando eu inicio o processo de exclusão de conta
    E eu confirmo a exclusão
    Então eu devo ver uma mensagem de sucesso "Sua conta foi excluída."
    E eu devo ser redirecionado para a página de login
    E uma tentativa de login com minhas credenciais deve falhar
