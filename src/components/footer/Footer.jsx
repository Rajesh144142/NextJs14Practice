import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>RajeshDev</div>
      <div className={styles.text}>
        Rajesh Kumar Halder creation © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;