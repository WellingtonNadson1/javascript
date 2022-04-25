// FUNCTION EXPRESSION
// It is a function anonymous
const expressTs = function (){
    return (`I am a function expression, composed with function anonymous`)
}

console.log(expressTs());

const express1Ts = function (name: string){
    const askName = `What's your name?`;
    console.log(askName);
    console.log(`Nice to meet you ${name}`);
}

express1Ts('Wellington');