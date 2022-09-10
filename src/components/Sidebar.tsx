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
                <a className={style.github} href="#"><GithubLogo size={26}  /></a>
                <a className={style.facebook} href="#"><FacebookLogo size={26}/></a>
                <a className={style.instagram} href="#"><InstagramLogo size={26} /></a>
                <a className={style.linkedin} href="#"><LinkedinLogo size={26} /></a>
            </div>
            <div className={style.lineLarge}>
                <img src={lineLarge} />
            </div>
        </aside>
    )
}