function myfunc(){
    const b1 = document.getElementById("button1").value
const b2 = document.getElementById("button2").value
const b3 = document.getElementById("button3").value
const b4 = document.getElementById("button4").value
const b5 = document.getElementById("button5").value
const b6 = document.getElementById("button6").value
const b7 = document.getElementById("button7").value
const b8 = document.getElementById("button8").value
const b9 = document.getElementById("button9").value
const squ1 = document.getElementById("button1")
const squ2 = document.getElementById("button2")
const squ3 = document.getElementById("button3")
const squ4 = document.getElementById("button4")
const squ5 = document.getElementById("button5")
const squ6 = document.getElementById("button6")
const squ7 = document.getElementById("button7")
const squ8 = document.getElementById("button8")
const squ9 = document.getElementById("button9")

const winner = document.getElementById("winner")
if ( (b1 === "x" || b1 === "X") && (b2 === "x" || b2 === 'X') && (b3 === "x" || b3 === "X") ){
    winner.innerHTML = "X wins"
   
    squ4.disabled = true;
    squ5.disabled = true;
    squ6.disabled = true;
    squ7.disabled = true;
    squ8.disabled = true;
    squ9.disabled = true;


}
else if(( b4 === "x" || b4 === "X") &&( b5 === "x" || b5 === 'X') && (b6 === "x" || b6 === "X") ){
    winner.innerHTML = "X wins"
   
    squ1.disabled = true;
    squ2.disabled = true;
    squ3.disabled = true;
    squ7.disabled = true;
    squ8.disabled = true;
    squ9.disabled = true;
}
else if( (b7 === "x" || b7 === "X") &&( b8=== "x" || b8 === 'X') && (b9 === "x" || b9 === "X" )){
    winner.innerHTML = "X wins"
   
    squ1.disabled = true;
    squ2.disabled = true;
    squ3.disabled = true;
    squ4.disabled = true;
    squ5.disabled = true;
    squ6.disabled = true;
}
else if( (b1 === "x" || b1 === "X") &&( b4=== "x" || b4 === 'X') && (b7 === "x" || b7 === "X") ){
    winner.innerHTML = "X wins"
   
    squ2.disabled = true;
    squ3.disabled = true;
    squ5.disabled = true;
    squ6.disabled = true;
    squ8.disabled = true;
    squ9.disabled = true;
}
else if(( b2 === "x" || b2 === "X" )&&( b5=== "x" || b5 === 'X') &&( b8 === "x" || b8 === "X") ){
    winner.innerHTML = "X wins"
   
    squ1.disabled = true;
    squ7.disabled = true;
    squ3.disabled = true;
    squ4.disabled = true;
    squ9.disabled = true;
    squ6.disabled = true;
}
else if(( b3 === "x" || b3 === "X" )&&( b6=== "x" || b6 === 'X') &&( b9 === "x" || b9 === "X") ){
    winner.innerHTML = "X wins"
   
    squ1.disabled = true;
    squ2.disabled = true;
    squ7.disabled = true;
    squ4.disabled = true;
    squ5.disabled = true;
    squ8.disabled = true;
}
else if(( b1 === "x" || b1 === "X") && (b5=== "x" || b5 === 'X' )&& (b9 === "x" || b9 === "X" )){
    winner.innerHTML = "X wins"
   
    squ7.disabled = true;
    squ2.disabled = true;
    squ3.disabled = true;
    squ4.disabled = true;
    squ8.disabled = true;
    squ6.disabled = true;
}
else if(( b7 === "x" || b7 === "X") &&( b5=== "x" || b5 === 'X') &&( b3 === "x" || b3 === "X") ){
    winner.innerHTML = "X wins"
   
    squ1.disabled = true;
    squ2.disabled = true;
    squ8.disabled = true;
    squ4.disabled = true;
    squ9.disabled = true;
    squ6.disabled = true;
}
else if ( (b1 === "o" || b1 === "O") &&( b2 === "o" || b2 === 'O') && (b3 === "o" || b3 === "O" )){
    winner.innerHTML = "O wins"
   
    squ4.disabled = true;
    squ5.disabled = true;
    squ6.disabled = true;
    squ7.disabled = true;
    squ8.disabled = true;
    squ9.disabled = true;


}
else if(( b4 === "o" || b4 === "O") &&( b5 === "o" || b5 === 'O' )&& (b6 === "o" || b6 === "O") ){
    winner.innerHTML = "O wins"
   
    squ1.disabled = true;
    squ2.disabled = true;
    squ3.disabled = true;
    squ7.disabled = true;
    squ8.disabled = true;
    squ9.disabled = true;
}
else if( (b7 === "o" || b7 === "O") && (b8=== "o" || b8 === 'O') && (b9 === "o" || b9 === "O" )){
    winner.innerHTML = "O wins"
   
    squ1.disabled = true;
    squ2.disabled = true;
    squ3.disabled = true;
    squ4.disabled = true;
    squ5.disabled = true;
    squ6.disabled = true;
}
else if( (b1 === "o" || b1 === "O") &&( b4=== "o" || b4 === 'O') &&( b7 === "o" || b7 === "O" )){
    winner.innerHTML = "O wins"
   
    squ2.disabled = true;
    squ3.disabled = true;
    squ5.disabled = true;
    squ6.disabled = true;
    squ8.disabled = true;
    squ9.disabled = true;
}
else if(( b2 === "o" || b2 === "O" )&&( b5=== "o" || b5 === 'O') && (b8 === "o" || b8 === "O") ){
    winner.innerHTML = "O wins"
   
    squ1.disabled = true;
    squ7.disabled = true;
    squ3.disabled = true;
    squ4.disabled = true;
    squ9.disabled = true;
    squ6.disabled = true;
}
else if(( b3 === "o" || b3 === "O") && (b6=== "o" || b6 === 'O') && (b9 === "o" || b9 === "O" )){
    winner.innerHTML = "O wins"
   
    squ1.disabled = true;
    squ2.disabled = true;
    squ7.disabled = true;
    squ4.disabled = true;
    squ5.disabled = true;
    squ8.disabled = true;
}
else if(( b1 === "o" || b1 === "O") &&( b5=== "o" || b5 === 'O') && (b9 === "o" || b9 === "O") ){
    winner.innerHTML = "O wins"
   
    squ7.disabled = true;
    squ2.disabled = true;
    squ3.disabled = true;
    squ4.disabled = true;
    squ8.disabled = true;
    squ6.disabled = true;
}
else if( (b7 === "o" || b7 === "O") && (b5=== "o" || b5 === 'O') && (b3 === "o" || b3 === "O") ){
    winner.innerHTML = "O wins"
   
    squ1.disabled = true;
    squ2.disabled = true;
    squ8.disabled = true;
    squ4.disabled = true;
    squ9.disabled = true;
    squ6.disabled = true;
}
else if ((b1==="O" || b1==="o" || b1==="X" || b1==="x") && (b2==="O" || b2==="o" || b2==="X" || b2==="x")&& (b3==="O" || b3==="o" || b3==="X" || b3==="x")&& (b4==="O" || b4==="o" || b4==="X" || b4==="x")&& (b5==="O" || b5==="o" || b5==="X" || b5==="x")&& (b6==="O" || b6==="o" || b6==="X" || b6==="x")&& (b7==="O" || b7==="o" || b7==="X" || b7==="x")&& (b8==="O" || b8==="o" || b8==="X" || b8==="x")&& (b9==="O" || b9==="o" || b9==="X" || b9==="x")){
    winner.innerHTML = "Draw"
}
else{
    if(flag === 1){
        winner.innerHTML = "X turn"
    }
    else{
        winner.innerHTML = " O turn"
    }
}

}
 var flag = 1;
