
// 3-april-2023

// alert("hello world");
// document.write("<h1>hello</h1>");

// console.log(123);


// var name = "ali";
// var age = 24;
// console.log(name);


// alert("hello " +name + age);


// let data = "wania";
// let data2 = " khan";

// let data3 = data + data2;
// console.log(data3);

// let data = 5;
// let data2 = 5;

// let data3 = data + data2; // addition
// console.log(data3);


// let userName = prompt("what is your name?")
// // console.log(userName);
// document.write("Welcome to my website "+userName);


//  let randomNumer = Math.random();
//  random = randomNumer *10
//  console.log(randomNumer);


// var 1product = 23;  (illegal);

// var product1 = 45; (legal);

// var nameOfProduct = "farm house"; (camel case)
// var ProductMaterial = "fanulous"; (pascals case)
// var product_material = "lattin"; (snake case)

// data types 
// 1. strings 
// let name = "Wania";



// 2. Number 
//  let myLuckyNumber = 8;
 // example = 4, 37, 0.37

 // 3. Boolean
// let isTodayMonday = true
// example = true & false

  
// 7-april-2023

// var zakatPercentage = 0.025;
 
// var userInput = prompt("User value");
 
// //  userInput = parseInt("user value");
// console.log(typeof Number(userInput));

// var result = zakatPercentage * userInput;
 
//  alert("Your zakat value is" + result);

        //...........PRACTICE:..............

        //if
//   var x = prompt("where does the people live?");
//   if (x === "karachi") {
//     alert("correct");
//   }  

      // don't want to use string in if:
// var x =prompt("where does the people live?");
// var correctAnswer = "karachi";
// if (x === correctAnswer) {
//     alert("correct!");
// }
        
          // COMPARSION OPERATORS:

// ! (not equal to) which is opposite of ===
// console.log(6 !==7) // result is true
// console.log(7 !==7) // result is false


// <, > <=, >=

// console.log(5 < 9); // true
// console.log(7 > 6); // true
// console.log(5 <= 4); //false bcz 5 is not less than or equal 4
// console.log(5 >= 4); // true
// let UserAge = 19;
// console.log(UserAge >= 18);

// var x = prompt("where does the people live?");
//   if (x === "karachi") {
//     alert("correct");
//   } else{
//     alert("wrong")
//   }

            
// let userAge = +prompt("Enter your age");

// if (userAge >= 18) {
//     alert("You are eligible for NIC");
//  }else{
//         alert("You are not eligible for NIC");
//     }
  
    // multiple if
//  let user = ("wania");
//  let userRole = prompt("type your role")

//  if (user == "wania") {
//     // alert("welcome sir");
//     if(userRole == 'teacher'){
//         alert('welcome sir')
//     }
//     else{
//         alert('welcome beta')
//     }
//  }
//  else{
//         // alert("welcome students");
//         alert('welcome beta');
//      }
 // single if
// let user = prompt("wania");

// if (user == "wania") {
//    alert("welcome sir");
// }
//  else{
//         alert("welcome students");
//      }
  
// let user =prompt("type your name");
//  let userRole = prompt("type your role")

// if (user == "wania" || user == "Wania" && userRole == "teacher"){
//     alert("hello")
// } else{
//    alert('welcome beta')
// }

// var num = 4
// console.log(num >= 4) 


//.......array......

// let innovators = ["faiza", "laiba"]
// innovators.push("huma")
// innovators.pop()
// innovators.unshift("sabeen")
// innovators.shift()
// console.log(innovators)

// var city0 = "Lahore";
// var city1 = "Faislabad";
// var city2 = "Hyderabad";
// var city3 = "Karachi";
// var city4 = "Multan";
// var city5 = "Quetta";
// alert("Welcome to " + city0 );
// alert("Welcome to " + city1 );
// alert("Welcome to " + city1 );
// alert("Welcome to " + city3 );
// alert("Welcome to " + city4 );

// var cities = ["Lahore", "Faislabad", "Hyderabad", "Karachi", "Multan", "Quetta"]
// alert("Welcome to " + cities[3]);

    //......splice......

    // let innovators = ["faiza", "laiba", "areeha", "shabana", "alif"]
    // var fathers = ["khan", "ali", "abid", "ishtiyaq", "azeem"]
    // innovators.splice(2, 0 , "wania", "halima") //here 0 indicate that there is no dletion in any elements
    // // // innovators.splice(2, 2,) // here we can easily remove elements without addition
    // // console.log(innovators)

    // let newInnovators = innovators.slice(2,5)
    // console.log(newInnovators)


//     var userName = "wania"
//     console.log(userName[0].toUpperCase(),userName[1].toLowerCase(), userName[2].toUpperCase(), userName[3].toLowerCase(), userName[4].toUpperCase())
//     var firstChar = userName.slice(0, 1);
//     var otherChars = userName.slice(1);
//     firstChar = firstChar.toUpperCase();
//  otherChars = otherChars.toLowerCase();
//   console.log(cappedCity = firstChar + otherChars);
//     let innovators = ["faiza", "laiba", "areeha", "shabana", "alif"]
//     var fathers = ["khan", "ali", "abid", "ishtiyaq", "azeem"]
//    var fullName = []
//     for (var i = 0; i < innovators.length; i++) {
//         for (var j=0; j < fathers.length; j++){
//             console.log(innovators[i], fathers[i] )
//         }
//     }

