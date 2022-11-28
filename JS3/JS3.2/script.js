let arr1 = [1, 2, 3, 4, 5];
let arr2 = [100, 101, 102];
let x = 0;
let y = 0;

for (let elem of arr1) {
  console.log((y = (x += elem) / arr1.length));
}

// for (let elem of arr2) {
//   console.log(y = (x += elem) / arr2.length);
// }
