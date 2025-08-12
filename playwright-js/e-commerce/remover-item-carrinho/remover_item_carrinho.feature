Funcionalidade: Carrinho de Compras

  Como um cliente
  Eu quero remover um produto do meu carrinho
  Para que eu possa ajustar minha compra

  Cenário: Remover um produto do carrinho com sucesso
    Dado que eu tenho um produto no meu carrinho
    Quando eu navego para a página do carrinho
    E eu clico no botão "Remover" do produto
    Então o produto não deve mais estar na lista
    E o total da compra deve ser recalculado
