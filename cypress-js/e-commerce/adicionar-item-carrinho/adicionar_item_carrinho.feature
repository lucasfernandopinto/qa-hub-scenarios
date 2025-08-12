Funcionalidade: Carrinho de Compras

  Como um cliente
  Eu quero adicionar um produto ao meu carrinho
  Para que eu possa comprá-lo

  Cenário: Adicionar um produto ao carrinho com sucesso
    Dado que eu navego para a página de um produto
    E que o produto está disponível em estoque
    Quando eu clico no botão "Adicionar ao Carrinho"
    Então o sistema deve exibir uma mensagem de confirmação
    E o item deve ser exibido no meu carrinho de compras
