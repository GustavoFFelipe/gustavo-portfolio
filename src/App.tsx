
import { Banner } from './components/Banner'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import './global.css'
import style from './App.module.css'

function App() {

  return (
    <div className="App">
      <Header />
      <article className={style.mainContent}>
        <Sidebar />
        <Banner />
      </article>
    </div>
  )
}

export default App
