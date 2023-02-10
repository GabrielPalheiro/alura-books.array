const btnPrice = document.getElementById("btnOrdenarPorPreco");
btnPrice.addEventListener("click", sortByPriceBooks);

function sortByPriceBooks() {
  let sortedBooks = books.sort((a, b) => a.preco - b.preco);
  showBooks(sortedBooks);
}
