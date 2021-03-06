/*
1. Envolva todo o conteúdo desse desafio em uma IIFE.
2. Adicione a diretiva 'use strict';
3. Crie um arquivo index.html e adicione esse script à ele.
*/

/*
Crie uma função chamada `cleanCPF`, que receba um CPF por parâmetro, e
retorne esse CPF limpo (somente os números).
Usando os CPFs abaixo, mostre no console que a limpeza funciona para todos
eles! Use um console.log para cada CPF.
- "049-214 3421-1"
- "210.458.522-05"
- "735 500 794 - 22"
- "101.123-131x32"
*/
console.log( 'Limpando CPFs:' );
const cleanCPF =  (cpf) =>{
    const matchCPF = /(\d{3})[\s\.\-](\d{3})[\s\.\-](\d{3,4})[\s\.\-x]+(\d{1,2})/

    return cpf.replace(matchCPF, (regex, p1, p2 ,p3 ,p4) =>{
        return p1 + p2 + p3 + p4
    })
}

console.log("049-214 3421-1",cleanCPF("049-214 3421-1"));
console.log("210.458.522-05",cleanCPF("210.458.522-05"));
console.log("735 500 794 - 22",cleanCPF("735 500 794 - 22"));
console.log("101.123-131x32",cleanCPF("101.123-131x32"));

let myCPF = "48196102879"

const ValidarDigito = (cpf, segundoDigito) =>{
    let arrayCPF = null;
    
    // verifica se tem 9  ou 11 digitos 
    if(cpf.length === 11){
        arrayCPF = cpf.slice(0,9).split("");
    } else if(cpf.length === 9) {
        arrayCPF = cpf.split("");
    }
    
    // Verifica se o segndo digito foi passado, se foi ele inclui no array
    if(segundoDigito){
        arrayCPF.push(segundoDigito)
    }

    // define se a validacao vai ser do primeiro ou segundo digito
    const numbersValidateFirst = segundoDigito ? 11 : 10;

    let maxValidate = numbersValidateFirst;
    let minValidate = 2;
    let sumValueFirstDigit = 0;

    for(var i = 0; i <= numbersValidateFirst - minValidate; i++){
        console.log(arrayCPF[i])
        sumValueFirstDigit += arrayCPF[i] * maxValidate;
        maxValidate--
    }

    let NumberValited = sumValueFirstDigit * 10  % 11
    console.log(NumberValited)
    return NumberValited;
    
}

const returnDigit = (cpf) =>{
    
    // CPF com 9 ou 10 digitos

    let arrayCPF = cpf.split("");
    
    const numberValidate = arrayCPF.length === 9 ? 10 : 11

    let maxValidate = numberValidate;
    let minValidate = 2;
    let sumValueFirstDigit = calculo();

    for(var i = 0; i <= numberValidate - minValidate; i++){
        sumValueFirstDigit += arrayCPF[i] * maxValidate;
        maxValidate--
    }

    return returnValue(sumValueFirstDigit)
    
    
}

const returnValue = (sumValueFirstDigit) => {
    return sumValueFirstDigit * 10  % 11;
}




function geradorBaseCPF(){

    return Math.round(Math.random() * 999999999)

}

function generateCpf(){
    let cpf = geradorBaseCPF().toString().split("");
    cpf.push(returnDigit(cpf.join("")))
    cpf.push(returnDigit(cpf.join("")))
    console.log(padraoCPF(cpf.join("")))
}






// ValidarDigito(myCPF,ValidarDigito(myCPF))

/*
Usando os CPFs limpos acima, deixe-os com a formatação correta de CPF.
Ex.: "999.999.999-99"
Mostre o resultado no console.
*/
console.log( '\nFormatando CPFs corretamente:' );
const padraoCPF = (cpf) =>{
    const matchPadraoCPF =  /(\d{3})(\d{3})(\d{3})(\d{2})/
    let numberCPF = cleanCPF(cpf);
    let finalCPF = numberCPF.replace(matchPadraoCPF, (regex, p1, p2, p3, p4) =>{
        return `${p1}.${p2}.${p3}-${p4}`
    })
    return finalCPF
}

