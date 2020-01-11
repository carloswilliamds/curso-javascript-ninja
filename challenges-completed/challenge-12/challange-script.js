(function(){
/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
const person = {
    name: "Carlos",
    lastname: "William",
    age: 1.73
}
console.log( 'Propriedades de "person":' );

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
console.log(Object.keys(person))

/*
Crie um array vazio chamado `books`.
*/
const books = [];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
books.push({
    name: "Poder do habito",
    pages: 300
})

books.push({
    name: "Rapido e devagar",
    pages: 400
})

books.push({
    name: "A sorte segue a coragem",
    pages: 180
})
console.log( '\nLista de livros:' );

/*
Mostre no console todos os livros.
*/
for(prop in books){
    console.log(books[prop])
}

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
console.log(books.pop())

console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
for( prop in books){
    console.log(books[prop])
}

/*
Converta os objetos que ficaram em `books` para strings.
*/
// ?
console.log( '\nLivros em formato string:' );

/*
Mostre os livros nesse formato no console:
*/

for( prop in books){
    console.log(books[prop] = JSON.stringify(books[prop]))
}


/*
Converta os livros novamente para objeto.
*/
console.log( '\nAgora os livros são objetos novamente:' );
for (prop in books)[
    console.log(books[prop] = JSON.parse(books[prop]))
]
/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
for (var obj = 0; obj < books.length; obj++){
        for(prop in books[obj] ){
            console.log(`${prop}: ${books[obj][prop]}`)
        }
}

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
let myName = ["C","A","R","L","O","S"]
console.log( '\nMeu nome é:' );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log(myName.join(""))

console.log( '\nMeu nome invertido é:' );
/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
console.log(myName.reverse().join(""))

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
console.log(myName.sort().join(""))

})()

let obj = {x:1, y:2};

let obj2 = Object.create(obj);
obj2.a = 10;
console.log(obj2.x)
console.log(obj2.hasOwnProperty("x"))

for(prop in obj2){
   if(obj2.hasOwnProperty(prop)){
       console.log(prop)
   }
}

console.log(obj.isPrototypeOf(obj2))