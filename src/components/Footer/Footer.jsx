import React from 'react'
import styles from "./Footer.module.css"
import logo from "./LogoMain.png"

export default function Footer() {
  return (
    <footer className={styles.footer}>
            <img src={logo} className={styles.logoContiner} alt="Logo" />
    </footer>
  )
}
