const elminarDuplicados = (lista) => {
    lista = lista.filter(elemento => {
        return typeof elemento === 'number';
    });

    let setList = new Set(lista);

    return Array.from(setList);
}

console.log(elminarDuplicados(['hola',1,2,2,3,5,5,'Ja','diez']))