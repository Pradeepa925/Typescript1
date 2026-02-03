// 1.Number Variable
let age: number = 25;
console.log(age);

// 2.String Variable

let userName: string = "Giri";
console.log(userName);

// 3.Boolean Variable

let isActive: boolean = true;
console.log(isActive);

// 4.Var Example
var x = 10;
x = 20;
console.log(x);

// 5.let Example
let y = 15;
y = 25;
console.log(y);

// 6.const Example
const pi = 3.14159;
console.log(pi);

// 7.Any type
let data: any = "Giri";
console.log(data);
data = 200;
console.log(data);

// 8.Union Type
let value: number | string = 10;
console.log(value);
value = "Giri";
console.log(value);

// 9.number Array
let marks: number[] = [80, 90, 100];
console.log(marks);

// 10.string Array
let users: string[] = ["Pradeepa", "Selvam"];
console.log(users);

// 11.Generic Array
let ids: Array<number> = [1, 2, 3];
console.log(ids);

// 12.Tuple
let user: [string, number] = ["Pradeepa", 21];
console.log(user);

// 13.Null type
let empty: null = null;
console.log(empty);

// 14.undefined type
let notSet: undefined = undefined;
console.log(notSet);

// 15.object type
let person: { name: string; age: number } = {
  name: "Giri",
  age: 24
};
console.log(person); 

// 16.optional property
let emp: { id: number; email?: string } = { id: 101 };
console.log(emp);

// 17.Enumerator
enum Status {
  Active,
  Inactive,
  Pending
}
let giriStatus: Status = Status.Active;
console.log(giriStatus,"hi");

// 18.fn returntype
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(10, 20));

// 19.void fn
function greet(): void {
  console.log("Hello Giri!");
}
greet();

// 20.template string
let message = `Welcome, ${userName}!`;
console.log(message);

// 21.Readonly array
const giriIds: readonly number[] = [1, 2, 3];
console.log(giriIds);

// 22.type alias
type PradeeType = { id: number; username: string };
let pradeeUser: PradeeType = { id: 1, username: "pradee" };
console.log(pradeeUser);

// 23.nested objects
let pradeeProfile = {
  name: "Pradeepa",
  address: { city: "Chennai", pincode: 600028 }
};
console.log(pradeeProfile);

// 24.union array
let pradeeCombo: (number | string)[] = ["Pradeepa", 200];
console.log(pradeeCombo);

// 25.Tuple with optional elements
let giriTuple: [string, number?] = ["Giri"];
console.log(giriTuple);






