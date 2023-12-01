import { CheckBoxProps } from 'src/components/CheckBox/types'

import CheckBoxOff from 'src/assets/SVG/CheckBoxOff'
import CheckBoxOn from 'src/assets/SVG/CheckBoxOn'

import styles from 'src/components/CheckBox/styles.module.scss'

const CheckBox = ({ isChecked, onClick }: CheckBoxProps): JSX.Element => {
  const handleInputChange = () => {
    onClick(!isChecked)
  }

  return (
    <button type="button" className={styles.checkbox} onClick={handleInputChange}>
      {isChecked ? <CheckBoxOn /> : <CheckBoxOff />}
    </button>
  )
}

export default CheckBox
