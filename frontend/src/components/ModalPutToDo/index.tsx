import { useState } from 'react'

import ActionButton from 'src/components/Buttons/ActionButton'
import CloseIcon from 'src/assets/SVG/CloseIcon'
import TextArea from 'src/components/TextArea'
import Title from 'src/components/Title'
import SubmitButton from 'src/components/Buttons/SubmitButton'

import usePutTodo from 'src/hooks/usePutTodo'

import { useModal } from 'src/components/ModalContext'

import styles from 'src/components/ModalPutToDo/styles.module.scss'

const ModalPutToDo = (): JSX.Element => {
  const { mutate, isLoading } = usePutTodo()
  const { closeModal, modalData } = useModal()

  const [text, setText] = useState('')

  const handleInputChange = (value: string): void => {
    setText(value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!text.trim()) {
      return
    }
    mutate({ text, id: modalData })
  }

  return (
    <div className={styles.overlay_page}>
      <form className={styles.overlay_page__modal} onSubmit={handleSubmit}>
        <div className={styles.modal_buttons}>
          <SubmitButton
            sx="p-0 px-2 mr-2"
            bgColor="bg-blue-500"
            disabled={isLoading}
          />
          <ActionButton
            bgColor={'bg-red-500'}
            onClick={() => closeModal()}
            icon={<CloseIcon />}
          />
        </div>
        <div className={styles.modal_title}>
          <Title text="Update Todo" />
        </div>

        <TextArea
          value={text}
          onChange={handleInputChange}
          placeholder="Type the text..."
        />
      </form>
    </div>
  )
}

export default ModalPutToDo
