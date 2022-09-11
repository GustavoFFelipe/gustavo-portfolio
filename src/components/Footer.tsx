import style from './Footer.module.css'
import { useState } from 'react';
import { FormPopUp } from './FormPopUp';

export function Footer(){
    const [openModal, setOpenModal] = useState(false);

    return (
        <footer className={style.footerContainer}>
            <div className={style.footerLinks}>
                <a href="#home">Home</a>
                <a href="#projects">Projetos</a>
                <a href="#about">Sobre mim</a>
                <a href="#contact">Contato</a>
            </div>
            <div >
                <span className={style.copy}>Todos os direitos reservados. 2022</span>
            </div>
            <div className={style.contact}>
                <span className={style.number}>
                    +55 (32) 9 9853-8036
                    </span>
                <a href="#contact">
                <button className={style.buttonPopForm}>
                    Vamos nessa juntos.
                </button></a>
            </div>

        </footer>
    )
}