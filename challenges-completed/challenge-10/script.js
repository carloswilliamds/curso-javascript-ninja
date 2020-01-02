
function myFunction(){
    var n1 = 10;
    var n2 = 20;
    return sum();
   // hosting nao funciona atribuindo em variavel
    var sum = function sum(){
        return n1 + n2;
    }
    function sum(){
        return n1 + n2;
    }
}

(function(){
    console.log("escopo")
})()


console.log(myFunction())