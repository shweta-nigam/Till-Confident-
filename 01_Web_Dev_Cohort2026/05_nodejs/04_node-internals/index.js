console.log("A");

setTimeout(() => {
  console.log("B");

  process.nextTick(() => {
    console.log("C");
  });

  Promise.resolve().then(() => {
    console.log("D");
  });

}, 0);

Promise.resolve().then(() => {
  console.log("E");

  setTimeout(() => {
    console.log("F");
  }, 0);

});

process.nextTick(() => {
  console.log("G");
});

setImmediate(() => {
  console.log("H");
});

console.log("I");
