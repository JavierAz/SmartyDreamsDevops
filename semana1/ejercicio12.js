const descender = (numero) => {
    let res=`Descendiente desde ${numero}`
    
    while(numero>0){
        res += `No. ${numero} \n`;

        numero-=8;
    }
    res+=`Fin`

    return res;
}

console.log(descender(30));