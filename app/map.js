function discount(books) {
  const discount = 0.3;
  discountBooks = books.map((book) => {
    return { ...book, preco: book.preco - book.preco * discount };
  });
  return discountBooks;
}
