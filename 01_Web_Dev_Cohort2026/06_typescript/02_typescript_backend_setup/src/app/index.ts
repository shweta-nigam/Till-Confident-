// This file encapsulate express.js 
import express from "express"
import type { Application } from "express"  // Application is a TypeScript type representing the Express app.
import todoRouter from './todo/routes.js'


//Routes

export function createServerApplication() :Application {
    const app = express()

    app.use(express.json())

    app.use("/todos", todoRouter)



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

// try in terminal -> curl http://localhost:8080/todos  -- it will return -- {"todos":[]}

// DRY run the whole process of each file and make mind map of connections between the files. And how they handle their single work 

// 
// Theory notes on notion by me finished(14th march 2026) - https://www.notion.so/02_Backend-With-TypeScript-31ff2317f09b80009ecede5b88db366c


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
