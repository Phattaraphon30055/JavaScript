const status = 700 ;

switch (status) {
    case 200 :
        console.log('Ok');
        break ;
    case 400 : //or
    case 500 : //or 
        console.log('Error!');
        break;
    default : //else 
        console.log('Unknoe status');

}