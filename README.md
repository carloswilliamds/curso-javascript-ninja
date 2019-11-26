# Curso Javascript Ninja
Carga Horaria: 42h<br />
Ano: 2015<br />
[https://www.udemy.com/course/curso-javascript-ninja/](https://www.udemy.com/course/curso-javascript-ninja/)<br />


## Challanges

## Challange 01

```js

// Declarar uma variável chamada `myvar`, sem valor.
var myvar;

// Após declarada, atribua o valor 10 à variável `myvar`.
myvar = 10;

// Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.
var soma = 15 + 8;

// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.
soma += 1;

// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.
soma *= 3;

// Qual é o valor da variável `soma` até aqui?
console.log(soma) // 72

// Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.
var souninja = true;

// Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.
var comida = ["arroz", "feijão", "ovo"]

// Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.
console.log(comida[1])

// Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo).
console.log(soma === myvar) // false

// Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.
console.log(myvar <= soma)


// Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.
function divisao(number1, numberDivisor){

        return number1 / numberDivisor;

}

// Invoque a função criada acima, passando os parâmetros 10 e 2.
console.log(divisao(10,2))


```

### Script and annotations

```

console.log(divisao(10,2))
```


## Challange 02 


Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js

// # Desafio da semana #2

// Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:


// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function somarDois(param1, param2){
    return param1 + param2
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var valorsoma = somarDois(10,5) + 5;

// Qual o valor atualizado dessa variável?
 console.log(valorsoma) // 20

// Declare uma nova variável, sem valor.
var ok;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function atribuiValor(valor){
    ok = valor;
    return "O valor da variável agora é " + valor;
}

// Invoque a função criada acima.
console.log(atribuiValor("Hora do show!"))

// Qual o retorno da função? (Use comentários de bloco).
/*
    O valor da variável agora é Hora do show!
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiplicaTres(param1, param2, param3){
    console.log(param1, param2, param3)
    if(param1 === undefined || param2 === undefined || param3 === undefined){
        return "Preencha todos os valores corretamente!"
    } 
        return param1 * param2 * param3 + 2;
}


// Invoque a função criada acima, passando só dois números como argumento.
console.log(multiplicaTres(10, 10))

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// undefined

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log(multiplicaTres(10, 10, 10)) // 1002
console.log(multiplicaTres(10)) // "Preencha todos os valores corretamente!"

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 1002

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function calculos(param1, param2, param3){
    if(param1 !== undefined && param2 === undefined && param3 == undefined){
        return param1;
    } else if(param1 !== undefined && param2 !== undefined && param3 === undefined){
        return param1 + param2;
    } else if( param1 !== undefined && param2 !== undefined && param3 !== undefined){
        return (param1 + param2) / param3
    } else if(param1 === undefined && param2 === undefined && param3 === undefined){
        return false;
    } else {
        return null;
    }
}


// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log(calculos(10)) // 10
console.log(calculos(10, 10)) // 20
console.log(calculos(10, 10, 4)) // 5
console.log(calculos()) // false
console.log(calculos(2, undefined, 10)) // null
```

## Challange 03
