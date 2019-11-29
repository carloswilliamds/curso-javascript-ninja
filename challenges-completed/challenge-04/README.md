# Desafio da semana #4

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
