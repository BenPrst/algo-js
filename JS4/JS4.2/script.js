function rand10(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(rand10(0, 10));
