function generatePassword(){
    //TODO: your code goes here

    //if pass-gen button is clicked, open a window asking for the password length (how many characters)
    //length must be between 8 and 128
    //another window(s) asks if the user wants to include lowercase, uppercase, numeric, and/or special characters.
    // all the above will likely be their own prompts
    // upon answering each prompt, the input type should be validated and at least one type of that character should be included
    // after all prompts are answered, a password should be generated that includes all the criteria
    // the generated password should be displayed in an alert and/or written into the webpage
    

    //******https://www.w3schools.com/jsref/jsref_concat_array.asp    This url will help solve the issue of how to choose from multiple character types. I think that a loop which checks to make sure that each type is represented is too complicated. You need a simpler method for ensuring each character type selected is used. I like your original idea of checking the random numbers produced upon type selection. Then, you can set those random numbers as the indices in which the guaranteed types will fall. Then set the undefined indices in the passWord array from randomly chosen characters in the concatenation array. This can be accomplished with an if statement. If the index != lowCaseRando && index != upCaseRando... randomly assign a character from the concatenation array. I hope this works. */

    const upCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const lowCase = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
    const numCase = [0,1,2,3,4,5,6,7,8,9];
    const specialCase = ['~','`','!','@','#','$','%','^','&','*','(',')',')','?','=','-','_','+'];
    //const characterBank = [];
   
    const characterPool = [];

    const passWord = [];

    var passLowCase = true;
    var passUpCase = true;
    var passNum = true;
    var passSpecial = true;
  

      if (generateBtn = true) 
        checkLength();
      

      function checkLength(passLength) {
        var passLength = prompt('Choose password length. Mimimum 8, Maximum 128 characters.')
        if (passLength >= 8 && passLength <= 128) {
        passWord.length = passLength;  
        lowCaseChoice();
        } else {
        alert('Please enter a number ONLY between 8 and 128, thanks');
        return generatePassword();
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
        // } else if (passNum,passUpCase) {
        //   characterPool = characterBank.concat(numCase,upCase);
        // } else if (passNum,passLowCase) {
        //   characterPool = characterBank.concat(numCase,lowCase);
        // } else if (passNum) {
        //   characterPool = characterBank.concat(numCase);
        } else {
          specialChoice();
        }
      }

      function specialChoice(passSpecial) {
        passSpecial = confirm('Would you like to include special characters? (@#!)')
        if (passSpecial) {
          characterPool.push('~','`','!','@','#','$','%','^','&','*','(',')',')','?','=','-','_','+');

          console.log(characterPool.length);
        console.log(typeof characterPool);
        console.info(characterPool);
          //formCharacterBank();
        } else {
          console.log(characterPool.length);
        console.log(typeof characterPool);
        console.info(characterPool);
          //formCharacterBank();
        }
      }

      // function formCharacterBank(characterBank) {
      //   characterBank = characterPool.concat(characterPool1,characterPool2,characterPool3,characterPool4);

      //   console.log(characterPool.length);
      //   console.log(typeof characterPool);
      //   console.info(characterPool);
      // }



//       function  formCharacterBank(characterPool) {
//           if (passSpecial&&passNum&&passUpCase&&passLowCase) {
//             characterPool = characterBank.concat(specialCase,numCase,upCase,lowCase);
//             console.log(characterPool.length);
//             console.log(typeof characterPool);
//             console.info(characterPool);
//           }
// ////
//           else if (passSpecial&&passNum&&passUpCase&&!passLowCase) {
//             characterPool = characterBank.concat(specialCase,numCase,upCase);

//             console.log(characterPool.length);
//             console.log(typeof characterPool);
//             console.info(characterPool);
//   ///
//           } else if (passSpecial,passNum,passLowCase) {
//             characterPool = characterBank.concat(specialCase,numCase,lowCase);
//   ///
//           } else if (passSpecial,passUpCase,passLowCase) {
//             characterPool = characterBank.concat(specialCase,upCase,lowCase);
// ///
//           } else if (passNum,passUpCase,passLowCase) {
//             characterPool = characterBank.concat(numCase,upCase,lowCase);
// ///
//           } else if (passSpecial,passNum) {
//             characterPool = characterBank.concat(specialCase,numCase);
// //
//           } else if (passSpecial,passUpCase) {
//             characterPool = characterBank.concat(specialCase,upCase);
// //
//           } else if (passSpecial,passLowCase) {
//             characterPool = characterBank.concat(specialCase,lowCase);
// //
//           } else if (passNum,passUpCase) {
//             characterPool = characterBank.concat(numCase,upCase);
// //
//           } else if (passNum,passLowCase) {
//             characterPool = characterBank.concat(numCase,lowCase);
// //
//           } else if (passUpCase,passLowCase) {
//             characterPool = characterBank.concat(upCase,lowCase);
// //
//           } else if (passSpecial) {
//             characterPool = characterBank.concat(specialCase);
//             console.log(characterPool.length);
//             console.log(typeof characterPool);
//             console.info(characterPool);

//           } else if (passNum) {
//             characterPool = characterBank.concat(numCase);
//             console.log(characterPool.length);
//             console.log(typeof characterPool);
//             console.info(characterPool);

//           } else if (passUpCase) {
//             characterPool = characterBank.concat(upCase);
//             console.log(characterPool.length);
//             console.log(typeof characterPool);
//             console.info(characterPool);

//           } else if (passLowCase) {
//             characterPool = characterBank.concat(lowCase);
//             console.log(characterPool.length);
//             console.log(typeof characterPool);
//             console.info(characterPool);

//           } else {
//             alert('You did not select any characters from which to build a password. If you want a password you will have to select at least one category. Thanks!');
//             console.log(characterPool.length);
//             console.log(typeof characterPool);
//             console.info(characterPool);
//             return generatePassword();
//           }
//         }
      
      

      // function joinTypes(characterBank) {
      //   if (passLowCase,passUpCase,passNum,passSpecial) {
      //     characterBank.concat(upCase,lowCase,numCase,specialCase)
      //   } else if ()
      // }


      // we need to grab a random character from the concatenation of lists chosen and add it to an index of the passWord, until every index character has been determined.
    // function password1(passWord) {
    //   for (let i = 0; i < passWord.length; i++) {
    //     text += cars[i];
    //   } 
    // }


      
      //an if statement testing the validity of each type can be used and if it is not satisfied, it can generate a new password until all chosen types are used. This might use a bit more computing power though. If we automatically assign random numbers to specified types at the beginning, then we just need to solve for the remaining unidentified indices. 
      //But how do we solve for the unidentified indices? 
      //If i does not have a character, assign one from this list. Do that by assigning a number to each of the four lists. randomoly choose a number which decides the list. Then, randomly choose a number which assigns a character from that type list. 
      //Looks like I need four arrays...
      

      //At the end, if and when you have the random numbers generated
      //What if you assigned boolean variables (you already did)
      //you need to ensure that each character type selected is used. how? What sequence will work within random selection? you simply need to compare the random numbers produced. if any of them are equal, change one at a time until they are all unequal.
      //Then you can assign character types to the items/indices = the random numbers generated based on those types. Then you can have different lists of character types based on which combination of responses the user decided and choose the rest of the indices based on their choices. this would require multiple combinations of lists. 
      //What is simpler?
      //randomly pulling from the type lists that were originally selected. 

    }

    
    //test function that makes sure that all the types chosen are represented at least once in the password:
    //  boolean for true and false
    // is it const upCase? If yes, next test function, if not, try the next index. If none of them are const upCase, run the produce a password function.
    //The next test function can be for const lowCase. But here is the thing, I only want to run the tests of the types chosen. if const upCase = true, run test case, otherwise check if const lowCase is true...
  
    
    
    
    // function lowCaseChoice(passLowCase)

    // var lowerCase = prompt('Would you like to include lowercase letters in your password?')

    // function upCaseChoice(passUpCase)

    // function numChoice(passNum)

    // function specialChoice(passSpecial)
    


    //office hours with Even: 
    //assign variables
    //  snag the button from the document
    //  length
    //  arrays for the character types
    //    upper
    //    lower
    //    number
    //    special
    //    piggybank array
    //    text output field 
    //    output password


    //prompts / storing responses
    //  listen to the button
    //  how long?
    //  lowercase? if yes, store in piggy bank array
    //  uppercase? if yes, store in piggy bank array
    //  numbers?  if yes, store in piggy bank array
    //  special?  if yes, store in piggy bank array
    
    //generating / returning password
    //for loop to grab random characters from the piggybank array - using the password length 
    //join as a string
    //print generated password onto the page
   

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
  