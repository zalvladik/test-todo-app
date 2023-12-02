import { InputProps } from 'src/components/Input/types'

import styles from 'src/components/Input/styles.module.scss'

const Input = ({ onChange, value }: InputProps): JSX.Element => {

  return (
    <input
      value={value}
      className={styles.input}
      type="text"
      placeholder="Enter todo here"
      onChange={(e) => {onChange(e.target.value)}}
    />
  )
}

export default Input
