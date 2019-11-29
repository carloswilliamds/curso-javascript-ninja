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


```js
// Declarar uma variável qualquer, que receba um objeto vazio.
let casa = {}

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
let pessoa = {
    nome: "Carlos",
    sobrenome: "Dos Santos",
    sexo: "masculino",
    idade: 22,
    altura: 1.73,
    peso: 58,
    andando: false,
    caminhouQuantosMetros: 0
}

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
pessoa.fazerAniversario = function(){
    this.idade += 1;
}

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
pessoa.andar = function(metros){
    this.andando = true;
    this.caminhouQuantosMetros += metros;
}


/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
pessoa.parar = function(){
    this.andando = false;
}

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/

pessoa.nomeCompleto = function(){
    return `Olá meu nome é ${this.nome} ${this.sobrenome}`
}


/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
pessoa.mostrarIdade = function(){
    return `Olá eu tenho ${pessoa.idade} anos`
}


/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
pessoa.mostrarPeso = function(){
    return `Eu peso só o pó da rabiola ou ${pessoa.peso}kg`
}


/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
pessoa.mostrarAltura = function(){
    return `Minha altura é ${pessoa.altura}`
}


/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.nomeCompleto()) // Olá meu nome é Carlos Dos Santos

/*
Qual a idade da pessoa (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.mostrarIdade()) // Olá eu tenho 22 anos

/*
Qual o peso da pessoa (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.mostrarPeso()) // Eu peso só o pó da rabiola ou 58kg

/*
Qual a altura da pessoa (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.mostrarAltura()) // Minha altura é 1.73

/*
Faça a `pessoa` fazer 3 aniversários.
*/
pessoa.fazerAniversario()
pessoa.fazerAniversario()
pessoa.fazerAniversario()



/*
Quantos anos a `pessoa` tem agora (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
console.log(pessoa.idade) // 25


/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
console.log(pessoa.andar(10))
console.log(pessoa.andar(20))
console.log(pessoa.andar(50))


/*
A pessoa ainda está andando (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.andando) // true

/*
Se a pessoa ainda está andando, faça-a parar.
*/
console.log(pessoa.parar())

/*
E agora: a pessoa ainda está andando (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
console.log(pessoa.andando)


/*
Quantos metros a pessoa andou (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
console.log(pessoa.caminhouQuantosMetros) // 80


/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/

pessoa.apresentacao = function(){
    let sexo, idade, metros;
    
    if(pessoa.sexo === "masculino"){
        sexo = "o"
    } else{
        sexo = "a"
    }

    if(pessoa.idade > 1){
        idade = "anos"
    } else{
        idade = "ano"
    }

    if(pessoa.caminhouQuantosMetros > 1){
        metros = "metros"
    } else{
        metros = "metro"
    }

    return `Olá eu sou ${sexo} ${pessoa.nome} ${pessoa.sobrenome} tenho ${pessoa.idade} ${idade}, ${pessoa.altura}, meu peso é ${pessoa.peso}kg e, só hoje, eu caminhei ${pessoa.caminhouQuantosMetros} ${metros}` 
}

// Agora, apresente-se ;)
console.log(pessoa.apresentacao())
```

## Challange 4

```js

/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/

let isTruthy = function(param1){
    return !!param1 
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log(isTruthy(NaN), isTruthy(""), isTruthy(undefined), isTruthy(0), isTruthy(-0), isTruthy(false))

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log(isTruthy([false,false]), isTruthy(-10) ,isTruthy(" "), isTruthy(10), isTruthy({}), isTruthy([]), isTruthy(function(){}), isTruthy(()=>{}), isTruthy(isTruthy), isTruthy(true))

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
let carro = {
    marca: "Gol",
    modelo: "Fusquinha",
    placa: "XYZ-0000",
    ano: 2014,
    cor: "rosa",
    quantasPortas: 3,
    assentos: 5,
    quantidadePessoas: 0,
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = newCor =>{
    carro.cor  = newCor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = () => {
    return carro.cor
}


/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = () => {
    return carro.modelo
}


/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = () => {
    return carro.marca
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = () => {
    return `Esse carro é um ${carro.obterMarca()} ${carro.obterModelo()}`
}


/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

// Versão do Desafio

carro.adicioanrPessoas = (numeroPessoas) =>{
    
    let totalPessoas =  carro.quantidadePessoas + numeroPessoas;
    let pluralOuSingularPessoas = carro.quantidadePessoas > 1 ? "pessoas" : "pessoa";
    let quantasPessoasCabem = carro.assentos - carro.quantidadePessoas;

    if(carro.quantidadePessoas === carro.assentos && totalPessoas >= carro.assentos){
        return "O carro está lotado!"
    }

    if(totalPessoas > carro.assentos){
        return `só cabem mais ${quantasPessoasCabem} no carro ${pluralOuSingularPessoas}`
    }

    carro.quantidadePessoas += numeroPessoas;
    return `Já temos ${carro.quantidadePessoas} ${pluralOuSingularPessoas}`;

}

// Versão extra
carro.entrar = (novo) => {
    let assentosLivres = carro.assentos - carro.quantidadePessoas;

    if(assentosLivres === 0 && novo > 0){
        return "o carro já está lotado";
    }
     
    if(assentosLivres - novo < 0){
        return `só cabem mais ${assentosLivres} no carro`
    }
    
    if(carro.quantidadePessoas + novo < 0){ 
        return "nao pode sair mais pessoas do que tem dentro do carro seu doido"
    }

        carro.quantidadePessoas += novo
        assentosLivres = carro.assentos - carro.quantidadePessoas;

    if(assentosLivres === carro.assentos){
        return `Carro vazio temos ${assentosLivres} ${assentosLivres > 1 ? "vagas" : "vaga"}`;
    }
    
    return `Já temos ${carro.quantidadePessoas} ${carro.quantidadePessoas > 1 ? "pessoas" : "pessoa"}`;

}




/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro
*/

console.log(carro.obterCor()) // rosa

// Mude a cor do carro para vermelho.
console.log(carro.mudarCor("vermelho")) // vermelho

// E agora, qual a cor do carro
console.log(carro.obterCor())

// Mude a cor do carro para verde musgo.
console.log(carro.mudarCor("verde musgo"))

// E agora, qual a cor do carro
console.log(carro.obterCor()) // verde musgo

// Qual a marca e modelo do carro
console.log(carro.obterMarcaModelo())

// Adicione 2 pessoas no carro.
console.log(carro.entrar(2))

// Adicione mais 4 pessoas no carro.
console.log(carro.entrar(4))

// Faça o carro encher.
console.log(carro.entrar(3))

// Tire 4 pessoas do carro.
console.log(carro.quantidadePessoas -= 4)

// Adicione 10 pessoas no carro.
console.log(carro.entrar(10))

// Quantas pessoas temos no carro
console.log(carro.quantidadePessoas)

```
