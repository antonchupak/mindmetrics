import React from 'react';
import styles from "./Layout.module.sass";
import Nav from "./Nav/Nav";
import NavFooter from "./NavFooter/NavFooter";
import Button from "./Button/Button";
import SocialMenu from "./SocialMenu/SocialMenu";

export default function Layout({children}) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerWrap}>
            <a className={styles.logo}>
              <img src="./logo-white.svg" alt="logo" />
            </a>
            <div className={styles.navContainer}>
              <Nav/>
              <Button>Get Free Assessment</Button>
            </div>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerWrap}>
            <div className={styles.footerRow}>
              <NavFooter/>
              <div>
                <SocialMenu/>
              </div>
            </div>
            <div className={styles.footerRow}>
              <span className={styles.copyright}>® MindMetrics Technology - All rights reserved.</span>
              <a className={styles.logo}>
                <img src="./logo-gray.svg" alt="logo" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}