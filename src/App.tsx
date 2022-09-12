
import { Banner } from './components/Banner'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import './global.css'
import style from './App.module.css'
import { Projetcs } from './components/Projects'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { FormPopUp } from './components/FormPopUp'
import './assets/coffee.png'

const project = [ 
  {
    id: 1,
    projectData: {
      urlLink: 'https://coffeelandhishere.netlify.app/',
      imgUrl: 'https://lh3.googleusercontent.com/wPge2A_OF-qx5_65dCWfyoAI_gqawx1q_uMob0JgXhYyGkgdFuWWXUhYVpDCJNlN0ECYV2kTEev96LeZ1G0Hb3fCszojo-ufK_81jQDUsbDWG3apukc_z2Qk61geFKlBLrvEhDsESS1PIt2pYp7PNnW2Pp1YGXPTMkJbblgBRRy_IStePbNnRiXzO7tGyNKwFq6zmzogI-hA8y0DqAlDHZ2ywaPssSprDGcD7E8RUvOAK6TX-JDU4jRL1GI9COzvHHuIZV5E9bSoHe2r1EiDpwrIkk6adpRBrSM8vvKOD5bMpDZGscPVCI8xlEj0FEHTZ-1_qjaM7TDrB56WsxyGUP5v6QUnJPXtvzzn3f8KEpSHPnFP9K46LdaBDlKpf7iVL164FTjrVaLRiv0_DtKc4fgsGjB1AIr3_-6aaJFQrz-XCdoXU4ngzKEy1l6VRNZQHZJJ3QHVe0_QL-K_G4lDypHONdCUTXzPhE-AQ-4tK-Y3iO4EQKSvOn0TNVfYgPKC2lgvFDuYR0Vt9ifTe9RsEj0TKL54Z511WlMnhXta9_2dZ0VNPlw8v-7EnqqYqaSWma08RlyMn38gU8UtfXQ0q9Be8PEbAKHN2h2VnUlUwPEkyV_uQr4s0fALdih7K2HSu9qqdPb5ALZc_Tjj5VM8KsB15s92-RKFTXLJTSy-GlKODn8kRhPuGJxe_Gx6hCHjyUIZcWzU4h92FMDdnPYJxuJTQzLLSiu0A1hqy4s6qUx1dRfgMXCyEsFQ4MaZ2g=w1080-h615-no?authuser=0',
      title: 'Coffeland é o mais novo modo de comprar café.',
      footer: 'Study-Case'
    }
  }, 
  {
    id: 2,
    projectData: {
      urlLink:'https://ignitefeed-ts.netlify.app/',
    imgUrl: 'https://lh3.googleusercontent.com/lJKJwjvtJI6hKuEGSfZMsQsouDap6WlWkraQtXXOflRNNE2I8nVh8nrdeEENyzYcTuueodL7lNM04McojUc9eOBTHAbFJj5JeSFYjgm-z9AmPhfSsJq-Lh00e4Kqf17c8oduQYKdqhTWNptKjei1WvI3_LDlKTBiDOwEuFohn0LtVMnU7eyou5KW1KgZxZAW1RdwFfNjIRIE_R5YHpRWPLqXq5vwZJkfjNeKYNyTY4vyMuUQyZ5jRwRbaS6ImEkIKyxN7I9xgzWQb9_EtuPRwbJRb-bau_-e6x2e3MZ3ywCOgzgc-jbo-aqZzm0YZBmJ-qQ7OGSYBM7h49ubvQ9lwWKszwOH8n43dUCYhUhtn4TgNwqaFUIZCC7VRgoXTjDnNbCF-sxqLXrG-CWWAjE4IArIYq3c156jvRRh-MfvM1sJ8fGfWkhtJEefPJLyY-FdwwrMldoOyrnYe_Akk73MQNt1OATxWXdau9wyprJtrKC2nODNnrHPERaynX-kxGGTumYuisJm3cZzzb2TrqX_lKts9r6FyLkS0CYh3NpMZ7yP9EV9bEnJDvjxzTowdQ9iHKtguergbHITSllbwjA5RnNkyLgEbyYNrA9TRvFn8TX_d71v-PawUG7CNeb0aU4-cvGh-7UajtYzUIlpLBRTkY2CmekeJxDYNB9xa8K67M7UYOIyIn9Q55WnazkPGfjqOCmuj5q6Poc4Is8k0W8nyBiLSidMtNsgkQIlYzBJvhiresq8bVe1CR5R5-tT_Q=w749-h615-no?authuser=0',
    title: 'Ignite Feed, exponha sua idéias.',
    footer: 'Study-Case'
  }
},
{
  id: 3,
    projectData: {
      urlLink:'https://gustavofelipeold.netlify.app/',
    imgUrl: 'https://lh3.googleusercontent.com/OchV1Nb5YaMjpQR80za1gLy20Wm--XQxQ4mx30Q0gbuUIgVQhCoCQUzMQRdH1pqlaI5SGpI7-052680jt1VySuvNCY5ysDM3M0rl2sXmjzYwtTqcCIjlmgkuL54nJwiK1_yTLJvvzLoIsQEEI4UGYzTvYu6ZHvwvIElHLXyJjZ_T4JD9C91U2J9N3LVDUNFkKCcPB874q-PMb2HhWt3EGmi1EXJyIjdC2i9aUxMyyqHsAVat3avg9SAVRqQxAT-WyFV8OuZkurZPDVoKQgPIkk4pUbTNFFMDfy0g_vLCqWk7zpK3ojE9Oa0LJDggJGqoWYFEg5Mbxmi9bP5tb4lwwpxxyK3t1Lr-mze9LQp5LA4ucztJJn1w1MpEWyZi7plfnknZk7T2CinIUNE5kiQFuRp9ZC2gii7PC6OXZayCWn-vIcDnNQjUbAY7yvZDCYf5GzXl8Tib-nuSEbJngIaELcW7mDECrZWUfSZN5afgwgm_EDPY7z-HDxVVTnQs5IGnz3TFJHH7OromKhBoMs4dxm4jsGn-3LPwREulveCF2YaFn5EAK3tq4k7jW4Y0wqjxeOBU-EwwvLU5MsgWuLiDJNjtKo5SrbiC0jrtra-xku_9TWbn2Z_bgRqstO104lZbLUP1evFZHBlTIE7UlKTeEn5W7mynFjUDmrxpiv5L_lJ7GYJzN4rVoems5YIjBAXcq3HLTYdYpx5S6KyVQmB-vPaE8bNOZyZn16ZTTkuD-NjJBWCkYjbpKD5ALr9Eig=w1024-h615-no?authuser=0',
    title: 'Antigo portfólio venha conferir e ver o crescimento.',
    footer: 'Study-Case'
}
},
{
id: 4,
    projectData: {
      urlLink:'https://foxriver.netlify.app/',
    imgUrl: 'https://lh3.googleusercontent.com/8dE4x9wtL5ALITNaiDDUcjF2WLhpIcpa92GREIQQ0NK8sm1f5cftKAU8gNKZHj8_fxjErEWKCg8mw8e0p3-HQfXkGf5Ir37VfF3es5Ozq9ZszOGQDHaknhMliQl5sUu-dWDirDQcju1Q1XhsfqernY-B47puZzzZisFkY6F7BWqRwskmQxb8OrswQJDDv47nGtP0be4GImmxuvURuqLJkoVJd5WTH3lMxjLoa40IBistBnUHzWaWfdKsWZtrLYSp5AD_RT3rHqgKsEWqPGULT7mS3fqdu-0iwTKV799ACIELf24YwtPiO0nZuEJxhLVd6UgJQJbeGAACVJ0QiSBVnio1uZnH1-PuTdJIL5cNk7fR4Pa5qFdItIkpptgcf3koTxhqLb3MWKZKVUuGKq1fyl1iqmxOIYI5JnZN_mbhIwYlOQFN3ievBqM5jeoXXBloGPv8f-UHloNmZWPdY2UyvcbO9tUmPZhtAOHGUyn2WezpKA1BeaXeBEhNYIAcuEILT-Rm2VG3_HpQA22TZSnnKu0nRCWpnc24nREa08-pRxJXzQ2PNsVE8Hsy3g7lhFF-EG-f3ycRNw5K99NOeZ48vaY6GP52jgb7DHy8NR_mBmZ_n69orfq4Kok-n0bAkUR0f4v7xXxsKF0yPMgOj-ZV1orjYGqZL8leuwrNmxhuwv9QSwTsKnrqsZz9e-TXv_nAO0OabclOJwlP4Ta7SMkgDkyLJgwyhCAHCHjdobgrL-hM6h6ZxlUymOz5cqu97g=w934-h615-no?authuser=0',
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
              <FormPopUp />
              <Footer />
              
      </div>
    </div>
  )
}

export default App
