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
                <a href="#"><GithubLogo size={26}  /></a>
                <a href="#"><FacebookLogo size={26}/></a>
                <a href="#"><InstagramLogo size={26} /></a>
                <a href="#"><LinkedinLogo size={26} /></a>
            </div>
            <div className={style.lineLarge}>
                <img src={lineLarge} />
            </div>
        </aside>
    )
}