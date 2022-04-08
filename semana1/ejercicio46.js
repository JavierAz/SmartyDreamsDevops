const subString = (text) => {
    let sub = []

    for (i in text) {
        let st = parseInt(i);

        for (let i = 0; i < text.length-1; i++) {
            const fn = parseInt(i+st);
            
            sub.push(text.subString(st,fn))
        }
    }
    return sub;
}

console.log(subString("Javier"))