function getMenu() {
  console.log(
    "---------------------MENU--------------------------\n" +
      "Digite [1] para ADICIONAR um produto\n" +
      "Digite [2] para LISTAR todos os produtos\n" +
      "Digite [3] para ATUALIZAR dados de um produto\n" +
      "Digite [4] para REMOVER um produto\n" +
      "Digite [5] para BUSCAR um produto\n" +
      "Digite [6] para SAIR!\n"
  );
}

function getSecondaryMenu() {
  console.log("Deseja BUSCAR um produto com base em qual critério? ");
  console.log(
    "---------------------MENU--------------------------\n" +
      "Digite [1] para buscar um produto pelo nome\n" +
      "Digite [2] para buscar um produto por categoria\n" +
      "Digite [3] para buscar um produto por preço\n" +
      "Digite [4] para buscar um produto por estoque\n"
  );
}

module.exports = { getMenu, getSecondaryMenu };
