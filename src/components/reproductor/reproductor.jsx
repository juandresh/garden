import { useRef, useState, useEffect } from "react"
import "./reproductor.css"
import Play from "/src/assets/items/botonSonando.svg"
import Pause from "/src/assets/items/botonPausa.svg"
import Next from "/src/assets/items/botonSig.svg"
import Prev from "/src/assets/items/botonAnt.svg"

const canciones = [
    "/songs/1.mp3",  // your'e my best friend
    "/songs/2.mp3",  // stupid love story
    "/songs/3.mp3",  // runaway
    "/songs/4.mp3",  // your eyes tell
    "/songs/5.mp3",  // puntos suspensivos
    "/songs/6.mp3",  // te invito
    "/songs/7.mp3",  // lago en el cielo
    "/songs/8.mp3"   // loco por tu amor
]

export default function Reproductor() {
    const audioRef = useRef(null)
    const [indice, setIndice] = useState(0)
    const [reproduciendo, setReproduciendo] = useState(false)

    const playPause = () => {
    if (reproduciendo) {
        audioRef.current.pause()
    } else {
        audioRef.current.play()
    }
    setReproduciendo(!reproduciendo)
    }

    const siguiente = () => {
    setIndice((i) => (i + 1) % canciones.length)
    }

    const anterior = () => {
    setIndice((i) => (i === 0 ? canciones.length - 1 : i - 1))
    }

    useEffect(() => {
    if (reproduciendo) {
        audioRef.current.play()
    }
    }, [indice])

    return (
        <div className="rep">
            <audio ref={audioRef} src={canciones[indice]} />

            <button onClick={anterior}>
                <img src={Prev} alt="Anterior" className="botons"/>
            </button>

            <button onClick={playPause}>
                <img
                src={reproduciendo ? Pause : Play}
                alt="Play / Pause" 
                className="botonp"
                />
            </button>

            <button onClick={siguiente}>
                <img src={Next} alt="Siguiente" className="botons"/>
            </button>
        </div>
    )
}