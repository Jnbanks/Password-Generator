function generatePassword(){
   
    var characterPool = [];
    //const passWord = [];
    var numberCharacters = 0;

    var passLowCase = true;
    var passUpCase = true;
    var passNum = true;
    var passSpecial = true;
    var finalPassword;
  

       //if (generateBtn = true) {
         checkLength();
       //}
      

      function checkLength() {
        var passLength = prompt('Choose password length. Mimimum 8, Maximum 128 characters.')
        if (passLength >= 8 && passLength <= 128) {
        numberCharacters = passLength;  

        lowCaseChoice();
        } else {
        alert('Please enter a number ONLY between 8 and 128, thanks');
        return checkLength();
        }
      }
      function lowCaseChoice() {
        passLowCase = confirm('Would you like to include lowercase letters?')
        if (passLowCase) {
          characterPool.push('q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m');
          upCaseChoice();
        } else {
          upCaseChoice();
        }
      }

      function upCaseChoice() {
        passUpCase = confirm('Would you like to include uppercase letters?')
        if (passUpCase) {
         characterPool.push('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
          numChoice();
        } else {
          numChoice();
        }
      }

      function numChoice() {
        passNum = confirm('Would you like to include numbers?')
        if (passNum) {
          characterPool.push(0,1,2,3,4,5,6,7,8,9);
          specialChoice();
        } else {
          specialChoice();
        }
      }

      function specialChoice() {
        passSpecial = confirm('Would you like to include special characters? (@#!)')
        if (passSpecial) {
          characterPool.push('~','`','!','@','#','$','%','^','&','*','(',')',')','?','=','-','_','+');
          makePassword();
        // console.log(characterPool.length);
        // console.log(typeof characterPool);
        // console.info(characterPool);
        } 
        else {
          checkPool();
        // console.log(characterPool.length);
        // console.log(typeof characterPool);
        // console.info(characterPool);
        }
      }

      function checkPool () {
        if (characterPool.length <= 1) {
          alert("You need to select at least one character type. The more types, the more secure");
          lowCaseChoice();
        } else {
          makePassword();
        }
      }

      function makePassword () {
        console.log(numberCharacters);
        var passWord = [];
        while(passWord.length < numberCharacters) {
          var rando = Math.floor(Math.random() * characterPool.length);
          var newRando = characterPool[rando];
          passWord.push(newRando);
        }
        console.log(passWord);
        finalPassword=passWord.join("");
        console.log(finalPassword);
        //alert(finalPassword);
        ///////Turn this into a string-------------------------
        
        //how to get this password on the screen??????????
      }
    return finalPassword
//////////Do not edit below this line////////////
    return "Password"
}
  
  
  // Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
