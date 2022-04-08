function validateEmail(email){
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))/
    return re.test(email)
}

console.log(validateEmail('azz@mail.com'));