const upperLower = (text) => {
    let up = 0;
    let lo = 0;
    let res = "";

    for (const iterator of text) {
        if(/[A-Z]/.test(iterator)){
            up++
        } else {
            lo++
        }
    }

    if (up > lo) res = text.toUpperCase() 
    else res = text.toLowerCase()
    
    return res;
}

console.log(upperLower("Javier"))