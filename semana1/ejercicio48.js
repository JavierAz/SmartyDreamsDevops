const calc = (texto) => {
    let count = {

    }, res = [], letras = texto.split('').filter(letra => letra .trim().length >= 1);
    
    for(i of letras){
        if(!count[i]){
            count[i] = 1;
        }else{
            count[i]++;
        }
    }

    for(i in count){
        if(count[i] >= 2){
            delete count[i];
        }else{
            res.push(i);
        }
    }
    
    return [res,res[0]];
}

console.log(calc("Javier"));