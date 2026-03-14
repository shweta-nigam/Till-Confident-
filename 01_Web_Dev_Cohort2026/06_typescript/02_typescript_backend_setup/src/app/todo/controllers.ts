import type { Request,Response } from "express"
import type {Todo} from "../../schema/todo.schema.js"


class TodoController {
    private _db:Todo[]

    constructor(){
        this._db = []
    }

    public handleGetAllTodos(req:Request,res:Response){
        const todos = this._db
        return res.json({todos})
    }
}

export default TodoController

// why controller with class instead of functions ? 
// Ts interfaces does not handle runtime error, zod handles it. and ZOD is not TS

// therefore:- you have to make interface to code in ts and then again make it's schema as well.