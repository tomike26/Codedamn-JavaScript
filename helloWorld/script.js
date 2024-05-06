let age = 23;
let name = "tomike";
let school= "Funaab";



// function addTotal(incrementby , multiplyby) {
//     return (age + incrementby ) * multiplyby;
// }

// addTotal(5,2);
// console.log(age)

//if-else statements
// function ageGap(myage){
//     if (myage > 30){
//         return true;
//     }else {
//         return false;
//     }
// }

// console.log(ageGap(500))

// function testSize(num) {
//   // Only change code below this line
// if(num < 5){
//   return "Tiny";
// } else if(num < 10) {
//   return "Small";
// } else if (num < 15){
//   return "Medium";
// } else if (num < 20){
//   return "Large";
// } else if (num >=20){
//   return "Huge";
// } else{
//   return "Change Me";
// }
//   // Only change code above this line
// }

// testSize(7);

//ARRAYS
// let Friends = [];

// function addMyFriends(friend){
// Friends.push(friend);
// console.log(Friends)
// }

// addMyFriends('tomi');
// addMyFriends('stella');

//For loop
// for (i = 0; i < 10; i++){
//     console.log(i)
// }


//how to use break and continue
let evenNumbers = [];
let oddNumbers = [];


for (let i = 0; i <20; i++){
    if(i % 2 === 0){
        evenNumbers.push(i);
    } else{
        oddNumbers.push(i);
    }
}


console.log(evenNumbers, oddNumbers);