const users = [
    {nombre: "Chente", aficiones: ["desarrollo", "basket","gym"]},
    {nombre: "Javier", aficiones: ["programacion", "cloud","senderismo"]},
    {nombre: "Jacob", aficiones: ["Gym", "Aviones","dormingenieriair"]},
];

const aficiones = (arr)=> {
    let map ={

    };
    for(obj of arr){
        for(i of obj.aficiones){
            if(!map[i]){
                map[i] = 1;
            }else{
                map[i]++;
            }
        }
    }
    return map;
}

console.log(aficiones(users));