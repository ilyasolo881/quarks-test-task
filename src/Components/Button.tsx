import styles from "../style/components/Button.module.scss";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  path: string;
  children?: React.ReactNode;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({ path, children, disabled }) => {
  const navigate = useNavigate();

  return (
    <button
      className={styles.button}
      onClick={() => !disabled && navigate(path)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
