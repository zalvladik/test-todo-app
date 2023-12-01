type Collection = {
  id: number
  text: string
  isChecked: boolean
}

export type CreateRequestT = {
  text: string
  collection: Collection[]
}

export type DeleteRequestT = {
  id: number
  collection: Collection[]
}

export type PutChecBoxRequestT = {
  id: number
  isChecked: boolean
  collection: Collection[]
}

export type PutTextRequestT = {
  id: number
  text: string
  collection: Collection[]
}
