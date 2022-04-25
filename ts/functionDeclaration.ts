// FUNCTION DECLARATION
function declarationTs(){
    console.log('I am a function Declaration')
}

function declaration1Ts(name: string){
    console.log(`I am a function ${name}`)
}

function declaration2Ts(name: string): string{
    return (`I am a function ${name}`)
}

declarationTs();
declaration1Ts('Declaration');
const delcaration2Ts = declaration2Ts('Declaration');
console.log(delcaration2Ts);