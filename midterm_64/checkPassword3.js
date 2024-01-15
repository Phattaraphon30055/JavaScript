function checkPassword(password) {

    let result = ""
    let arrayPassword = password.split('')
    const special = "!@#$%^&*+=._-"
    const letter = "abcdefghijklmnopqrstuvwxyz"

    if ( password.length < 8) 
        result += "Password must be at least 8 characters long. ";

    for (const char of letter) {
        if ( !arrayPassword.includes(char.toUpperCase()) )
            result += "Password not contain uppercase letter. "
            break;
    }

    for (const char of letter) {
        if ( !arrayPassword.includes(char.toLowerCase()) )
            result += "Password not contain lowercase letter. "
            break;
    }

    for (let index = 0; index < 10; index++) {
        index = index.toString()
        console.log(typeof index);
        if (!arrayPassword.includes(`${index}`))
            result += "Password not contain number. "
            break;
    }

    if ( !password.split('').some( char => special.includes(char)) )
        result += "Password not contain special character. "

    if ( password.includes(" ") )
        result += "Password not contain space. "

    if ( password.startsWith(...special) || password.endsWith(...special) )
        result += "Password start and end by special character. "

    if (result.isEmpty || result === "")
        console.log(`Password ${password} is vailid.`);
    else
        console.log(`Password ${password} is not vailid. ${result}`);
}

checkPassword("aaaaaaaaaaA1")
// checkPassword("1234567@Ae8")
// checkPassword("1234567@80@")
// checkPassword("1234567@Az8")
