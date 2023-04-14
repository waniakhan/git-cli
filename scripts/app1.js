//..........TASK:01.........
//Q: Calculate the zakat value, first, create a variable named "zakatPercentage" and
// store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
// named "userInput" and take the input from the user using the prompt. Make sure
// the input value is of a type number by converting the input string to a number
// using a suitable method. Then, create a variable named "result" and assign its value
// to the multiplication of the zakat percentage and user input. Finally, use an alert
// message to display the calculated zakat value. The message should look like this:
// "Your zakat value is xxx


// ........................................7-april-2023..................................

// var zakatPercentage = 0.025;
 
// var userInput = prompt("User value");
 
// //  userInput = parseInt("user value");
// console.log(typeof Number(userInput));

// var result = zakatPercentage * userInput;
 
//  alert("Your zakat value is" + result);

//........................................12-april-2023......................................

//............ Task 2:...........

//Q2: calculate the fitrah amount, first, ask the user to enter the total number of family
// members using the prompt and store the value in a variable called
// "familyMembers". Next, ask the user to choose a fitrah method by providing them
// options using the prompt, and store the selected method and its price in variables.
// Then, use an if-else block to check the user's input and calculate the fitrah amount
// by multiplying the selected method's price with the number of family members.
// Finally, display the calculated fitrah amount using an alert message.

// var familyMembers = prompt("Enter Your Family Members");
// var fitraForm =  prompt("Select the Name which you want: 1. wheat 250\ 2. dates 2100\ 3. kishmish 2800\ 4. barley 450 ")

// if ( fitraForm=="wheat" || fitraForm=="Wheat") {
//     var fitraForm1 = 250*familyMembers
//     alert("Your fitra value is " + fitraForm1 )

// }  else if ( fitraForm=="dates" || fitraForm=="Dates") {
//     var fitraForm2 = 2100*familyMembers
//     alert("Your fitra value is " + fitraForm2 )
// } else if ( fitraForm=="kishmish" || fitraForm=="Kishmish") {
//     var fitraForm3 = 2800*familyMembers
//     alert("Your fitra value is " + fitraForm3 )
// } else if ( fitraForm=="barley" || fitraForm=="Barley") {
//     var fitraForm4 = 450*familyMembers
//     alert("Your fitra value is " + fitraForm4 )
// }    
// else {
//     alert("It is on the list")

// }   

 //.................TASK:03.................

// Q3: Create a program that generates a random number between 1 and 10 and stores it
// in a variable called "secretNumber". Then, ask the user to enter a guess for the
// secret number using a prompt.
// Use an if-else statement to check if the user's guess matches the secret number. If
// the guess is correct, display a message using an alert saying "Congratulations! You
// guessed the secret number". Otherwise, if the guess is too high or too low, display
// an appropriate message informing the user to guess again.

// var secretNumber = 4;
// var guess = prompt("Enter the guess number between 1 and 10");

// if (guess=="4") {
//     alert("Congratulation! You guessed the secret numer")

// } else if (guess < "4") {
//     alert("your guesed is too low. Try again!")

// } else if (guess > "4") {
//        alert("Your guessed is too high. Try again!")
// }
// else {
//     alert("Ops! You guessed wrong. Trry again")
// }

//..............TASK:04............

//Q4: Create a program that asks the user to enter a name, and then prints out the name
// with the first letter capitalized (Make your name in capitalized case).

// var userName =prompt("Enter your name" )
// var firstLetter = userName.slice(0,1 );
// var otherLetters = userName.slice(1);
// firstLetter = firstLetter.toUpperCase();
// otherLetters = otherLetters.toLowerCase();
// alert(  firstLetter + otherLetters);


//...........TASK:05............

//Q5: In this task, you will be creating two empty arrays called "contactNumbers" and
// "contactNames". Using the prompt, you will ask the user to enter a contact number
// and contact name. You will then push these values into their respective arrays
// using the push method. After adding all the contacts, you will display the contact
// numbers and names in the console. To do this, you will need to use a for loop to
// iterate through both arrays and log each element to the console.
// Make sure to use descriptive variable names and comment on your code for clarity

// var contactNames=[];
// var contactNumbers=[];

// for(i = 0; i < 3; i++) {
//    var userName=prompt("Enter your Name");
//    var userNumber= prompt("Enter your Number");
//    contactNames.push(userName);
//    contactNumbers.push(userNumber);
// }

// for(i = 0;i < 3; i++) {
//     var userName2 =contactNames[i];
//     var userNumber2=contactNumbers[i];
// console.log(userName2 + " : " + userNumber2);
// }


//...............TASK:06............

//Q6: Create an Array that contains different products, and get input from the user in which you
// ask your user to give the position of that element he/she wants. Now remove that Item
// from your array and console the removed item, Also display the remaining items in the
// array and total number of items remaining.

// var products = ["Prince", "Oreo", "Sooper", "Gala"]
// var input = +prompt("Enter the product position which you want to remove: \n1: prince\n2: oreo\n3: sooper\n4: gala")

// var removedItem = products.splice(input - 1, 1)
// console.log(removedItem)
 
// console.log("Reamining Items " + products)
// console.log("Total products are: " + products.length)


//..............TASK:07................

//Q7: Create a program that asks the user for their nationality, gender, and age using the prompt
// function. The program should then use nested if-else statements to determine if the
// person is eligible to vote.
// First, the program should check if the person is Pakistani or Indian. If they are not, the
// program should display a message saying they are not eligible to vote.
// If they are Pakistani or Indian, the program should then check their gender. If the person is
// male and over the age of 18, they are eligible to vote. If the person is female and over the
// age of 18, the program should ask if they are married. If they are married, they are eligible
// to vote. If they are not married, they are not eligible to vote.
// If the person is under 18, the program should display a message saying they are not eligible
// to vote

// var nationality = prompt("Enter Your Nationality")
// var gender = prompt("Enter Your Gender")
// var age = prompt("Enter Your Age")

// if (nationality== "pakistani" || nationality== "indian") {
//     if (gender== "male" && age > 18) {
//       alert("You are eligible for Vote")
//     } else if (gender== "female" && age > 18) {
//       var maritalStatus = prompt("Are you married?")
//       if (maritalStatus=="yes"){
//         alert("You are eligible for vote")
//       } else if (maritalStatus== "no") {
//         alert("You are not eligible for vote")
//       }
//     } else if ( gender && age < 18) {
//       alert("You are not eligible for vote")
//     }
//   }  else {
//     alert("You are not eligible for vote")
//   }

//...............TASK:08..............

//Q8: You have an array of that contains the name of Pakistani Teams Player selected for
// WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
// India, So make an array of final team players (11 Players) that will be playing in tomorrows
// match from the WorldCupSquad array.
// (Hint : Make sure it should not disturb the array that contains 15 players instead you have
// to make a copy of this array)

// var pakistaniTeamPlayers = ["Babar Azam", "Shadab Khan", "Asif Ali", "Fakhar Zaman", "Haider Ali", "Haris Rauf", "Iftikhar Ahmed", "Naseem Shah", "Shaheen Shah Afridi", "Shan Masood", "M.Waseem", "M.Rizwan", "M.Nawaz", "Khushdil Shah", "M.Hasnain"]
// console.log(pakistaniTeamPlayers)
// var pakistaniTeamPlayers2 = pakistaniTeamPlayers.slice(0, 11)
// console.log(pakistaniTeamPlayers2)

