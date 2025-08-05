# autenticacao/deslogar-conta/deslogar-conta.feature

Funcionalidade: Desconexão de Usuário

  Como um usuário logado
  Eu quero deslogar da minha conta
  Para encerrar minha sessão de forma segura

  Cenário: Deslogar da conta com sucesso
    Dado que estou logado no sistema como "usuario@exemplo.com"
    Quando eu clico no botão "Sair"
    Então eu devo ser redirecionado para a página de login
    E eu não devo ter acesso a áreas restritas sem um novo login