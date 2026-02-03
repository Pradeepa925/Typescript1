let rows = 5;
let i = 1;

do {
  let row = "";

  // spaces
  let s = 1;
  do {
    row += "  ";
    s++;
  } while (s <= rows - i);

  // stars
  let j = 1;
  do {
    row += "* ";
    j++;
  } while (j <= i);

  console.log(row);
  i++;

} while (i <= rows);
