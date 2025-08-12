Funcionalidade: Gerenciamento de Perfil

  Como um usuário logado
  Eu quero visualizar minhas informações
  Para confirmar que meus dados estão corretos

  Cenário: Visualização de informações de perfil bem-sucedida
    Dado que estou logado no sistema como "usuario@exemplo.com"
    Quando eu navego para a página de "Perfil"
    Então eu devo ver meu nome de usuário "Usuário Exemplo"
    E eu devo ver meu email "usuario@exemplo.com"
    E eu devo ver outras informações relevantes do meu perfil
