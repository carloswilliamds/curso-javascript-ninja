/*
O desafio de hoje será um pequeno projeto: um cronômetro!
As regras para criação do cronômetro são as seguintes:
1. Crie um arquivo index.html e adicione esse script a ele;
2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
Ele será o nosso cronômetro;
3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
cada segundo;
5. Ao clicar em Stop, o cronômetro deve parar de contar;
6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

Utilize o atributo data-js para nomear o campo e os botões. Você pode
usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
*/

window.onload = function(){

    (function(doc, win){

        let $inputCounter = doc.querySelector("[data-js=counter]")
        let $startButton = doc.querySelector("[data-js=btn-start]")
        let $pausedButton = doc.querySelector("[data-js=btn-paused]")
        let $resetButton = doc.querySelector("[data-js=btn-reset]")

        let counter = 1;
        let timerStatus = false;

        $inputCounter.value = counter;

        $startButton.addEventListener("click", startTimer)


        $pausedButton.addEventListener("click", (event) =>{
            pausedTimer();
        })

        $resetButton.addEventListener("click", (event) =>{
            resetTimer();
        })

        function InitialTimer(){
            
            if(timerStatus){
                counter += 1;
                $inputCounter.value = counter;

                setTimeout(InitialTimer, 200)
            }
        }

        function startTimer(){
            $startButton.removeEventListener("click", startTimer, false)
            timerStatus = true;
            InitialTimer();
        }

        function pausedTimer(){
            timerStatus = false;
            $startButton.addEventListener("click", startTimer)
        }

        function resetTimer(){
            pausedTimer();
            counter = -1;
            $inputCounter.value = 0;
        }
        
    })(document, window)
        
}