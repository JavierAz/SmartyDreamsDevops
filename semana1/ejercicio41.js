const triangle = (number) => {
let half = Math.floor(number-1)
let figure = ""

    for (let i = 0; i < number; i++) {
        let lvl = "";

        for (let j = 0; j < 2*number-1; j++) {
            if(half-i <= j && half+i >= j){
                lvl += "*"
            } else {
                lvl += " "
            }
        }
        figure += lvl+"\n"
    }
    return figure
}

console.log(triangle(8));