import { useState } from 'react'
import Girasol from './components/girasol/girasol'
import Lirio from './components/lirio/lirio'
import Orquidea from './components/orquidea/orquidea'
import RosaAmarillo from './components/rosa/rosa_amarillo'
import RosaBlanco from './components/rosa/rosa_blanco'
import RosaRosado from './components/rosa/rosa_rosado'
import TulipanAmarillo from './components/tulipan/tulipan_amarillo'
import TulipanBlanco from './components/tulipan/tulipan_blanco'
import TulipanMorado from './components/tulipan/tulipan_morado'
import TulipanRosado from './components/tulipan/tulipan_rosado'
import Cerca from './assets/items/cerca.svg'
import Nube from './assets/items/nube.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

 return (
    <div className="layout">

      <aside className="columna izquierda" />
      
      <main className="columna centro">

        <h1 className="titulo">Mi Jardín</h1>

        <div className='reproductor'>

        </div>

        <div className='cielo'>
          <div className='sol'></div>
          <img src={Nube} className="nube1" />
          <img src={Nube} className="nube2" />
        </div>

        <img src={Cerca} className="cerca" />

        <div className="jardin">
          <Girasol className="gir1"></Girasol>
          <TulipanRosado className="tup1"></TulipanRosado>
          <Lirio className="lir1"></Lirio>
          <RosaRosado className="ros1"></RosaRosado>
          <TulipanAmarillo className="tup2"></TulipanAmarillo>
          <Orquidea className="orq1"></Orquidea>
          <Lirio className="lir2"></Lirio>
          <TulipanBlanco className="tup3"></TulipanBlanco>
          <RosaAmarillo className="ros2"></RosaAmarillo>
          <RosaBlanco className="ros3"></RosaBlanco>
          <TulipanMorado className="tup4"></TulipanMorado>
          <Orquidea className="orq2"></Orquidea>
          <Lirio className="lir3"></Lirio>
          <RosaRosado className="ros4"></RosaRosado>
          <Girasol className="gir2"></Girasol>
          <TulipanBlanco className="tup5"></TulipanBlanco>
          <TulipanMorado className="tup6"></TulipanMorado>

        </div>

      </main>

      <aside className="columna derecha" />
    </div>
  )
}

export default App
