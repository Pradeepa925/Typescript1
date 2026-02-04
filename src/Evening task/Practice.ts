// 1.Diamond star pattern using do
let n = 4;
let i = 1;
do {
  let row = "";
  let s = 1;
  do {
    row += "  ";
    s++;
  } while (s <= n + (n - i));
  let j = 1;
  do {
    row += "* ";
    j++;
  } while (j <= 2 * i - 1);
  console.log(row);
  i++;
} while (i <= n);
i = n - 1;
do {
  let row = "";
  let s = 1;
  do {
    row += "  ";
    s++;
  } while (s <= n + (n - i));
  let j = 1;
  do {
    row += "* ";
    j++;
  } while (j <= 2 * i - 1);
  console.log(row);
  i--;
} while (i >= 1);

// 2.Star pattern using for loop

let n1 = 5;
for (let i = 1; i <= n1; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

// 3.)
let str="GIRI";
for (let i=0;i<str.length;i++){
    let line=" ";
    for (let spaces=0;spaces<i*2;spaces++){
        line+=" ";
    }
for(let j=i;j<str.length;j++){
    line+=str[j]+" ";
}
console.log(line);
}

// 4.)
let word: string = "IRIG";
for (let i = word.length; i >= 1; i--) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row += word[j];
    if (j < i - 1) {
      row += " ";
    }
  }
  console.log(row);
}

// 5.)spl character using for loop
let matrix: string[][] = [
  ["$", "@", "#"],
  [">", "@", "@"],
  ["<", "@", "="]
];
for (let i = 0; i < matrix.length; i++) {
  let row = "";

  for (let j = 0; j < matrix[i].length; j++) {
    row += matrix[i][j] + " ";
  }
  console.log(row);
}

// 6.)not equal to
let result1 = "";
for (let i = 0; i < 7; i++) {
  if (i % 2 != 0) {
    result1 += "1 ";
  } else {
    result1 += "0 ";
  }
}
console.log(result1);

// 7.)not equal to
let result2 = "";
for (let i = 0; i < 7; i++) {
  if (i % 3 != 0) {
    result2 += "1 ";
  } else {
    result2 += "0 ";
  }
}
console.log(result2);




