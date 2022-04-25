// ARROW FUNCTION
const anonymousTs = function (){
    return `I am a function expression and function anonymous.`
}

const arrowTs = () => {
    return `I am an arrow function.`
}

const arrow1Ts = () => {`I am an arrow1 function.`} // I have to take off the { }

const arrow2Ts = () => `I am an arrow2 function.`

const AboutMeTs = (() => {
    console.log(`I find it a little difficult to talk about myself. But one thing is for sure, I like technology and learning something every day that can make me evolve.`)
  })();

console.log(anonymousTs());
console.log(arrowTs());
console.log(arrow1Ts());
console.log(arrow2Ts());