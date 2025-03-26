import { useState } from "react";
import styles from "../style/pages/Email.module.scss";

import { Button } from "../Components/Button";
import { Input } from "../Components/Input";

export const Email = () => {
  const [isValid, setIsValid] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header__logo}>
          <img src="/quarks-test-task/images/logo.svg" alt="logo" />
          <div className={styles.header__logo_text}>Affemity</div>
        </div>
        <h3 className={styles.header__title}>You’re almost done!</h3>
        <h4 className={styles.header__text}>
          Please enter your email to see results
        </h4>
      </div>

      <Input setIsValid={setIsValid} />

      <Button path={"/other"} disabled={!isValid}>
        Get result
      </Button>

      <footer className={styles.footer}>
        <img
          src="images/guard_icon.svg"
          alt="guard_icon"
          className={styles.footer__img}
        />
        <div className={styles.footer__text}>
          We respect your privacy and are committed to protecting your <br />
          personal data. We’ll email you a copy of your results for convenient{" "}
          <br />
          access.
        </div>
      </footer>
    </div>
  );
};
