import axios from 'axios'
import { useState } from "react"



export default function index() {
    const [cor,  setCor] = useState('');

    return(
        <main>
            <h2>Cor Primária</h2>

            <div>
               Cor: <input type='text' value={cor} onChange={e => setCor(e.target.value)} />
            </div>
            <div>
                <button> Verificar </button>
            </div>
            <div>
                É uma cor primaria ?
            </div>
        </main>
    )
}