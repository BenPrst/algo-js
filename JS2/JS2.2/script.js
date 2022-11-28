const min = Number(prompt("Enter min", ""));
const max = Number(prompt("Enter max", ""));
const current = Number(prompt("Enter current", ""));

if (min < current && current < max && min < max) {
  console.log("OK");
} else if (min > max) {
  console.log("u think ur smart");
}
