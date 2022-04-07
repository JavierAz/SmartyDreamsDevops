const peliculas = [
    {
        titulo: "Señor de los anillos",
        director: "Peter Jackson",
        vista: false
    },
    {
        titulo: "Jhon Wick",
        director: "Chad Stahelski",
        vista: true
    },
    {
        titulo: "Pistolero",
        director: "Robert Rodriguez",
        vista: true
    },
    {
        titulo: "Kate",
        director: "Cedric Nicolas-Troyan",
        vista: false
    }
]

const misPeliculas = (peliculas) => {
    for(p of peliculas){
        let mostrar = `${p.titulo} de ${p.director} `;
        if(peliculas.vista){
            console.log("Ya haz visto: "+mostrar);
        } else {
            console.log("Te falta por ver: "+mostrar)
        }
    }
}

misPeliculas(peliculas);