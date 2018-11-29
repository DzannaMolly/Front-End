// alert  ("This is javascript code");  !<--class excercise-->

// var a=5;
// var b=7;       !<--class excercise-->
// var c=9;

// function myFunction(celsius){
//     var farenheit = celsius*1.8+32;       !<--class excercise-->
//     console.log (farenheit);
// }

// function myConvert(farenheit){
//     var celsius = (5/9)*(farenheit-32);            !<--class excercise-->
//     console.log (celsius);
//     return celsius;
// }

// function converter(temperature, type) {
//     var result;

//     if (type === "c");{
//         return temperature *1.8 + 32;
//         // result = temperature * 1.8 + 32;          !<--class excercise-->
//     } else if (type === "f") {
//         return = 5/9 * (temperature - 32);
//      } else {
//         return = "the value can't be converted";
//         }
//     }

//     // return result;
// }

// function myClasses(classes, sessions, months, numberofBreakMonths, breakMonSessions){     !<--class excercise-->
//     var totalSessions = classes*sessions;
//     return (totalSessions * months)-(numberofBreakMonths*(totalSessions-breakMonSessions)-classes);
//     // console.log (classes);
//     return classes;
// }

// function price(numberofphones, priceofIphone, customrate, taxrate){
//     var customs = (priceofIphone+numberofphones)*customrate/100;              !<--class excercise-->
//     var tax = (priceofIphone+numberofphones)*taxrate/100;
//     console.log ();
// }

// function phoneImport (items, price, type){
//     var result = items * price

//     if (type ==="IOS"){
//         result = result += result * 0.05;
//         result = result += result * 0.18;
//         result = result += result * 0.05;                !<--class excercise-->
//     } else if(type === "DROID"){
//         result = result += result * 0.05;
//         result = result += result * 0.18;
//         result = result += result * 0.02;
//     }else {
//         result = result += result * 0.05;
//         result = result += result * 0.18;
//     return result;
// }

// }

// var result = prompt ("how much money does the user have");
// // var result;

// if (result>100){
// console.log("go out");
// }else if (result<50){                         !<--class excercise-->
// console.log("stay home");
// }else{
// console.log("buy a cat");
// }

// function iteration() {
//     var result;

//     for (i = 0; i <= 15; i++) {             !<--class excercise-->
//         if (i % 2 == 0) {
//             console.log("even");
//         }
//         else {
//             console.log("odd");
//         }
//     }

// }

// function iterationOfIntegers() {

//     for (var i = 1; i <= 100; i++) {
//         if (i % 3 == 0) {
//             console.log("Fizz" + i);             !<--class excercise--> 
//                                                                                                                                                              
//         }
//         else if (i % 5 == 0) {
//             console.log("Buzz" + i);
//         }
//         else if ((i % 3) && (i % 5)){
//             console.log("FizzBuzz" + i);
//         }
//     }
// }
/* The FizzBuzz exercise requires the printing of only one of the words
   to accomplish that instead of just a console.log we need to use return(console.log(...)).
    reverse the order of the checks :*
*/

// if treba obratno da bidat napisani po redosled bidejki prvo treba da se izvrsi toa sho se bara, pa potoa ostanatite operacii
// function armstrong() {
//    for (var i = 100; i <= 999; i++) {

//    }
// }

// function armstrong(){
// for (var i = 1; i < 10; ++i)                                   !<--class excercise-->
// {
//   for (var j = 0; j < 10; ++j) 
//     {
//        for (var k = 0; k < 10; ++k)
//        {
//          var pow = (Math.pow(i,3) + Math.pow(j,3) + Math.pow(k,3));
//          var plus = (i * 100 + j * 10 +  k);
//          if (pow == plus) 
//           {     
//             console.log(pow);
//            }
//         }
//       }
//    }
//  }


// function sumOfMultiples(){
//  for (var sum = 0, i = 1; i < 1000;!(i % 3 && i % 5) && (sum += i), i++);{
//     console.log(sum);
// }

// }
                                                                    // !<--class excercise-->
// function integers(numStart, numEnd){
//     output = " ";
//     for (var i = numStart; i < numEnd; ++i){
//         // console.log(i);
//         output +=i;
//     }

//     console.log(output);
// }




// // learningArraysAtHome

// let selectedColors = ['red', 'blue'];
// console.log(selectedColors[0]);

// function catsFeeding(){
//     for (var i = 0; i < 7; i++){
//         dailyFeeding();
//     }

// } 

// function dailyFeeding (){
//     var cats = ["Tabby", "Lizzie", "Mary"];
//     cats.length;
//     for (var j = 0; j < cats.length; j++) {
        
//         if (cats[j] === "Tabby "){
//         console.log(cats[j] + "started eating fish");
//     }
//         else if (cats[j] === "Lizzie "){
//         console.log(cats[j] + "started eating chicken"); 
//     }
//     else if (cats[j] === "Mary "){
//         console.log(cats[j] + "started eating whatever");
//     }

//     }
// }


// function saveLife(){
//     var time = 60;
// for (var i = 0; i < time; i++){
//     if (time - 1 == i){
//         console.log("Dead");
//     }
//     else if (i % 15 == 0){
//         console.log("checkPulse ");
//     }
// else {
//     console.log("massage");
// }

// }

// }

// palindrome number
// 1345 === 5431

// 5*10 + 4 = 54;
// 54*10 + 3 = 543;
// 543*10 + 1 = 5431;

// function palindrome(number)
//     {
//         var rem, temp, final = 0;

//         temp = number;
//         while(number>0)
//         {
//             rem = number%10;
//             number = parseInt(number/10);
//             final = final*10+rem;
//         }
//         if(final==temp)
//         {
//             console.log("The inputed number is Palindrome");
//         }
//         else
//         {
//             console.log("The inputted number is not palindrome");
//         }
//     }

// Batch #3 No.1

// function flirt(numberOfTries, numberOfHitpoints){

//     var girlPoints = 0;
//     var tired = 10;
 
//     for(var i = 1; i <= numberOfTries; i++ ){
 
//         if( i % 5 == 0){
//             girlPoints += 10;
//             console.log("girl Points: ",girlPoints);
//         } else if( i % 3 == 0 ){
//             girlPoints += 5;
//             console.log("girl Points: ",girlPoints);
//         } else {
//             girlPoints += 1;
//             console.log("girl Points: ",girlPoints);
//         }
 
//         if(tired === i){
//             tired += 10;
//             girlPoints -= 12;
//             console.log("Hitpoints",girlPoints)
//         }
//     }
 
//     console.log("Points",girlPoints);
 
//     if(numberOfHitpoints > girlPoints){
//         console.log("girl failed");
//     } else {
//         console.log("girl wins");
//     }
 
//  }


