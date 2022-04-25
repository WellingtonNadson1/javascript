// FUNCTION DECLARATION
function declaration() {
    console.log('I am a function Declaration');
}
function declaration1(name) {
    console.log(`I am a function ${name}`);
}
function declaration2(name) {
    return (`I am a function ${name}`);
}
declaration();
declaration1('Declaration');
const delcaration2 = declaration2('Declaration');
console.log(delcaration2);
