/*
Crie um array com 5 items (tipos variados).
*/
let myArray = [10,20,30,40,50]
console.log(myArray)
/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
const addItem = (array, item) =>{
   array.push(item)
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
 addItem(myArray,["senta", "levanta", "mexe"])
console.log(myArray)

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log(`O segundo elemento do segundo array é ${myArray[myArray.length - 1][1]}`)

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O primeiro array tem ${myArray.length} itens.`)

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O segundo array tem ${myArray[myArray.length -1].length} itens.`)

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
const numerosPares = (incial, fim) => { 
    let num = incial;
    let max = fim;
    let numPares = [];
    while(num <= max){
       num % 2 === 0 ? numPares.push(num) : ""
        num++
    }
    return numPares

}

console.log(numerosPares(10,20))

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
const numerosImpares = () =>{
    let num = 10;
    let max = 20;
    let numImpares = []
    while(num <= max){
       num % 2 ? numImpares.push(num) : ""
        num++
    }

    return numImpares;
}

console.log(numerosImpares())

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
const numerosParesFor = (incial, fim) => { 
    let num = incial;
    let max = fim;
    let numPares = [];
    for(num; num <= max; num++){
        num % 2 === 0 ? numPares.push(num) : ""
    }
    return numPares

}
console.log(numerosParesFor(100,120))

console.log( 'Números ímpares entre 111 e 125:' );
const numerosImparesFor = (incial, fim) => { 
    let num = incial;
    let max = fim;
    let numPares = [];
    for(num; num <= max; num++){
        num % 2 ? numPares.push(num) : ""
    }
    return numPares

}

console.log(numerosImparesFor(111,125))