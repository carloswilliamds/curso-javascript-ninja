let funca = function asas(){
    return "show"
}

console.log(funca(), funca.name)

function person(){
    let info = {
        name: "Carlos",
        lastName: "Santos"
    }
    return info;
}

person().name = 121
console.log(person().name)

function adder(x){
     return function addOther(y){
        return x + y
    };
}
console.log(adder(2)(3))
let add2 = adder(2);
console.log(add2(3))


let car = {
    color: "red"
}

function getCarColor(mycar){
    return mycar.color
}

console.log(getCarColor(car))

function showOtherFunction(func){
    return func();
}


showOtherFunction(function() {
    return console.log("Number One")
})

showOtherFunction(() => {
    return console.log("Just checked charst to")
})