// FUNCTION EXPRESSION
// It is a function anonymous
const express = function (){
    return (`I am a function expression, composed with function anonymous`)
}

console.log(express());

const express1 = function (name){
    const askName = `What's your name?`;
    console.log(askName);
    console.log(`Nice to meet you ${name}`);
}

express1('Wellington');