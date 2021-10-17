class BookList {
    constructor() {
        this.amountOfReadBooks = 0;
        this.amountOfUnreadBooks = 0;
        this.currentBook = null;
        this.lastBookRead = null;
        this.nextBook = null;
        this.allBooks = [];
    }

    countBooks() {
        this.amountOfReadBooks = this.allBooks.reduce((acc, book) => {
            return book.read === true ? acc + 1 : acc;
        }, 0);
        this.amountOfUnreadBooks = this.allBooks.length - this.amountOfReadBooks;
        console.log(
            `Há ${this.amountOfReadBooks} livro(s) lidos e ${this.amountOfUnreadBooks} livro(s) não lidos na lista`
        );
    }

    defineNextBook() {
        const unreadBooks = this.allBooks.filter((book) => !book.read);
        this.nextBook = unreadBooks.length > 1 ? unreadBooks[1] : null;

        this.currentBook === null
            ? console.log('Não há livro a ser lido')
            : console.log(`${this.currentBook.title} é o livro atual`);
        this.nextBook === null
            ? console.log('Não há um próximo livro a ser lido')
            : console.log(`${this.nextBook.title} é o próximo livro da fila`);
    }

    handleRepeatedBooks(book) {
        // Verificação se livro já existe na lista (por titulo)
        if (this.allBooks.some((existingBook) => existingBook.title === book.title)) {
            console.log('Livro já existe na lista!');
        } else {
            return book;

     }
    }

     handleReadBooks(book) {
         // Verificação se livro inserido já foi lido e se livro já existe na lista (por titulo)
          if (this.allBooks.length === 0 && book.read) {
              this.lastBookRead = book
          } else if (this.allBooks.length > 0 && book.read) {
             for (let books of this.allBooks) {
                if (book.readDate > books.readDate) {
                    this.lastBookRead = book;
                    } else {
                     this.lastBookRead = this.lastBookRead;
                    }
                 }
             } else if (this.currentBook === null)
                { this.currentBook = book;
                    }
          
    }

        
    addBook(book) {
            this.handleRepeatedBooks(book);
            this.handleReadBooks(book);
            this.allBooks = [...this.allBooks, book]
            console.log(`O livro ${book.title} foi adicionado com sucesso!`)
            this.rearrangeBooks()
        }

    rearrangeBooks() {
        // função para remanejar os livros após a finalização do livro atual;
            if (this.currentBook !== null && this.currentBook.read) {
            this.lastBookRead = this.currentBook;
            this.currentBook = this.nextBook;
             this.defineNextBook();
            this.countBooks();
        } else {

            this.defineNextBook();
            this.countBooks();}
    }

    finishCurrentBook() {
        if (this.currentBook !== null) {
            this.currentBook.read = true;
            this.currentBook.readDate = new Date();
            console.log(`${this.currentBook.title} finalizado com sucesso`);
            this.rearrangeBooks()
            
        } else {
            console.log('Não há livro sendo lido no momento!');
        }
    }
}

class Book {
    constructor(title, genre, author, read, readDate) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.readDate = read ? new Date(readDate) : 'Livro ainda não lido';
    }
}

let myBookList = new BookList();

let harryPotter = new Book('Harry Potter', 'fantasy', 'J. K. Rowling', false);
let lordOfTheRings = new Book('The Lord of the Rings', 'fantasy', 'J. R. R. Tolkien', false);
let prideAndPrejudice = new Book('Pride and Prejudice', 'romantic novel', 'Jane Austen', false);
let dracula = new Book('Dracula', 'horror novel', 'Bram Stoker', true, "october, 15, 2021");
let dune = new Book('Dune', 'Sci-Fi', 'Frank Herbert', true, "january, 30, 2010")
