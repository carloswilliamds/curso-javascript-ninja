/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var varArray = [10,"approuch", [10,10], null, true]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
const retornaArray = (param1) =>{
    return param1;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornaArray(varArray)[1])

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
const arrayIndice = (param1, param2) =>{
    return param1[[param2]]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var varArray2 = [10,"approuch", [10,10], null, true]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(arrayIndice(varArray2, 4))

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?

const getBook = book =>{
    let books = {
        "Harry Potter":{
            quantidadedePaginas: 280,
            autor: "Jk",
            editora: "WWW"
        },
        "Guerra dos Tronos":{
            quantidadedePaginas: 880,
            autor: "R.R Martin",
            editora: "Planeta"
        },
        "Habbo":{
            quantidadedePaginas: 165,
            autor: "4Queijos",
            editora: "Sulake"
        }
    }

    // Codigo desnecessario
    // let booksArray = Object.keys(books);
    // let haveBook = null;
    // booksArray.forEach(function(itemObj){
    //     if(book === itemObj){
    //         haveBook = itemObj;
    //     }
    // })

    return books[book] ? books[book] : books
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(getBook("Habbo"));

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
let bookname = "Habbo";
console.log( "O livro " + bookname + " tem " + getBook(bookname).quantidadedePaginas);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do ${bookname} Habbo é ${getBook("Habbo").autor}`)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O Livro ${bookname} é da editora ${getBook("Habbo").editora}`)