//     var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
//     var cityToCheck = prompt("Enter Cleanest Cities Name")
//   var firstChar = cityToCheck.slice(0, 1);
// var otherChars = cityToCheck.slice(1);
// firstChar = firstChar.toUpperCase();
//  otherChars = otherChars.toLowerCase();
//   console.log(cappedCity = firstChar + otherChars);
  
    // var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
    // var cityToCheck = prompt("Enter Cleanest Cities Name")
 
//         if (cityToCheck || cleanestCities =="cheyenne" === cleanestCities[0]) {
//  alert("It's one of the cleanest cities");
//  }
//  else if (cityToCheck || cleanestCities =="santa fe" === cleanestCities[1]) {
//  alert("It's one of the cleanest cities");
//  }
//  else if (cityToCheck || cleanestCities =="tucson" === cleanestCities[2]) {
//  alert("It's one of the cleanest cities");
//  }
// else if (cityToCheck || cleanestCities =="great falls" === cleanestCities[3]) {
//  alert("It's one of the cleanest cities");
//  }
//  else if (cityToCheck || cleanestCities =="honolulu" === cleanestCities[4]) {
//  alert("It's one of the cleanest cities");
//  }
//  else {
//  alert("It's not on the list");
//  }
// for (var i = 0; i <= 4; i++) {
//      if (cityToCheck === cleanestCities[i]) {
//      alert("It's one of the cleanest cities");
//      } 
//     }
 
//  var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
//  var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
//  var fullNames = [];
//  for (var i = 0; i < firstNames.length; i++) {
//  for (var j = 0; j < lastNames.length; j++) {
//  fullNames.push(firstNames[i] + lastNames[j]);

//  }
//  }

//  console.log(fullNames)

    // REPLACING THE TEXT:
// var sentence = 'refrence site about loreum, you can check loreum, lorem is a sentence of english word is a you';
// var textToReplace = "word is a you"
// var textToInsert = "yes";

// var newText = sentence.replace(textToReplace,textToInsert)
// console.log(newText)

// for (var i = 0; i<sentence.length ; i++) {
//     if (sentence.slice (i, i+ textToReplace.length)== textToReplace) {
//         sentence = sentence.slice(0, i) + 'yes' + sentence.slice(i + textToReplace.length)
//     }

// }
// console.log(sentence);

//REPLACING THE TEXT IN SHORT FORM:

// var sentence = 'refrence site about loreum, you can check loreum, lorem is a sentence of english word is a you';
// var textToReplace = "word is a you"
// var textToInsert = "yes";

// var newText = sentence.replace(textToReplace,textToInsert)
// console.log(newText)
//tell the total values of any word
//     var sen = 'hello! world , hello banoqabil , hello universe';
//     // console.log(sen.indexOf("hello"));
//     // console.log(sen.lastIndexOf("hello"));
    
// console.log(sen.replace(/hello/g, 'hi'))//(globally word ko change karna) saray text ko agar replace karna hai to aese karyngy
// var user = 'wAnia';
// console.log(user.charAt(user.length-1))



// var myNum= (Math.round(Math.random()*10))
// // console.log(Math.round(myNum))
// // console.log(Math.floor(myNum))
// // console.log(Math.ceil(myNum))
// console.log(myNum)

// var myNum= (Math.round(Math.random()*10))
// console.log(Number (myNum.toFixed(3)))//point k bad jitni values lene hn
// console.log(parseFloat (myNum.toFixed(3)))

// var rightNow = new Date()
// var dayNames = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
// console.log(rightNow.getDate())
// console.log(dayNames [rightNow.getDay()])
// console.log(rightNow.getFullYear())
// console.log(rightNow.getHours())
// console.log(rightNow.getMinutes())
// console.log(rightNow.getSeconds())
// console.log(rightNow.getMonth())
// var rightNow = new Date() 
// // var doomsday = new Date("June 30, 2035");
// // console.log(doomsday.getDate())
// rightNow.setFullYear(2003)
// console.log(rightNow)
// var greetings = "salam"

// function convertToCapitalCase(str) {
//     console.log(greetings)

// return str.charAt(0).toUpperCase()+str.slice(1).toLowerCase()


// }
// var hello = convertToCapitalCase('hello ')
// var hello1 = convertToCapitalCase('waNIa ')
// var hello = convertToCapitalCase('hello ')

// console.log(hello1)
// var currentDate = new Date()
// // console.log(currentDate.getDate())
// // currentDate = new Date(19)
// // currentDate.setDate(19)
// // console.log(currentDate)

// var myDOB = new Date("18-nov-2002")
// var differenceAge = currentDate - myDOB
// console.log(Math.round(differenceAge/(1000*60*60*24*365)))

// function  myFun(name, ID){
//     // console.log("hello")
//     return "hello " +name + ID
// }
// var num = myFun("wania", " university")
// console.log(num)
//....................................when ever anyone put something in the prompt you get their enter date time day easily..................................

// function letsDoIt (name){
//     var postDate = new Date()
//     return postDate

// }
// var u = prompt("your Name")
// var dxy = letsDoIt(u)
// alert(dxy)
//...................................................X.......................................................

//first word captilized
// var userName = prompt("enter your name")
// userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase()
// alert(userName)























































































































































































































































































































































































































































































































































































































































































