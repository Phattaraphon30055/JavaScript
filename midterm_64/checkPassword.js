function checkPassword(password) {

    let result = ""
    const special = "!@#$%^&*+=._-"

    if ( password.length < 8) 
        result += "Password must be at least 8 characters long.";

    if ( !password.split('').some( char => char >= 'A' && char <= 'Z') )
        result += "Password not contain uppercase letter. "

    if ( !password.split('').some( char => char >= 'a' && char <= 'z') )
        result += "Password not contain lowercase letter. "
    
    if ( !password.split('').some( char => char >= '0' && char <= '9') )
        result += "Password not contain number. "

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

checkPassword("aaaaaaaaBB")
checkPassword("1234567@Ae8")
checkPassword("1234567@80@")
checkPassword("1234567@Az8")
