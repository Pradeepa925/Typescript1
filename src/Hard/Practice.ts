// 1: Create a tuple describing Pradeepa's user profile and log each element
let pradeepaProfileHL: [string, number, boolean] = ["Pradeepa", 21, true];
console.log("Q1:", pradeepaProfileHL);

// 2: Create a readonly object for Pradeepa’s account settings
let PradeepaSettings: Readonly<{ theme: string; notifications: boolean }> = {
    theme: "dark",
    notifications: true
};
console.log("Q3:", PradeepaSettings);

// 3.Use a union type variable to store multiple possible types for Pradeepa
let userStatus: string | number | boolean = true;
console.log("Q3:", userStatus);

// 4: Create an enum for Pradeepa’s roles in a system
enum Roles { Admin = "ADMIN", User = "USER", Tester = "TESTER" }
let pradeepaRoleHL: Roles = Roles.Tester;
console.log("Q4:", pradeepaRoleHL);

// 5: Create a nested object type describing Pradeepa’s address
let pradeepaAddress: {
    city: string;
    pin: number;
    geo: { lat: number; long: number };
} = {
    city: "Chennai",
    pin: 600113,
    geo: { lat: 78.01, long: 45.11 }
};
console.log("Q5:", pradeepaAddress);

// 6: Create a generic type for Giri’s response structure
type ApiResponse<T> = { data: T; success: boolean };

let userApi: ApiResponse<{ name: string; age: number }> = {
  data: { name: "Giri", age: 25 },
  success: true
};
console.log("Q8:", userApi);

// 7: Store a function reference inside a variable
let greetPradeepa: (name: string) => string = (name) => `Hello ${name}`;
console.log("Q7:", greetPradeepa("Pradeepa"));

// 8: Use a mapped type to allow optional fields for Pradeepa
type Optional<T> = { [P in keyof T]?: T[P] };
let partialPradeepa: Optional<{ id: number; email: string }> = { id: 101 };
console.log("Q8:", partialPradeepa);

// 9: Use the `unknown` type and narrow it
let pradeepaInput: unknown = "Pradeepa_User";
console.log("Q9:", pradeepaInput);

// 10: Use the never type with exhaustive checking
let giriCheck = (x: string | number): never | void => {
    if (typeof x === "string") console.log("Q10:", x);
    else if (typeof x === "number") console.log("Q10:", x);
    else {
        let n: never = x;
        console.log("Q10:", n);
    }
};

// 11: Create a complex array type storing different datatypes
let pradeepaMultiList: (string | number | boolean | object)[] = [
    "Pradeepa", 101, true, { dept: "QA" }
];
console.log("Q11:", pradeepaMultiList);

// 12: Store function overload signatures in a variable
type Over = {
    (x: number): number;
    (x: string): string;
};
let pradeepaOver: Over = (x: any) => x;
console.log("Q12:", pradeepaOver("Pradeepa"));

// 13: Deep nested object with multiple levels
let deepData: { 
    user: {
        name: string;
        records: {
            lastLogin: string;
            devices: string[];
        };
    };
} = {
    user: {
        name: "Pradeepa",
        records: { lastLogin: "2026-01-28", devices: ["Tablet", "Smartwatch"] }
    }
};
console.log("Q13:", deepData);

// 14: Create a function type variable with generic constraint
let PradeepaGenericFn: <T extends string | number>(value: T) => T = (v) => v;
console.log("Q14:", PradeepaGenericFn("Pradeepa"));

// 15: Create a tuple with rest elements
let pradeepaRestTuple: [string, ...number[]] = ["Pradeepa", 10, 20, 30];
console.log("Q15:", pradeepaRestTuple);

// 16: Create a Record type for storing Pradeepa’s scores
let pradeepaScores: Record<string, number> = {
    test1: 88,
    test2: 93,
    test3: 78
};
console.log("Q16:", pradeepaScores);

// 17: Use keyof with variable to dynamically pick a type
type Car = { brand: string; year: number; electric: boolean };
let carKey: keyof Car = "brand";
console.log("Q17:", carKey);

// 18: Create a variable with a recursive type
type NestedList = (number | NestedList)[];
let pradeepaNestedNumbers: NestedList = [1, [2, [3, 4]]];
console.log("Q18:", pradeepaNestedNumbers);

// 19: Create interface and assign data to a variable
interface PradeepaInfo {
    id: number;
    name: string;
    dept: string;
}
let pradeepaObj: PradeepaInfo = { id: 11, name: "Pradeepa", dept: "Automation" };
console.log("Q19:", pradeepaObj);

// 20: Class-based typed variable
class PradeepaClass {
    user: string;
    level: number;
    constructor(u: string, l: number) { this.user = u; this.level = l; }
}
let pradeepaInstance: PradeepaClass = new PradeepaClass("Pradeepa", 5);
console.log("Q20:", pradeepaInstance);

// 21: Use conditional types inside a variable type
type IsNumber<T> = T extends number ? "num" : "other";
let pradeepaCond: IsNumber<number> = "num";
console.log("Q21:", pradeepaCond);

// 22: Create an array of tuple objects
let pradeepaTupleArr: [string, number][] = [
    ["Score1", 88], ["Score2", 95]
];
console.log("Q22:", pradeepaTupleArr);

// 23: Variable storing a function returning another function
let pradeepaHigherOrder: (x: string) => () => string =
    (x) => () => `Hello ${x}`;
console.log("Q23:", pradeepaHigherOrder("Pradeepa")());

// 24: Complex union with nested objects
let pradeepaUnion: { name: string } | { id: number; dept: string } = {
    id: 101,
    dept: "QA"
};
console.log("Q24:", pradeepaUnion);

// 25: Variable using readonly array type
let pradeepaReadOnlyArr: readonly string[] = ["Pradeepa", "Automation", "TS"];
console.log("Q25:", pradeepaReadOnlyArr);