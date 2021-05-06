import IconFacebook from "../IconSvg/IconFacebook";
import IconTwitter from "../IconSvg/IconTwitter";
import IconGoogle from "../IconSvg/IconGoogle";
import IconLinkedin from "../IconSvg/IconLinkedin";
import styles from "./SocialMenu.module.sass";

const SocialMenu = () => {
  return (
    <ul className={styles.socialMenu}>
      <li className={styles.socialMenuEl}>
        <a href="#"><IconTwitter /></a>
      </li>
      <li className={styles.socialMenuEl}>
        <a href="#"><IconFacebook /></a>
      </li>
      <li className={styles.socialMenuEl}>
        <a href="#"><IconGoogle /></a>
      </li>
      <li className={styles.socialMenuEl}>
        <a href="#"><IconLinkedin /></a>
      </li>
    </ul>
  )
};

export default SocialMenu