const prompt = require("prompt-sync")();
const { getMenu, getSecondaryMenu } = require("./menu");
const {
  createProduct,
  listProduct,
  updateProduct,
  deleteProduct,
  searchProductByName,
  searchProductByCategory,
  searchProductByPrice,
  searchProductByStock,
} = require("./productRegistration");

function searchMenuOption() {
  getMenu();

  let inputOption = prompt("Digite a opção aqui: ");

  switch (inputOption) {
    case "1":
      createProduct();
      searchMenuOption();
      break;
    case "2":
      listProduct();
      searchMenuOption();
      break;
    case "3":
      updateProduct();
      searchMenuOption();
      break;
    case "4":
      deleteProduct();
      searchMenuOption();
      break;
    case "5":
      searchSecondaryMenuOption();
      searchMenuOption();
      break;
    case "6":
      console.log("SAINDO...");
      break;
    default:
      throw new Error(
        "Opção inválida! Só são aceitos os valores 1, 2, 3, 4, 5 e 6."
      );
  }
}

function searchSecondaryMenuOption() {
  getSecondaryMenu();

  const inputOption = prompt("Digite a opção aqui: ");

  switch (inputOption) {
    case "1":
      searchProductByName();
      break;
    case "2":
      searchProductByCategory();
      break;
    case "3":
      searchProductByPrice();
      break;
    case "4":
      searchProductByStock();
      break;
    default:
      console.log(
        "(" +
          inputOption +
          ") ->" +
          "Opção inválida! Só são aceitos os valores: 1, 2, 3 e 4."
      );
  }
}

module.exports = searchMenuOption;
