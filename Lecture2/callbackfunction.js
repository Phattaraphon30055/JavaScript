function createQuote(quote,callback){
    let myQuote="Like I alway say,"+quote;
    callback(myQuote); //2
}

function logQuote(quote){
    console.log (quote+'Yes>..');
}

createQuote("Yes will getting better!",logQuote); //1