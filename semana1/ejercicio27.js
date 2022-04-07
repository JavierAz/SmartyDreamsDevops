const tiempo = (dias) => {
    let y = Math.floor(dias/365);
    let dr = dias%365;
    let m = Math.floor(dr/30);
    let drr = dr%30;

    return `Esto es: ${y} años, ${m} meses y ${drr} días`
}

console.log(tiempo(900))