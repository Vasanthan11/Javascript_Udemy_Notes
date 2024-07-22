let currentValue=20;
const currentValue01=20;

console.log(currentValue);
console.log(currentValue01);

let newValue=(currentValue + 200);
currentValue=newValue;
let newUpdateValue=(currentValue + 500);


let newValue01=(currentValue01 + 200);

let newUpdateValue01=(currentValue01 + 500);


console.log(newUpdateValue);
console.log(newUpdateValue01);
console.log(newValue01);

let userCategory; // should be 'child', 'adult' or 'senior'
let age = 30;

function solve(age) {
    // Todo: Set userCategory conditionally
    // Important: You must put your condition into this solve function!
        
    if (age < 18) {
        userCategory = 'child';
    } else if (age >= 18 && age < 65) {
        userCategory = 'adult';
    } else {
        userCategory = 'senior';
    }
  
    return userCategory;
}

console.log(solve(age));