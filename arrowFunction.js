// ARROW FUNCTION
const anonymous = function (){
    return `I am a function expression and function anonymous.`
}

const arrow = () => {
    return `I am an arrow function.`
}

const arrow1 = () => {`I am an arrow1 function.`} // I have to take off the { }

const arrow2 = () => `I am an arrow2 function.`

const AboutMe = (() => {
    console.log(`I find it a little difficult to talk about myself. But one thing is for sure, I like technology and learning something every day that can make me evolve.`)
  })();

console.log(anonymous());
console.log(arrow());
console.log(arrow1());
console.log(arrow2());