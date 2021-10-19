Santander Coders - Módulo 3
Atividade proposta no curso Santander Coders | Web Full-Stack Degree realizado na Let's Code. Exercício de fixação em JavaScript referente a Programação Orientada a Objeto.

Atividade realizada por: Cássia Martinelli, João Paulo, Leonardo Lins e Rafael Oliveira

The Reading List
Uma lista de livros orientada a objeto

A aplicação
Criada uma classe BookList

Criada outra classe Book

BookLists possuem as seguintes propriedades:

Número de livros marcados como lidos amountOfReadBooks
Número de livros marcados como ainda não lidos amountOfUnreadBooks
Uma referência ao próximo livro a ser lido (book object) nextBook
Uma referência ao livro que está sendo lido no momento (book object) currentBook
Uma referência ao último livro que foi lido (book object) lastBookRead
Uma array com todos os livros (Books) allBooks
Cada Booklist possui os seguintes métodos:

.countBooks() - privado
Conta quantidade de livros lidos e não lidos
.defineNextBook() - privado
Determina qual será o próximo a ser lido
handleReadBooks(book) - privado
Verifica se livro já foi lido e data de leitura e, caso necessário, atualiza o último livro que foi lido
.defineCurrentBook(book) - privado
Atualiza livro que está sendo lido no momento
.rearrangeBooks() - privado
Remaneja os livros após finalização de um currentBook
.validateBook(book) - privado
Verifica se o livro book cumpre os requisitos para ser inserido na lista de livros
.addBook(book)
Adiciona o book na BookList
.finishCurrentBook()
Marca o currentBook como lido e atualiza sua data de leitura readDate
Remaneja os livros lastBookRead, currentBook e nextBook chamando o método .rearrangeBooks()
Cada Book possui as seguintes propriedades:

Título title
Gênero genre
Autor author
Livro lido read (true or false)
Data de leitura readDate, em branco para livros não lidos, e com data de leitura para livros lidos
Cada Book possui o seguinte método:

.setDate(date)
Verifica se foi inserida uma data de leitura readDate e, caso necessário, atualiza com a data atual
Usando a aplicação
Criar pelos menos uma lista de livros
let myBookList = new BookList()
Criar alguns livros, lidos ou não lidos (a data de leitura deve ser inserida no formato 'month, day, year')
let harryPotter = new Book('Harry Potter', 'fantasy', 'J. K. Rowling', false)
let lordOfTheRings = new Book('The Lord of the Rings', 'fantasy', 'J. R. R. Tolkien', false)
let prideAndPrejudice = new Book('Pride and Prejudice', 'romantic novel', 'Jane Austen', false)
let dracula = new Book('Dracula', 'horror novel', 'Bram Stoker', true, 'october, 15, 2021')
let dune = new Book('Dune', 'Sci-Fi', 'Frank Herbert', true, 'january, 30, 2010')
let cleanCode = new Book('Clean Code', 'technology', 'Robert C. Martin', true)
Adicionar livros à lista
myBookList.addBook(book)
Finalizar o livro que está sendo lido
myBookList.finishCurrentBook()
