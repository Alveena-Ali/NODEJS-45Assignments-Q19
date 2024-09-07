"use strict";
// Que 19: Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the
// number of people you are inviting to dinner.   
Object.defineProperty(exports, "__esModule", { value: true });
// ********************************************************************************************************************************
// Working with one of the programs from Exercises 14 through 18
let guestList = ["Zara", "Sheza", "Laiba"];
let absentGuest = "Zara";
let newGuest = "Hooria";
guestList[0] = newGuest;
// • Add one new guest to the beginning of your array.
guestList.unshift("Kiran");
// • Add one new guest to the middle of your array. 
guestList.splice(2, 0, "Areeba");
// • Use append() to add one new guest to the end of your list.
guestList.push("Anusha");
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from
//   your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    //    console.log(`Sorry ${removeGuest}, You are not invited for dinner.\n`);
}
;
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have 
//   an empty list at the end of your program.
guestList.splice(0, 2);
console.log(guestList);
// ======================================= Exercise 19
// Print a message indicating the number of people you are inviting to dinner. 
console.log(`Total number of Guest Are: ${guestList.length}`);
