
import style from './Header.module.css'
import logo from '../assets/logo.svg'

export function Header(){
    return(
        <header className={style.header}>
            <img src={logo}  />
            <nav className={style.navLinks}>
                <a href="#">Home</a>
                <a href="#">Projetos</a>
                <a href="#">Sobre mim</a>
                <a href="#">Contato</a>
            </nav>
        </header>
    )
}