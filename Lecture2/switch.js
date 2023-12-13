const status = 700 ;

switch (status) {
    case 200 :
        console.log('Ok');
        break ;
    case 500 : //or
    case 400 : //or 
        console.log('Error!');
        break;
    default : //else 
        console.log('Unknoe status');

}