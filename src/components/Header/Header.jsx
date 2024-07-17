import { Link } from "react-router-dom"
import logo from "./LogoMain.png"
import styles from "./Header.module.css"
import HeaderLink from "../HeaderLink/HeaderLink"

function Header() {
    return(
        <header className={styles.header}>
            <Link to={"/"} >
            <img src={logo} className={styles.logoContiner} alt="Logo" />
            </Link>
            <nav className={styles.nav}>
                <HeaderLink url={"./"}>
                    Home
                </HeaderLink>
                <HeaderLink url={"./nuevoVideo"}>
                    Nuevo video
                </HeaderLink>
            </nav>
        </header>
    )
}

export default Header