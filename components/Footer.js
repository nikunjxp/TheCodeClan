import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>
        Made with 💖 by{" "}
        <a
          href="hhttps://nikunjxp.github.io/TheCodeClan/"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          TheCodeClan
        </a>
      </p>
      <p className={styles.text}>
        Powered by{" "}
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          NextJS
        </a>
        ,{" "}
        <a
          href="https://npmjs.com/package/react-cropper"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          React-cropper
        </a>{" "}
        and{" "}
        <a
          href="https://netlify.com"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          Netlify
        </a>
      </p>
    </div>
  );
};

export default Footer;
