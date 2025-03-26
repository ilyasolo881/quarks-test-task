import { useNavigate } from "react-router-dom";

import styles from "../style/pages/Home.module.scss";

import { Option } from "../Components/Option";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header__logo}>
          <img src="/quarks-test-task/images/logo.svg" alt="logo" />
          <div className={styles.header__logo_text}>Affemity</div>
        </div>
        <h3 className={styles.header__title}>
          Change your{" "}
          <span className={styles.header__title_text}>love life </span>
        </h3>
        <h4 className={styles.header__text}>
          with easy-to-use practical tips that you can <br />
          apply in any situation
        </h4>
      </div>

      <div className={styles.diagram}>
        <img
          className={styles.diagram__img}
          src="/quarks-test-task/images/diagram.svg"
          alt="diagram"
        />
      </div>

      <div className={styles.options}>
        <div className={styles.options__title}>What is your main goal?</div>
        <div className={styles.options__container}>
          <Option path="/tests">Build a deep connection</Option>
          <Option path="/tests">
            Create emotional <br /> attraction
          </Option>
        </div>
        <button
          className={styles.options__footer}
          onClick={() => navigate("./other")}
        >
          Other
        </button>
      </div>

      <div className={styles.footer}>
        By continuing, you agree to our Terms of Service | <br />
        Privacy Policy <br />
        2024 © All Rights Reserved.
      </div>
    </div>
  );
};
