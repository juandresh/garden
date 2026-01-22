import { useState } from 'react'
import Girasol from './components/girasol/girasol'
import Lirio from './components/lirio/lirio'
import Orquidea from './components/orquidea/orquidea'
import RosaAmarillo from './components/rosa_amarillo/rosa_amarillo'
import RosaBlanco from './components/rosa_blanco/rosa_blanco'
import RosaRosado from './components/rosa_rosado/rosa_rosado'
import TulipanAmarillo from './components/tulipan/tulipan_amarillo'
import TulipanBlanco from './components/tulipan/tulipan_blanco'
import TulipanMorado from './components/tulipan/tulipan_morado'
import TulipanRosado from './components/tulipan/tulipan_rosado'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    
    <div>
      <Lirio></Lirio>
    </div>

    <div>
      <Girasol></Girasol>
    </div>

    <div>
      <Orquidea></Orquidea>
    </div>

    <div>
      <RosaAmarillo></RosaAmarillo>
    </div>

    <div>
      <RosaBlanco></RosaBlanco>
    </div>

    <div>
      <RosaRosado></RosaRosado>
    </div>

    <div>
      <TulipanAmarillo></TulipanAmarillo>
    </div>

    <div>
      <TulipanBlanco></TulipanBlanco>
    </div>

    <div>
      <TulipanMorado></TulipanMorado>
    </div>

    <div>
      <TulipanRosado></TulipanRosado>
    </div>
    
    </>
  )
}

export default App
