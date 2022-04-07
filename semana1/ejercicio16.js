const vowels = (tex) => {
    let match = tex.match(/[aeiou]/gi);
    return match ? match.length : 0;
}

console.log(vowels("Javier Azanza Vega"));