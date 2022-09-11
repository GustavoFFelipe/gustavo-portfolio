
import { Banner } from './components/Banner'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import './global.css'
import style from './App.module.css'
import { Projetcs } from './components/Projects'
import { About } from './components/About'
import { Footer } from './components/Footer'

const project = [ 
  {
    id: 1,
    projectData: {
      urlLink: 'https://coffeelandhishere.netlify.app/',
      imgUrl: 'https://lh3.googleusercontent.com/KPQNovTjJeoLNP8VXdWE4TAQbNf3JZ3nV8HT-3TUcviv7Mozqa6cjag6LDIt6XTQA4ecsVvVjfFFyMOtNDFSEBNO1lZNvSeyMlY7_3LuAVAyF_OAcfJu3lLDZSoQFXCJLrBpgtOG7hqy28oG7Agsor647a1ROIwoMMyeP_pgzLzZP8P_h1OKIMZ8AHcgHYaX_KnymZhA0EqUX7PuFdXMpg_OND2PhP5JXjkwmdGxaS8EB_fTjrq2uYaRg5HlcdLRcUKYwjwg1H41bl7X3RXzwOr0RAFyZwxig5dHi6M_ZvS2CTHDplofOznFjRyJeVGkaXGMP8f2AVLER2FgMhcYxKDMd9DWpEblCpYTGZlby8f6jRJ_zwmHi_TOg_qffbHQhN2x5nVvm362VwIAptdhb89Ud6yFYD5vR0OIKPww3e5Z1DzlRkggbKV4iiF0QkdXyZkgt16ta8Z5pjYCpUgV4MaSdYaLa9E24AeO4_TWj2mtXCpc-FTy94CEMggioJmyh1svSrg0I17coA7g_3OjQVnDVT0FHe26BzJY_uldaEX_dp44D6Zo_vsDJZG8zozDDroiM92sknaNg09nK7NUi7OSRgy2Dfo5hrOpiYLdz5ufcYn5wjGvfX8UH5QCZvIYLKLrWm99eJntxi48jGSqgBVjwFVMlZO3UPxGj4Vl5_tqDYI8Ugy4j9S3GkJQyW8vt4PhY954aMKFM786Ex_wvPSF5ZfC-32Yim_9I078plz0qEQrAm6xqKfcYtr6Aj2J99AItpdHoPL6PhIeWGcmSW4Zs2cRf1V4LPU=w1080-h615-no?authuser=0',
      title: 'Coffeland é o mais novo modo de comprar café.',
      footer: 'Study-Case'
    }
  }, 
  {
    id: 2,
    projectData: {
      urlLink:'https://ignitefeed-ts.netlify.app/',
    imgUrl: 'https://lh3.googleusercontent.com/R_i4mcp37ZCygyqgY1-6nvt_Gy3kZGzL8fr1zcXkXtbtLZpqYCyoUX0Ea8IeprnxifIYCooRPED1V13m6RLIHLaQyeJxmwM_OCJjeSNoTrt0QaHGs010Kh1ZEYixqX6oR7kHkz9ycaQLYGVxniyM6pHATCcJhTS2J2ievGEocgP8vP4amW6S-CdoKv86V21WX6Ydm_cWK3_GWEZ6CG2POImKK3AP4cerESwFqk-N0iCGDxXJ3odqYl1yeMbyvbp6qWLDMWaKaLQXqe2tEs4Z8CEZM-XMM8g-BTK__1_2C9w-iSZkw9aToac_7XkxHklni3j5AgedURoItu-RRfeLMmMDBsrxAsXf_pfzMDgzKmfB7GXI0m6-Z4Wpe2ohyW5cZkj3ayLqiZLJfK_3-A7EPqFiTyEixVZIemxXsr_oZ8oMlFor0csyyQiOv7dQ-15MTbw-3th4nraxTyA4Mn1zb8AntgjdvZ-YAlZbQw1zZ4jPN9bHuHZ5v2q0BYNNI4etBRN7hL4bN6J0ZnkOfybygefyJB4dHet0cpp4qwxl9UrwOiBFBbdw2CpHejp9YHAvtrMaAO8GaU_aoQf1och4Dy1Vtc0MxXJWMvy7X3VCC4utCtAX9zD2f8XN0SjVvPELZYyA0tTOL12CW4vWNA1cUtAubP6FlhsZDzoQERdfOShFpp4l_EE4aIkSTM5CKFsBdLijow0QECLw156Xdnio4HvjZIT_OB2WkCPsAjz_0mE4VW1VZpXLwdnobwP2T8ywveqkWJZzJlD_DqmsURpRrFaG8xF_3lKcXmA=w749-h615-no?authuser=0',
    title: 'Ignite Feed, exponha sua idéias.',
    footer: 'Study-Case'
  }
},
{
  id: 3,
    projectData: {
      urlLink:'https://gustavofelipeold.netlify.app/',
    imgUrl: 'https://lh3.googleusercontent.com/oG8F7a3AIWoD4lRL6K-BDNgg8jv4KQeA25WXxhOKOY4DW76vsBHRRyUvfI7Ea0cwAscUOK2PavG58S2wVI6p1P2SSNeG5mrvaS8azo2z3vvm_Bo3N5n6DOYMckJh_PcoRTSIQZ-DqgGOtoMwMZ9_azl7aGVR65epQBG90CKIGVf2Kc8cWf4ImGktKZFgdFULkgUzU6-wNDCuKVZ5Ob3FMMnYXFfCj7j9vhXYMvZlrmZsRVaUExY8llmtbcBdZ3ibNY1liHQM5axudbnWREIDmQEL9jbmwF8VtEiG0_JabVrQXuGeOx_K737pTa2eJtw8a6tn4E1JkCWkWUOtObunerdiXXWcrCYRLrNcpkSWI5qaVg9otDJt-AB2tV4ICMAGZFjKFoUeUH_pvsPBEF3z0kyL-zhnZ2ZzVXZcvpRcZQdZj59r_hJOX9gm7OMfLwo9tyLl2mQGPTaewKtfxrjzfJIGY1ErZuFqg4Eld11KXmE4bmAYeEcD0bDZI20qW6q4qYTSwLnop3pP-qffcMK9eeq-QmWonTboG_B4ICg2W9t4W49gCAHjnPFHWRmMLqG6lQCtFTL83WQreMs9Itfsc8xn3CFGBrjnzOLROrp9vtdOi9E1hI9VPQxtTDoa26x9_govfxWuYtF9CC7IJHwyJNZ_BokCQfZ9xyDZPCxUfe2Xklb5ZAAeuAaINa82gG_PxIhOCf7tuTwB_46h2iBar1IOngxjIbgwcVTb0s5LkHBEYOefntLt_f0umYGmqZeEEgigbakyX3_jG3WKvPtz2akvYLYQ6GqNmjk=w439-h264-no?authuser=0',
    title: 'Antigo portfólio venha conferir e ver o crescimento.',
    footer: 'Study-Case'
}
},
{
id: 4,
    projectData: {
      urlLink:'https://foxriver.netlify.app/',
    imgUrl: 'https://lh3.googleusercontent.com/SxvVK53sUJmW-Ddk1CX_ez_iHBe1SwMPzU7sdg2pCebX9pEbEtYw1fpmvQ6e8c58DGmbUW8qqqE69ER1uAjqTV9WzhM3lQznlPmeDL1V0vBe6Yd2kGjHUBtID0_BUZ4ugOI902nwCZimzzbikW2YqFAp5ewC6n3MveNHiUr-oayKGLJ4LTZ8g0lJooNBRhUBTgOsSTiSch2QG7ZGntHnXLZ3Ar011kQgVwHVTHBbo73lbh2cJ18_heB2CUs0XRcfXBRn96zw1MNJcpDODq__cAr14u5wO7V41JF_AMSKDXGsexHifgOawmtOeHO--LhK14oW8F-Ax0I9l2nrXfUhNmg-QQBAj2YTogj8_5gSQIOnEDLsWkJaMk9-oZ0FwHxJ5x67riPvkflx5ZLMATrlGWG9brvbT2U9SaKyS3ivGAVsN64LpJlrOuBecYEpGEzJpbXjYPWi2FX33mJLLmaR_m-o8Oapy37p8_wKwq4prhSakLQk3Sr4B680yQ65NgSF-915A-WWbLAy8zXGxT7HdVMNAFQItt4MBTmawO85sbcK3fgBodjAtbLliluTNrwUa8wP_xVcbCcmRGSTKCXPdVxBoWteBVAS5V_IgHswRtSyRNn3gCV61wohvrK-NWQyt6bo6xd943cOG799h0adDXRbXOw3bzhkoUjUvv-3HmK2wV4yVH9iCFdHXavc2aQPv9TvHjv2pqiNWBjzdA4gcvSEQuOlF4xKLYaT6k38bd7bbYmf6lXFsDpBeW0jfClMmdttxFeB_LTugj3np41Ai1OMtIfCHc2rGfU=w934-h615-no?authuser=0',
    title: 'Fox River NFT\'S onde você encontra os melhores',
    footer: 'Study-Case'
    },
}

  
]

function App() {


  return (
    <div className="App">
      <Header />
      <article className={style.mainContent}>
        <Sidebar  />
        <Banner />
        <main className={style.wrapper}>
        {project.map(content => {
        return(
          <Projetcs 
          key={content.id}
            content={content.projectData}
          /> 
        )
      })}
        </main>
      </article>
      <div className={style.about}>
              <About />
              <Footer />
      </div>
    </div>
  )
}

export default App
