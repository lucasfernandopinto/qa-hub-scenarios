Funcionalidade: Finalização de Compra

  Como um cliente logado
  Eu quero finalizar minha compra
  Para que eu possa receber meus produtos

  Cenário: Finalizar uma compra com sucesso
    Dado que eu tenho um produto no meu carrinho
    E que eu estou logado no sistema
    Quando eu clico no botão "Finalizar Compra"
    E eu preencho as informações de envio
    E eu preencho as informações de pagamento
    E eu confirmo o pedido
    Então o sistema deve exibir uma página de confirmação de pedido
    E o pedido deve ser registrado no meu histórico de compras
