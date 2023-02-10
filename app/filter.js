const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => btn.addEventListener("click", filterBook));

function filterBook() {
  const elementBtn = document.getElementById(this.id);
  const category = elementBtn.value;
  let filteredBooks = books.filter((book) => book.categoria === category);
  showBooks(filteredBooks);
}
