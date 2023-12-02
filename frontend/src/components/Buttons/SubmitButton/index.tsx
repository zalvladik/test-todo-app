import { SubmitButtonProps } from "src/components/Buttons/SubmitButton/types";
import { Colors } from "src/constants";
import styles from "src/components/Buttons/SubmitButton/styles.module.scss";

const SubmitButton = ({
  disabled,
  bgColor,
  sx,
}: SubmitButtonProps): JSX.Element => {
  return (
    <button
      className={`${styles.button} ${sx}  ${
        disabled ? Colors.GRAY_800 : bgColor
      }`}
      disabled={disabled}
      type="submit"
    >
      Submit
    </button>
  );
};

export default SubmitButton;
