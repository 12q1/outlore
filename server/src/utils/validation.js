const passwordValidation = (pwd) => {
    const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(\w{8,})(?!.*\.)/
    return re.test(String(pwd));
}

const emailValidation = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email))
    //RFC 5322 compliant
    //https://emailregex.com/
}

module.exports = { passwordValidation, emailValidation } 