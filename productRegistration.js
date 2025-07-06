const prompt = require("prompt-sync")();

let products = [];

function createProduct() {
  let inputName = prompt("Informe o nome do produto: ");
  let inputCategory = prompt("Informe a categoria do produto: ");
  let inputPrice = prompt("Informe o preço do produto: ");
  let inputStock = prompt("Informe a quantidade do produto em estoque: ");

  let newProduct = {
    id: Date.now().toString(),
    name: inputName,
    category: inputCategory,
    price: inputPrice,
    stock: inputStock,
  };

  products.push(newProduct);

  console.log("PRODUTO CADASTRADO COM SUCESSO!");
}

function listProduct() {
  console.log("LISTA DE PRODUTOS: ");

  products.forEach((product) => {
    console.log(
      `Id: ${product.id}, nome: ${product.name}, categoria: ${product.category}, preço: ${product.price}, quantidade em estoque: ${product.stock}`
    );
  });
}

function updateProduct() {
  let updateId = prompt("Informe o id do produto que deseja atualizar: ");

  let index = products.findIndex((product) => product.id === updateId);

  if (index !== -1) {
    console.log(
      "Digite enter para continuar, ou seja, se não quiser alterar algum valor!"
    );

    let inputName = prompt("Informe nome do produto: ");
    let inputCategory = prompt("Informe a categoria do produto: ");
    let inputPrice = prompt("Informe o preço do produto: ");
    let inputStock = prompt("Informe a quantidade em estoque do produto: ");

    products[index].name = inputName || products[index].name;
    products[index].category = inputCategory || products[index].category;
    products[index].price = inputPrice || products[index].price;
    products[index].stock = inputStock || products[index].stock;

    console.log(
      `Os dados do produto com o id: ${index} foi atualizado com sucesso!`
    );

    return;
  }
  console.log(
    `Não foi possível atualizar, pois o id informado não pertence a nenhum produto!`
  );
}

function deleteProduct() {
  let deleteId = prompt("Informe o id do produto que deseja remover: ");

  let index = products.findIndex((product) => product.id === deleteId);

  if (index !== -1) {
    let deletedProduct = products[index].name;
    products.splice(index, 1);
    console.log(`O produto ${deletedProduct} foi removido com sucesso!`);
    return;
  }
  console.log(
    `Não foi possível remover, pois o id informado não pertence a nenhum produto!`
  );
}

function searchProductByName() {
  let searchName = prompt("Informe o nome do produto: ").toLowerCase();

  let resultList = products.filter((product) =>
    product.name.toLowerCase().includes(searchName)
  );

  console.log("RESULTADO DA BUSCA POR NOME: ");

  displaySearchResult(resultList, searchName);
}

function searchProductByCategory() {
  let searchCategory = prompt("Informe a categoria do produto: ").toLowerCase();

  let resultList = products.filter((product) =>
    product.category.toLowerCase().includes(searchCategory)
  );

  console.log("RESULTADO DA BUSCA POR CATEGORIA: ");

  displaySearchResult(resultList, searchCategory);
}

function searchProductByPrice() {
  let searchPrice = prompt("Informe o preço do produto: ");

  let resultList = products.filter((product) =>
    product.price.toLowerCase().includes(searchPrice)
  );

  console.log("RESULTADO DA BUSCA POR PREÇO: ");

  displaySearchResult(resultList, searchPrice);
}

function searchProductByStock() {
  let searchStock = prompt("Informe a quantidade em estoque do produto: ");

  let resultList = products.filter((product) =>
    product.stock.toLowerCase().includes(searchStock)
  );

  console.log("RESULTADO DA BUSCA PELA QUANTIDADE EM ESTOQUE: ");

  displaySearchResult(resultList, searchStock);
}

function displaySearchResult(resultList, search) {
  if (resultList.length > 0) {
    resultList.forEach((product) => {
      console.log(
        `Id: ${product.id}, nome: ${product.name}, categoria: ${product.category}, preço: ${product.price}, quantidade em estoque: ${product.stock}`
      );
    });
    return;
  }
  console.log(
    `Nenhum produto foi encontrado com base na busca informada (${search.toUpperCase()}).`
  );
}

module.exports = {
  createProduct,
  listProduct,
  updateProduct,
  deleteProduct,
  searchProductByName,
  searchProductByCategory,
  searchProductByPrice,
  searchProductByStock,
};
