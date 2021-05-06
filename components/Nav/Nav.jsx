import Link from 'next/link'
import styles from "./Nav.module.sass";

const Nav = () => {
  const data = [
    { id: 1, link: "About", href:"/about" },
    { id: 2, link: "Contact", href:"/contact" },
    { id: 3, link: "Sign in", href:"/signin" },
  ];
  return (
    <ul className={styles.nav}>
      {data.map((link) => (
        <li className={styles.navLink} id={link.id}>
          <Link href={link.href}>
            <a>{link.link}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
};

export default Nav
