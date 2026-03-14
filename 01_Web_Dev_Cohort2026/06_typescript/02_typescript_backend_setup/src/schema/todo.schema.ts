// schema = validation = model 
import { z } from 'zod'

export const todoValidationSchema = z.object({
    id: z.string().describe('ID of the todo'),
    title: z.string().describe('title of the todo'),
    description: z.string().optional().describe('description for the todo'),
    isCompleted: z.boolean().default(false).describe('if the todo item is completed or not')
})

export type Todo = z.infer<typeof todoValidationSchema>    // this writes todo interface automatically


// -------- therefore this code is not needed:
// export interface ITodo {   // I - interface
// id:string,
// title:string,
// description:string,
// isCompleted: boolean
// }


// NOTE: Zode make ts typing on the go!
// Now run time validation and compile time validation can be handled easily with TS+zode 