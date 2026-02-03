// 1.Add functions to count vowels and print even numbers in a range
const str = "TypeScript";
let count = 0;
for (let ch of str.toLowerCase()) {
    if ("aeiou".includes(ch)) count++;
}
console.log(`Vowels: ${count}`);

// 2.Add functions to count vowels and print even numbers in a range
let i = 1;
while (i <= 50) {
    if (i % 2 === 0) console.log(i);
    i++;
}

// 3.Add functions to count vowels and print even numbers in a range
for (let i = 1; i <= 50; i++) {
    if (i % 4 === 0 && i % 6 === 0) console.log("FourSix");    //=== will check both value and datatype
    else if (i % 4 === 0) console.log("Four");
    else if (i % 6 === 0) console.log("Six");
    else console.log(i);
}

// 4.Add functions to count vowels and print even numbers in a range
const nums = [1, 2, 2, 3, 1, 4];
let freq: Record<number, number> = {};
for (let n of nums) {
    freq[n] = (freq[n] || 0) + 1;
}
console.log(freq);

// 5.Add functions for character frequency counting, array reversal, second largest number, and positive/negative counting
const word: string = "hello";
let reversed: string = "";
for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
}
console.log(reversed);

// 6.find Second smallest Number
const numsArr: number[] = [12, 45, 67, 23, 45];
let first = Infinity, second = Infinity;
for (let n of numsArr) {
    if (n < first) {
        second = first;
        first = n;
    } else if (n < second && n !== first) {
        second = n;
    }
}
console.log("Second smallest:", second);

// 7.Count Positive and Negative Numbers
// Program 1
const nums1: number[] = [1, 2, 2, 3, 1, 4];
// Program 2
const nums2: number[] = [5, 2, 0, 8, 7, 0];
let even = 0, odd = 0, zero = 0;
for (let n of nums2) {
    if (n === 0) zero++;
    else if (n % 2 === 0) even++;
    else odd++;
}
console.log(`Even: ${even}, Odd: ${odd}, Zero: ${zero}`);

// 8.Prime numbers
const numbers: number[] = [3, 4, 5, 10, 11, 15, 17, 20];
for (let num of numbers) {
    let isPrime = true;
    if (num < 2) isPrime = false;
    for (let j = 2; j <= Math.sqrt(num); j++) {
        if (num % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${num} is Prime`);
    }
}

// 9.Object properties for IN
const product = {
    name: "Laptop",
    price: 50000,
    stock: 10,
    available: true
};
for (let key in product) {
    const value = product[key as keyof typeof product];

    if (typeof value === "number") {
        console.log(`${key}: ${value}`);
    }
}

// 10.Object  properties for IN
const car = {
    brand: "Toyota",
    model: "Innova",
    year: 2022,
    electric: false
};
for (let key in car) {
    if (typeof car[key as keyof typeof car] === "string") {
        console.log(`${key}: ${car[key as keyof typeof car]}`);
    }
}

// 10.Password strength checker
function isValidUsername(username: string): boolean {
    const hasLetter = /[a-zA-Z]/.test(username);
    const hasNumber = /\d/.test(username);
    return username.length >= 6 && hasLetter && hasNumber;
}
console.log(isValidUsername("user123"));

// 11.object Properties For In pretty
const person = { name: "Pradeepa", age: 21, city: "Chennai", active: true };
for (let key in person) {
    if (typeof person[key as keyof typeof person] === "string") {
        console.log(`${key}: ${person[key as keyof typeof person]}`);
    }
}

// 12.DO while user prompt
const inputs = ["apple", "banana", "exit"];
let index = 0;
let userInput: string = "";

do {
    userInput = inputs[index] ?? "exit"; // 👈 KEY LINE
    index++;

    console.log("User typed:", userInput);
} while (userInput.toLowerCase() !== "exit");

console.log("Exited loop");

// 13.Flatten nested arrays
type NestedArray = (number | NestedArray)[];
function flatten(arr: NestedArray): number[] {
    let result: number[] = [];
    for (let item of arr) {
        if (Array.isArray(item)) result = result.concat(flatten(item));
        else result.push(item);
    }
    return result;
}
console.log(flatten([10, [20, [30]], 40]));

// 14.Inventory management system
const steps = ["1", "1", "3", "2", "4"];
let inventory: string[] = [];
let s = 0;
let option: string | undefined;
do {
    option = steps[s++];
    console.log(`Option: ${option}`);
    switch (option) {
        case "1":
            inventory.push("Item" + s);
            break;
        case "2":
            inventory.pop();
            break;
        case "3":
            console.log("Inventory:", inventory);
            break;
    }
} while (option !== "4");
console.log("Inventory program ended");

// 15.Switch calculators
function simpleCalc(x: number, y: number, op: string): number | string {
    switch (op) {
        case '+': return x + y;
        case '-': return x - y;
        default: return "Invalid operation";
    }
}
console.log(simpleCalc(8, 3, '+'));  
console.log(simpleCalc(8, 3, '-'));  
console.log(simpleCalc(8, 3, '*')); 

// 16.Triangle pattern
for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}

// 17.2D Array Traversal
for (let i = 0; i < 3; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) row.push(i * 3 + j + 1);
    console.log(row.join(" "));
}

// 18.Dynamic Menu System
// Exercise 1
{
    const nums = [1, 2, 3];
    console.log("Nums1:", nums);
}

// Exercise 2
{
    let nums: number[] = [];
    let step = 0;
    let choice: string | undefined;

    const actions = ["1", "1", "3", "2", "4"];

    do {
        choice = actions[step++] ?? "4";

        switch (choice) {
            case "1":
                nums.push(step * 10);
                break;
            case "2":
                nums.shift();
                break;
            case "3":
                console.log("Numbers:", nums);
                break;
        }
    } while (choice !== "4");

    console.log("Program Ended");
}



















