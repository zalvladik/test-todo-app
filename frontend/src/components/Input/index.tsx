import { InputProps } from 'src/components/Input/types'

import styles from 'src/components/Input/styles.module.scss'

const Input = ({ onChange, value }: InputProps): JSX.Element => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <input
      value={value}
      className={styles.input}
      type="text"
      placeholder="Enter todo here"
      onChange={handleInputChange}
    />
  )
}

export default Input
