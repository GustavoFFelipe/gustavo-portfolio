
import style from './Header.module.css'
import logo from '../assets/logo.svg'

export function Header(){
    return(
        <header id="home" className={style.header}>
            <img src={logo}  />
            <nav className={style.navLinks}>
                <a href="#home">Home</a>
                <a href="#projects">Projetos</a>
                <a href="#about">Sobre mim</a>
                <a href="#contact">Contato</a>
            </nav>
        </header>
    )
}