function myfunc1(){
    if(flag === 1){
        document.getElementById("button1").value = "X"
        document.getElementById("button1").disabled = true
        document.getElementById("button1").style.backgroundColor="red"
        flag = 0;
    }
    else{
        document.getElementById("button1").value = "O"
        document.getElementById("button1").disabled = true
        flag = 1;
    }
}
function myfunc2(){
    if(flag === 1){
        document.getElementById("button2").value = "X"
        document.getElementById("button2").disabled = true
        flag = 0;
    }
    else{
        document.getElementById("button2").value = "O"
        document.getElementById("button2").disabled =true
        flag = 1;
    }
}
function myfunc3(){
    if(flag === 1){
        document.getElementById("button3").value = "X"
        document.getElementById("button3").disabled = true

        flag = 0;
    }
    else{
        document.getElementById("button3").value = "O"
        document.getElementById("button3").disabled = true
        flag = 1;
    }
}
function myfunc4(){
    if(flag === 1){
        document.getElementById("button4").value = "X"
        document.getElementById("button4").disabled = true
        flag = 0;
    }
    else{
        document.getElementById("button4").value = "O"
        document.getElementById("button4").disabled = true
        flag = 1;
    }
}
function myfunc5(){
    if(flag === 1){
        document.getElementById("button5").value = "X"
        document.getElementById("button5").disabled = true
        flag = 0;
    }
    else{
        document.getElementById("button5").value = "O"
        document.getElementById("button5").disabled = true
        flag = 1;
    }
}
function myfunc6(){
    if(flag === 1){
        document.getElementById("button6").value = "X"
        document.getElementById("button6").disabled = true
        flag = 0;
    }
    else{
        document.getElementById("button6").value = "O"
        document.getElementById("button6").disabled = true
        flag = 1;
    }
}
function myfunc7(){
    if(flag === 1){
        document.getElementById("button7").value = "X"
        document.getElementById("button7").disabled = true
        flag = 0;
    }
    else{
        document.getElementById("button7").value = "O"
        document.getElementById("button7").disabled = true
        flag = 1;
    }
}
function myfunc8(){
    if(flag === 1){
        document.getElementById("button8").value = "X"
        document.getElementById("button8").disabled = true
        flag = 0;
    }
    else{
        document.getElementById("button8").value = "O"
        document.getElementById("button8").disabled = true
        flag = 1;
    }
}
function myfunc9(){
    if(flag === 1){
        document.getElementById("button9").value = "X"
        document.getElementById("button9").disabled = true
        flag = 0;
    }
    else{
        document.getElementById("button9").value = "O"
        document.getElementById("button9").disabled = true
        flag = 1;
    }
}

function reset(){
    location.reload()
}
