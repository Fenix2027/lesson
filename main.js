const favoriteBooks = [
  {
    id: 1,
    title: 'Head First JavaScript Programming',
    author: 'Eric Freeman',
    price: 29.99,
    genre: 'Programming',
  },
  {
    id: 2,
    title: 'You Don’t Know JS',
    author: 'Kyle Simpson',
    price: 39.99,
    genre: 'Programming',
  },
  {
    id: 3,
    title: 'JavaScript: The Definitive Guide',
    author: 'David Flanagan',
    price: 49.99,
    genre: 'Programming',
  },
  {
    id: 4,
    title: 'Lord of the Rings',
    author: 'J.R.R. Tolkien',
    price: 29.99,
    genre: 'Fantasy',
  },
  {
    id: 5,
    title: 'The Witcher',
    author: 'Andrzej Sapkowski',
    price: 19.99,
    genre: 'Fantasy',
  },
]

const getBooksAutors = (books) => {

    const result = [];
    for (let i = 0; i < books.length; i++) {
        result.push(books[i].author);
    }
    return result;
}

 const authors = getBooksAutors(favoriteBooks);
 console.log(authors);
 

const getBooksName = (books) => {
    const as = [];
    for (let i = 0; i < books.length; i++) {
        as.push(books[i].title);
    }
    return as ;
}
const titles = getBooksName(favoriteBooks)
console.log(titles);
