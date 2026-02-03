// 01. Multiple var + let + const types
var empId: number = 101;
let empName: string = "Giri";
const isActive: boolean = true;

console.log(empId, empName, isActive);

// 02. Object with full type
let product: { productName: string; price: number; inStock: boolean } = {
  productName: "Laptop",
  price: 55000,
  inStock: true
};
console.log(product);

// 03. Array of objects
let team: { user: string; role: string }[] = [
  { user: "Giri", role: "Dev" },
  { user: "Sam", role: "Tester" }
];
console.log(team);

// 04.Fn type variable
let sayHello: (name: string) => void;
sayHello = (name) => console.log("Hello", name);
sayHello("Pradeepa");

// 05.Enum wid string values
enum Direction {
  Left = "LEFT",
  Right = "RIGHT"
}
let move: Direction = Direction.Left;
console.log(move);

// 6.nested object wid array
let mobile = {
  brand: "Realme",
  price: 24000,
  available: true
};
console.log(mobile);

// 07. Using var inside block scope
let age = 21;
if (true) {
  let age = 22;
}
console.log(age); 

// 08. Using let inside block scope
let rank = 10;   
if (true) {
  let rank = 20; 
}
console.log(rank);

// 09. Map usage
let pradeeMap = new Map<string, number>();
pradeeMap.set("marks", 90);
console.log(pradeeMap);

// 10. Set usage
let fruitSet = new Set<string>();
fruitSet.add("Apple");
fruitSet.add("Banana");
fruitSet.add("Apple"); 
console.log(fruitSet);

// 11. Type alias with array
type Numbers = number[];
let myNumbers: Numbers = [1, 2, 3];
console.log(myNumbers);

// 12.Partial type
interface Person {
  name: string;
  age: number;
}
let p: Partial<Person> = { name: "Giri" };
console.log(p);

// 13. keyof usage
type Car = { brand: string; model: string };
let carKey: keyof Car = "brand";
console.log(carKey);

// 14. Readonly object
interface Book {
  readonly isbn: string;
  title: string;
}
let b: Book = { isbn: "12345", title: "Learn TS" };
console.log(b);

// 15. Function narrowing
function showInput(input: number | string) {
  if (typeof input === "string") {
    console.log("It's a string:", input);
  } else {
    console.log("It's a number:", input);
  }
}
showInput(100);       
showInput("Hello");

//16. Function returning object
function makeProduct(name: string, price: number) {
  return { name, price };
}
console.log(makeProduct("Pen", 10));

// 17. Generic function
function makeArray<T>(item: T): T[] {
  return [item];
}
console.log(makeArray(10));      
console.log(makeArray("Hello")); 
console.log(makeArray(true));  

// 18. Generic interface
interface ApiResponse<T> {
  status: number;
  data: T;
}
let numRes: ApiResponse<number> = {
  status: 404,
  data: 123,
};

// 19. Deep merge generic
function combine<T, U>(a: T, b: U) {
  return { ...a, ...b };
}
combine({ isStudent: true }, { marks: 85 });

// 20. Complex union array
let mixData: (string | number | boolean)[] = ["Pradeepa", 100, true];
console.log(mixData);

// 21. Object array with types
let products: { id: number; productName: string; price: number }[] = [
  { id: 101, productName: "Pen", price: 10 },
  { id: 102, productName: "Book", price: 50 }
];
console.log(products);

// 22. Multi-line function with const + let
function totalMarks(m1: number, m2: number) {
  const total = m1 + m2;
  let average = total / 2;
  return average;
}
console.log(totalMarks(80, 90));

// 23. Optional chaining
let productData: { name: string; details: { price?: number } | null } = {
  name: "Pen",
  details: { price: 10 }
};
console.log(productData.details?.price);

// 24. Nullish coalescing
let userName: string | null = null;
let name = userName ?? "Guest User";
console.log(name);

// 25. Type assertion
let data: any = 500;
let price = data as number;
console.log(price + 100);







