Funcionalidade: Gerenciamento de Perfil

  Como um usuário logado
  Eu quero atualizar minhas informações de perfil
  Para manter meus dados pessoais corretos

  Cenário: Atualização de nome de perfil com sucesso
    Dado que estou logado no sistema como "usuario@exemplo.com"
    E que eu navego para a página de "Configurações de Perfil"
    Quando eu altero meu nome para "Usuário Atualizado"
    E eu clico no botão "Salvar"
    Então eu devo ver uma mensagem de sucesso "Perfil atualizado com sucesso."
    E meu nome deve ser exibido como "Usuário Atualizado" na página de perfil
