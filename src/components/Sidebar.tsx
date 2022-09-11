import {GithubLogo, FacebookLogo, InstagramLogo, LinkedinLogo} from 'phosphor-react'
import lineLarge from '../assets/line-large.svg'
import lineSmall from '../assets/line-small.svg'
import style from './Sidebar.module.css'

export function Sidebar(){
    return(
        <aside>
            <div className={style.lineSmall}>
                <img src={lineSmall} alt="" />
            </div>
            <div className={style.midia}>
                <a className={style.github} href="https://github.com/GustavoFFelipe"><GithubLogo size={26}  /></a>
                <a className={style.facebook} href="https://www.facebook.com/gu.ffelipe19"><FacebookLogo size={26}/></a>
                <a className={style.instagram} href="https://www.instagram.com/gu.ffelipe/"><InstagramLogo size={26} /></a>
                <a className={style.linkedin} href="https://www.linkedin.com/in/gustavoffelipe/"><LinkedinLogo size={26} /></a>
            </div>
            <div className={style.lineLarge}>
                <img src={lineLarge} />
            </div>
        </aside>
    )
}