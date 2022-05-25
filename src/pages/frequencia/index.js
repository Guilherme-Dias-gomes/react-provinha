import axios from 'axios'
import { useState } from "react"

export default function Index() {
    const [texto, setTexto] = useState('');
    const [Caractere, setCaractere] = useState('');
    const [resposta, setResposta] = useState('');

        async function verificarFreq() {
            const resp = await axios.get(`http://localhost:5000/dia2/frequencia/${texto}/${Caractere}`)
            setResposta(resp.data.x);
        }

    return(
        <main>
            <h2>Frequência</h2>

            <div>
                texto: <input type='text' value = {texto} onChange={e => setTexto(e.target.value)} />
            </div>
            <div>
                Caractere: <input type='text' value={Caractere} onChange={e => setCaractere(e.target.value)} />
            </div>
            <div>
                <button onClick={verificarFreq}> Verificar Frequência</button>
            </div>
            <div>
                Frequência: {resposta}
            </div>

            <div>
                <Link to = '/'> Voltar para Home</Link>
            </div>
        </main>
    )
}