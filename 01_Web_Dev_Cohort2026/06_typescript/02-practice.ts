
//1.
function add(a : number,b: number) : string{ // string here indicate the typeof return output
    return a.toString() + b.toString()
}

const result: number = parseInt(add(3,3))
console.log(result)

// now can you run this code? ---> no ❌ 'ts-node' is not recognized as an internal or external command
// you cannot run ts file
// because nodejs and browser both executes js code and not ts code.
// typescript is not meant to be run directly.
// you have to compile it first then run it 
// to install ts globally -> sudo npm i typescript -g
// run -> tsc --version
// to compile the ts file to js run -> tsc filename.ts
// --- if it got compiled then there is no error otherwise it will throw error
// we keep and push ts files on github then it compiles and then pushed on server

