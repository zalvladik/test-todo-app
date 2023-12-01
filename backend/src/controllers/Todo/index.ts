import type { NextFunction, Request, Response } from 'express'

import {
  CreateRequestT,
  DeleteRequestT,
  PutChecBoxRequestT,
  PutTextRequestT,
} from 'src/controllers/Todo/types'

import TodoService from 'src/services/TodoService'

class TodoController {
  static async create(
    req: Request<{}, {}, CreateRequestT>,
    res: Response,
    next: NextFunction,
  ): Promise<Response> {
    const { text, collection } = req.body
    if (!text || !collection) {
      next(res.status(400).send({ message: 'Required fields are missing' }))
    }

    const result = await TodoService.create(collection, text)

    return res.status(200).send(result)
  }

  static async delete(
    req: Request<{}, {}, DeleteRequestT>,
    res: Response,
    next: NextFunction,
  ): Promise<Response> {
    const { id, collection } = req.body
    if (!id || !collection) {
      next(res.status(400).send({ message: 'Required fields are missing' }))
    }

    const result = await TodoService.delete(collection, id)

    return res.status(200).send(result)
  }

  static async put(
    req: Request<{}, {}, PutChecBoxRequestT>,
    res: Response,
    next: NextFunction,
  ): Promise<Response> {
    const { id, collection, isChecked } = req.body
    if (!id || !collection) {
      next(res.status(400).send({ message: 'Required fields are missing' }))
    }

    const result = await TodoService.put(collection, id, isChecked)

    return res.status(200).send(result)
  }

  static async putText(
    req: Request<{}, {}, PutTextRequestT>,
    res: Response,
    next: NextFunction,
  ): Promise<Response> {
    const { id, collection, text } = req.body
    if (!id || !collection || !text) {
      next(res.status(400).send({ message: 'Required fields are missing' }))
    }

    const result = await TodoService.putText(collection, id, text)

    return res.status(200).send(result)
  }
}

export default TodoController
