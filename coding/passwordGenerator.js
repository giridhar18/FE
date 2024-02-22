// JS random password generator 
function generatePassword(length) {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var password = "";
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
}

// Example usage:
var password = generatePassword(12); // Generates a password with length 12
console.log(password);
  
//   This function generates a password of the specified length using a combination of lowercase letters, uppercase letters, and digits. You can adjust the length parameter to generate passwords of different lengths.