function digitalClock(numTime) {
    
    const hour = numTime > 86400 ? Math.floor(numTime%86400/3600) : Math.floor(numTime/3600)
    const minute = Math.floor(numTime%3600/60) 
    const second = Math.floor(numTime%3600%60)
    
    return (hour < 9 ? `0${hour}` : hour) 
    + ":" + (minute < 10 ? `0${minute}` : minute) 
    + ":" + (second < 9 ? `0${second}` : second)
    
}


console.log(`${digitalClock(5025)}`);
console.log(digitalClock(61201));
console.log(digitalClock(87000));