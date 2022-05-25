import axios from 'axios'
import { useState } from "react"

export default function Index() {
    const [cor,  setCor] = useState('');
    const [result, setResult] = useState('') ;

        async function CorPrimaria() {
            const resp = await axios.get('http://localhost:5000/dia2/corprimaria/' + cor);

            if(resp.data.primaria === true)
                setResult('É sim!');
            else
                setResult('Poxa, não é!');
        }

    return(
        <main>
            <h2>Cor Primária</h2>

            <p> Verifique se uma cor é primária!!</p>
            <div>
               Cor: <input type='text' value={cor} onChange={e => setCor(e.target.value)} />
            </div>
            <div>
                <button onClick={CorPrimaria}> Verificar </button>
            </div>
            <div>
                É uma cor primaria ? {result}
            </div>
        </main>
    )
}