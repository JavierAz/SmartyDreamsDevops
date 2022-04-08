const aprobados= (alumnos) => {
    let aprobados=0, reprobados=0;
    
    for (i of alumnos) {
        if(i[1] >= 5){
            aprobados++
        } else {
            reprobados++
        }
    }

    return [`Aprobados: : ${aprobados} Reprobados: ${reprobados}`
    ]
}

console.log(aprobados(
    ["Javier", 9],
    ["Jacob", 4],
    ["Chente", 6],
    ["Juan",3])
)