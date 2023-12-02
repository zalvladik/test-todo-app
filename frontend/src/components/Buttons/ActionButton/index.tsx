import { ActionButtonProps } from "src/components/Buttons/ActionButton/types";

import styles from "src/components/Buttons/ActionButton/styles.module.scss";

import { Colors } from "src/constants";

const ActionButton = ({
  icon,
  bgColor,
  onClick,
  disabled,
}: ActionButtonProps): JSX.Element => {
  return (
    <button
      className={`${styles.action_button} ${
        disabled ? Colors.GRAY_800 : bgColor
      }`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
    </button>
  );
};

export default ActionButton;
