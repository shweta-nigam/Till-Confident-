// This file encapsulate express.js 
import express from "express"
import type { Application } from "express"  // Application is a TypeScript type representing the Express app.

//Routes

export function createServerApplication() :Application {
    const app = express()

//clubbing the code (how want it)
// #region //*==== Routes ==============  
app.get("/", function(req,res) {
    return res.json({message: "Hello!"})
})

app.get("/hello", function(req,res) {
    return res.json({message: "Hello and Bye!"})
})
// #endregion //*======= Routes ==============  

    return app
}


// note: The whole project fils follow - single responsibility model 
//1. This file is concern about handling request.
// 2. It does not concern itself with PORT and how a request came/on which port.

// 3. export function createServerApplication() :Application {
// This function builds the Express app and returns it.
// This pattern is used because it makes the app:
// modular
// testable
// reusable


// for now reg not working of .vscode (check again)