console.log("049-214 3421-1",padraoCPF("049-214 3421-1"));
console.log("210.458.522-05",padraoCPF("210.458.522-05"));
console.log("735 500 794 - 22",padraoCPF("735 500 794 - 22"));
console.log("101.123-131x32",padraoCPF("101.123-131x32"));

/*
Crie uma expressão regular que faça match com as palavras "junho" ou "julho",
usando o mínimo de caracteres possíveis na regex.
Para garantir que a regex funciona, teste-a usando o método match. Se houver
o match, o método retorna um array com os matches. Caso contrário, ele
retornará null.
Mostre no console o resultado do match para a frase:
"Os meses de janeiro, junho e julho começam com a letra j."
O resultado deve ser:
["junho", "julho"]
*/
console.log( '\nMatch com as palavras "junho" ou "julho" para a frase "Os meses de janeiro, junho e julho começam com a letra j.":' );
let textMes = "Os meses de janeiro, junho e julho começam com a letra j."

console.log(textMes.match(/ju[ln]ho/gi))

/*
Crie uma expressão regular que faça o match com a abertura de uma tag
HTML qualquer.
Ex.: "<div>", "<section>", "<blockquote>".
Use o método match e faça o teste com a marcação abaixo:
"<div><section><blockquote>Texto <img /></blockquote></section></div>"
O resultado deve ser:
["<div>", "<section>", "<blockquote>"]
*/
console.log( '\nMatch com a abertura de uma tag HTML:' );
let tagAbertura = "<div><section><blockquote>Texto <img /></blockquote></section></div>"
matchTagAbertura = /<\w+>/ig 
console.log(tagAbertura.match(matchTagAbertura))

/*
Crie uma expressão regular que faça o match com uma tag HTML vazia, casando
com a abertura e fechamento da tag.
Ex.: "<div></div>", "<section></section>", "<blockquote></blockquote>".
Use o método match e faça o teste com a marcação abaixo:
"<div><ul><li></li><li></li><li><span></span></li></ul></div>"
O resultado deve ser:
["<li></li>", "<li></li>", "<span></span>"]
*/
console.log( '\nMatch com tags HTML vazias (abertura e fechamento da tag):' );
let tagVazia = "<div><ul><li></li><li></li><li><span></span></li></ul></div>"
matchTagVazia = /<\w+><\/\w+>/ig 
console.log(tagVazia.match(matchTagVazia))


/*
Vamos complicar um pouco agora :D

Crie uma expressão regular que faça o match com um texto existente dentro de
uma tag HTML. O texto deve ser capturado e substituído por:
'O texto dentro da tag "[NOME DA TAG]" é "[TEXTO]"'

Use a marcação abaixo para fazer o replace:
"<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>"

A marcação deve permanecer como está, somente o texto deve ser substituído.
No replace, utilize quebras de linha para deixar uma tag por linha.

O resultado deve ser esse:
<h1>O texto dentro da tag "h1" é "Título da página"</h1>
<p>O texto dentro da tag "p" é "Este é um parágrafo"</p>
<footer>O texto dentro da tag "footer" é "Rodapé"</footer>

Uma dica: faça o match aos poucos. Para facilitar o teste, use o site
https://regex101.com/#javascript e verifique se as capturas estão
corretas, para depois aplicar no código ;)
*/
console.log( '\nFazer replace dos textos das tags:' );
let matchTextTag = /(<(\w+)>)([\wíéá\s]+)(<\/\w+>)/g

let TextAndTag = "<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>";

console.log(TextAndTag.replace(matchTextTag, (regexp, tagStart, tag, text, tagEnd) =>{
    return `${tagStart}O texto dentro da tag ${tag} é ${text}${tagEnd} \n`
}))