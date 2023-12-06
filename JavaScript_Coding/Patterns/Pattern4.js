/*
        * 
      * * 
    * * * 
  * * * * 
* * * * * 

*/

let n = 5;
let res = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (j <= n - i) {
      res += "  ";
    } else {
      res += "* ";
    }
  }
  res += "\n";
}

console.log(res);
