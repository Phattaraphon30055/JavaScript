function checkPassword(password) {
    // Define regular expressions for uppercase, lowercase, numbers and special characters
    const upperCase = /[A-Z]/g;
    const lowerCase = /[a-z]/g;
    const numbers = /[0-9]/g;
    const specialChar = /[!@#$%^&*]/g;
  
    let score = 0;
  
    if (password.length < 8) {
      return "Too short";
    }
  
    if (password.match(upperCase)) {
      score++;
    }
  
    if (password.match(lowerCase)) {
      score++;
    }
  
    if (password.match(numbers)) {
      score++;
    }
  
    if (password.match(specialChar)) {
      score++;
    }
  
    switch(score) {
      case 0:
        return "Very Weak";
      case 1:
        return "Weak";
      case 2:
        return "Moderate";
      case 3:
        return "Strong";
      case 4:
        return "Very Strong";
      default:
        return "Error";
    }
  }
  
console.log(checkPassword("aaaaaaaaBB"));
console.log(checkPassword("1234567@Ae8"))
console.log(checkPassword("1234567@80@"))
console.log(checkPassword("1234567@Az8"))