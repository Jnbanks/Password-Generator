function generatePassword(){
    
    const upCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const lowCase = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
    const numCase = [0,1,2,3,4,5,6,7,8,9];
    const specialCase = ['~','`','!','@','#','$','%','^','&','*','(',')',')','?','=','-','_','+'];
   
    const characterPool = [];

    const passWord = [];
    numberCharacters = 0;

    var passLowCase = true;
    var passUpCase = true;
    var passNum = true;
    var passSpecial = true;
  

       if (generateBtn = true) {
         checkLength();
       }
      

      function checkLength(passLength) {
        var passLength = prompt('Choose password length. Mimimum 8, Maximum 128 characters.')
        if (passLength >= 8 && passLength <= 128) {
        numberCharacters + passLength;  

        lowCaseChoice();
        } else {
        alert('Please enter a number ONLY between 8 and 128, thanks');
        return checkLength();
        }
      }
      function lowCaseChoice(passLowCase) {
        passLowCase = confirm('Would you like to include lowercase letters?')
        if (passLowCase) {
          characterPool.push('q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m');
          upCaseChoice();
          //var lowCaseRando = Math.floor(Math.random() * passLength);
          //console.log(lowCaseRando);
        } else {
          upCaseChoice();
        }
      }

      function upCaseChoice(passUpCase) {
        passUpCase = confirm('Would you like to include uppercase letters?')
        if (passUpCase) {
         characterPool.push('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
          numChoice();
        // } else if (passUpCase) {
        //   characterPool = characterBank.concat(upCase);
        } else {
          numChoice();
        }
      }

      function numChoice(passNum) {
        passNum = confirm('Would you like to include numbers?')
        if (passNum) {
          characterPool.push(0,1,2,3,4,5,6,7,8,9);
          specialChoice();
        } else {
          specialChoice();
        }
      }

      function specialChoice(passSpecial) {
        passSpecial = confirm('Would you like to include special characters? (@#!)')
        if (passSpecial) {
          characterPool.push('~','`','!','@','#','$','%','^','&','*','(',')',')','?','=','-','_','+');
          makePassword();
          console.log(characterPool.length);
        console.log(typeof characterPool);
        console.info(characterPool);
        } 
        else {
          makePassword();
          console.log(characterPool.length);
        console.log(typeof characterPool);
        console.info(characterPool);
        }
      }

      // //produce random number within the size of the characterPool
      //find the matching character
      //add this character to the passWord
      //repeat the above process until the passWord.length = the numberCharacters.length

      function makePassword () {
        while (passWord.length < numberCharacters) {
          newRando();
          passWord.push(characterPool(rando));
          console.log(passWord);
        }
    
      }
    
      function newRando (rando) {
        var rando = Math.floor(Math.random() * characterPool.length);
        console.log(rando);
      }
    
  //What needs to happen now is a function that checks the length of the characterPool. If it's "", then the user will be taken back to the first character type.

  //Next we need the password generator, which must include all chosen types. How to do this? We need to run a test based on their type choices, or not. chances are each type will be represented, letters with heavier weight over symbols and numbers.
  // function checkPool (characterPool) {
  //   if (characterPool = null) {
  //     makePassword();
  //   } else {
  //     alert("You did not select any character types!")
  //     lowCaseChoice();
  //   }
  // }

  // function makePassword (passWord) {
  //   for (var i = 0; i < numberCharacters; i++) { 
  //       var rando = Math.floor(Math.random() * characterPool.length);
  //       passWord.push(rando);
  //       console.log(passWord);
  //     } 
  // } 
      
  // function makePassword (passWord, characterPool) {
  //   var rando = Math.floor(Math.random() * characterPool.length);
  //   for (var i = 0; i < numberCharacters; i++) {

  //   }
  // }
  


    //
    //console.log(names[0]);
    //generate random number within length of selected character bank
    // let rando = Math.floor(Math.random() * characterPool.length);
    //select that piece of data from the character bank array using the random number to determine the index number of that piece of data
    //add that piece of data (character) to the array of the password
    // We use a for-loop to execute code more than once
    //repeat the above until each data place in the password array is full
    //console.log(names[rando]);
    //If password.length < userPass.length, then repeat the character addition function

// for (var i = 0; i < 5; i++) {
//   // This is the block of code that will run each time
//   console.log("This is the current value of i: " + i + ".");
// }

// // For-loops are often used to iterate over arrays
// var zooAnimals = ["Bears", "Giraffes", "Penguins", "Meerkats"];

// //To determine how many times the loop should execute, we use the array's length
// for (var i = 0; i < zooAnimals.length; i++) { 
//   console.log("I am going to zoo to see " + zooAnimals[i] + ".");
// }

//     // Return stops the execution of a function
//   return;

//   // NOTICE THE FORMAT, variables first, then functions defined, then order of functions to be carried out.
//   var hello = "Hello"; 

// function sayHello() {
//   console.log(hello);
//   return;
// }

// var sayHelloAgain = function () {
//   console.log(hello);
//   return;
// };

// sayHello();
// sayHelloAgain();
    
    
//////////Do not edit below this line////////////
    return "password"
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
