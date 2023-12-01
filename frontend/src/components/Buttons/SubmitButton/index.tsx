import { SubmitButtonProps } from 'src/components/Buttons/SubmitButton/types'

import styles from 'src/components/Buttons/SubmitButton/styles.module.scss'

const SubmitButton = ({ disabled, bgColor, sx }: SubmitButtonProps): JSX.Element => {
  return (
    <button
      className={`${styles.button} ${sx}  ${disabled ? 'bg-gray-800' : bgColor}`}
      disabled={disabled}
      type="submit"
    >
      Submit
    </button>
  )
}

export default SubmitButton
