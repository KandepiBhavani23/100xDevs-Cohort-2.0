/*

*
* *
*   *
* * * *

*/

let n = 5;
let res = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i == j || i == n || j == 1) {
      res += "* ";
    } else {
      res += "  ";
    }
  }
  res += "\n";
}

console.log(res);
