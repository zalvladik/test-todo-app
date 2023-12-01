import { ActionButtonProps } from 'src/components/Buttons/ActionButton/types'

import styles from 'src/components/Buttons/ActionButton/styles.module.scss'

const ActionButton = ({
  icon,
  bgColor,
  onClick,
  disabled,
}: ActionButtonProps): JSX.Element => {
  return (
    <button
      className={`${styles.action_button} ${disabled ? 'bg-gray-800' : bgColor}`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
    </button>
  )
}

export default ActionButton
