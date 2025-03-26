import { MultiSelect } from "../Components/MultiSelect";
import styles from "../style/pages/Tests.module.scss";

export const Tests = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header__logo}>
          <img src="images/logo.svg" alt="logo" />
          <div className={styles.header__logo_text}>Affemity</div>
        </div>
      </div>
      <MultiSelect />
    </div>
  );
};
