function TransformNotes(note: Number){

    let resultNote: string = '';

    if(note >= 90 && note <= 100){
        resultNote = 'Sua Nota foi A';
    } else 
    
    if (note >= 80 && note <= 89){
        resultNote = 'Sua Nota foi B';
    } else 
    
    if (note >= 70 && note <= 79){
        resultNote = 'Sua Nota foi C';
    } else 
    
    if (note >= 60 && note <= 69){
        resultNote = 'Sua Nota foi D';
    } else 
    if (note >= 0 && note < 60){
        resultNote =  'Sua Nota foi F'
    } else {
        resultNote = 'Valor Inválido'
    }
    
    return console.log(resultNote)
}

TransformNotes(61)
TransformNotes(-1)
TransformNotes(101)
TransformNotes(100)
TransformNotes(78)