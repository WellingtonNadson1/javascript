// Created my version of method Array.filter
Array.prototype.myMap = function(fn){
    const newArray = []
    for( let i = 0; i < this.length; i++){
        if (fn(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}