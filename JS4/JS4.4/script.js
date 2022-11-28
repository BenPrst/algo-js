function rand10(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function multiRand(min, max) {
  return Array.from({ length: rand10(min, max) }, () => rand10(min, max));
}

console.log(multiRand(0, 10));
