function variableCase(Str) {

    strTemp = Str.toLowerCase()
    let snakeCase = Str.replaceAll(" ","_")
    let kebabCase = Str.replaceAll(" ","-")
    let camelCase = Str.split(" ")[0]

    strTemp = Str.split(" ")
    for (let index = 1; index < strTemp.length; index++) {

        let word = strTemp[index].split("")
        word[0] = word[0].toUpperCase()
        camelCase += word.toString().replaceAll(",","")    
    }

    console.log(`${Str} => ${snakeCase}, ${kebabCase}, ${camelCase}`);

}

variableCase("Hello world")
variableCase("Five Stars Resturant")
variableCase("Egg Chicken Dog")