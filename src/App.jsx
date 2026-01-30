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
import Foto from './assets/items/foto.jpeg'
import Reproductor from './components/reproductor/reproductor'

import './App.css'

function App() {
  const [mostrarModal, setMostrarModal] = useState(false)

 return (
    <div className="layout">

      <aside className="columna izquierda" />
      
      <main className="columna centro">

        <h1 className="titulo">❤️ Un Jardín para mi Novia ❤️</h1>


        <Reproductor className='reproductor'></Reproductor>


        <div className='cielo'>
          <div className="sol" 
          onClick={() => setMostrarModal(true)}
          />

          <img src={Nube} className="nube1" />
          <img src={Nube} className="nube2" />
        </div>

        <img src={Cerca} className="cerca" />

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
        <TulipanRosado className="tup7"></TulipanRosado>
        <Girasol className="gir3"></Girasol>

        <div className="jardin">
        </div>

        {mostrarModal && (
          <div className="modal-overlay" onClick={() => setMostrarModal(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>

              <div className="modal-contenido">
                <p>Solo quiero recordarte lo importante que eres para mí y lo mucho que te amo. 
                  Este tiempo a tu lado ha sido para mí de lo más maravilloso, y tengo toda la 
                  seguridad de que seguirá siendo así. Desde que te conocí, todo ha mejorado para 
                  mí, he encontrado un sentido para hacer las cosas con amor, algo que me hace 
                  sentir feliz y realizado. Sin duda, conocer a una mujer tan inteligente, 
                  hermosa, especial y maravillosa ha sido lo mejor que me ha podido pasar. 
                  Me llena de alegría el pensar en nuestro futuro juntos, yo realizándome 
                  contigo a mi lado y tú realizándote conmigo a tu lado. Te amo mucho, 
                  mi noviecita preciosa ❤️</p>

                <img src={Foto} className='fotito'/>
              </div>

              <button className="btn-cerrar" onClick={() => setMostrarModal(false)}>
                Cerrar
              </button>
            </div>
          </div>
        )}

      </main>

      <aside className="columna derecha" />
    </div>
  )
}

export default App
