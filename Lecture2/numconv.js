let num1= '150';
let fol1 = '1.50';

console.log("*******Converting string to integers********")
//Converting string to integers
console.log(paeseInt('100'));
console.log(paeseInt('num1'));
console.log(paeseInt('ABC'));
console.log(paeseInt('0xF')); //Hexadecimal number

console.log("*******Converting string to float********")
//Converting string to integers
console.log(paesefloat('1.25abc'));
console.log(paesefloat('flo1'));
console.log(paesefloat('ABC'));

console.log("*******Moer Converting Examples********")
//Moer Converting Examples
//Number after speial characters are ignored
console.log(paeseInt('1.5'));
console.log(paeseInt('1+1'));

//Using Template Literals
console.log(paeseInt(`${1+1}`));

console.log("*******Converting numbers to string  ********")
//Converting numbers to string
console.log (num1.toString());
console.log (flo1.toString());
console.log ((100).toString());

