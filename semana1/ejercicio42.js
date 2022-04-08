const random = (min, max) => {
    return Math.round((Math.random() * (max-min))+min)
}

console.log(random(1,10))