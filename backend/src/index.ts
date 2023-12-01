import express from 'express'
import cors from 'cors'

import todo from 'src/routes/todo'

const app = express()

const port = 8080

app.use(cors({ origin: 'http://localhost:5173' }))

app.use(express.json())

app.use('/', todo)

const start = async (): Promise<void> => {
  try {
    app.listen(port, () => console.log(`Server started on PORT = ${port}`))
  } catch (e) {
    console.log(e)
  }
}

start()
