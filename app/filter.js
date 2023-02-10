const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => btn.addEventListener("click", filterBook));

function filterBook() {
  const elementBtn = document.getElementById(this.id);
  const category = elementBtn.value;
  let filteredBooks =
    category === "disponivel"
      ? filterByDisponibility()
      : filterByCategory(category);
  showBooks(filteredBooks);
  if (category == "disponivel") {
    const totalValue = calcTotalValue(filteredBooks);
    showTotalValue(totalValue);
  }
}

function filterByCategory(category) {
  return books.filter((book) => book.categoria === category);
}

function filterByDisponibility() {
  return books.filter((book) => book.quantidade > 0);
}

function showTotalValue(totalValue) {
  elementTotalValue.innerHTML = `
  <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${totalValue}</span></p>
  </div>
  `;
}
