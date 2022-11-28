let x = Number(prompt("Type the rectangle's length."));
let y = Number(prompt("Type the rectangle's length."));

function calcSurface(x, y) {
  return x * y;
}

console.log("The surface of the rectangle is " + calcSurface(x, y));
