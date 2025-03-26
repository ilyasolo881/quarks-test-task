import React, { useState, useEffect } from "react";
import cn from "classnames";

import styles from "../style/components/Input.module.scss";

interface InputProps {
  setIsValid: (isValid: boolean) => void;
}

export const Input: React.FC<InputProps> = ({ setIsValid }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, 500);

    return () => clearTimeout(handler);
  }, [value]);

  useEffect(() => {
    if (!isTouched) return;

    if (!debouncedValue) {
      setTimeout(() => {
        setError("Поле не повинно бути пустим");
        setIsValid(false);
      }, 500);
    } else if (!validateEmail(debouncedValue)) {
      setError("Не вірний формат пошти");
      setIsValid(false);
    } else {
      setError("");
      setIsValid(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue, isTouched]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (!isTouched) setIsTouched(true);
  };

  const handleBlur = () => {
    setIsTouched(true);
    if (!value) {
      setTimeout(() => {
        setError("Поле не повинно бути пустим");
        setIsValid(false);
      }, 500);
    }
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        type="email"
        value={value}
        placeholder="example@gmail.com"
        className={cn(styles.input, {
          [styles.input__validated]: error === "",
          [styles.input__error]: error !== "",
        })}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {isTouched && error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};
