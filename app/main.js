let books = [];
const endpointAPI =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";

getBooks();

async function getBooks() {
  const res = await fetch(endpointAPI);
  books = await res.json();
  let discountBooks = discount(books);
  // console.table(books);

  showBooks(discountBooks);
}
