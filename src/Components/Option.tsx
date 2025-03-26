import { FC } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../style/components/Option.module.scss";

interface OptionProps {
  children?: React.ReactNode;
  path: string;
}

export const Option: FC<OptionProps> = ({ children, path }) => {
  const navigate = useNavigate();

  return (
    <button className={styles.option} onClick={() => navigate(path)}>
      {children}
    </button>
  );
};
