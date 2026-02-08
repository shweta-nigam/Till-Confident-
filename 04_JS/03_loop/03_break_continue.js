// break -> break the loop and stop it
// continue -> skips the current iteration on loop.

for (let i = 1; i < 10; i++) {
    console.log(i);    // 1 2 3 4 5 
   if(i===5) break;
   console.log(i);     // 1 2 3 4
}
// output:-  1 1 2 2 3 3 4 4  5


for (let i = 1; i < 5; i++) {
    console.log(i);     // 1 2 3 4 
   if(i===3) continue;
   console.log(i);      // 1 2 4 
}
// output  1 1 2 2 3 4 4
