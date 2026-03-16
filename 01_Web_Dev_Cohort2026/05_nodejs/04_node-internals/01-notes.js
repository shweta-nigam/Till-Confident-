

//1. work of setImmediate():
// setImmediate() schedules a callback to run on the next iteration of the event loop, specifically in the check phase.

// Example:

setImmediate(() => {
  console.log("Immediate executed");
});

// Meaning:
// Run this callback after the current event loop cycle finishes  // v.imp line


