import Link from 'next/link'
import styles from "./NavFooter.module.sass";

const NavFooter = () => {
  const data = [
    { id: 1, link: "Home", href:"/home" },
    { id: 2, link: "How it works", href:"/how" },
    { id: 3, link: "Premium", href:"/premium" },
    { id: 4, link: "Free analysis", href:"/free" },
    { id: 5, link: "Blog", href:"/blog" },
    { id: 5, link: "Research", href:"/research" },
    { id: 5, link: "Contact", href:"/contact" },
  ];
  return (
    <>
      <ul className={styles.nav}>
        {data.map((link) => (
          <li className={styles.navLink} id={link.id}>
            <Link href={link.href}>
              <a>{link.link}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
};

export default NavFooter
