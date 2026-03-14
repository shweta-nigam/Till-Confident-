import { Router } from 'express'
import TodoController from './controllers.js'

const router: Router = Router()
const controller = new TodoController() // why?

router.get('/', controller.handleGetAllTodos.bind(controller))
// router.get('/:id')

router.post('/', controller.handleInsertTodo.bind(controller))

// router.put('/:id')
// router.delete('/:id')

export default router