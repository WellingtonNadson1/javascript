// Created my version of method Array.reduce
Array.prototype.myReduce = function(fn, firstValue){
    let acc = firstValue
    for (let i = 0; i < this.length; i++){
        if (!acc && i === 0) {
            acc = this[i]
        } else {
            acc = fn(acc, this[i], i, this)
        }
    }
    return acc
}