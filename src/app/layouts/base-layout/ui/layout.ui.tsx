import { FC } from "react";

import styles from "./layout.module.scss";

export const App: FC = () => {
  return (
    <div className={styles.app}>
      <div className={styles.layout}></div>
    </div>
  );
};
