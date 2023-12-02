import { TextAreaProps } from "src/components/TextArea/types";

import styles from "src/components/TextArea/styles.module.scss";

const TextArea = ({
  onChange,
  placeholder,
  value,
}: TextAreaProps): JSX.Element => {
  return (
    <textarea
      value={value}
      className={styles.text_area}
      placeholder={placeholder}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
};

export default TextArea;
