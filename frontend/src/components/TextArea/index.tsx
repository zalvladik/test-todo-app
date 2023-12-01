import { TextAreaProps } from 'src/components/TextArea/types'

import styles from 'src/components/TextArea/styles.module.scss'

const TextArea = ({ onChange, placeholder, value }: TextAreaProps): JSX.Element => {
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value)
  }
  return (
    <textarea
      value={value}
      className={styles.text_area}
      placeholder={placeholder}
      onChange={handleInputChange}
    />
  )
}

export default TextArea
