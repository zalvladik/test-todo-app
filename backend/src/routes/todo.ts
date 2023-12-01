import { Router } from 'express'

import TodoController from 'src/controllers/Todo'
import { RoutesPath } from 'src/routes/types'

const router = Router()

//✔️ ❌

router.post(RoutesPath.TODO, TodoController.create) //✔️

router.delete(RoutesPath.TODO, TodoController.delete) //✔️

router.put(RoutesPath.TODO, TodoController.put) //✔️

router.put(RoutesPath.TODO_TEXT, TodoController.putText) //✔️

export default router
