import axios from 'axios'
import { useState } from "react"
import { Link } from 'react-router-dom';

export default function Index() {
    const [numerosCopia, setNumerosCopia] = useState([]);
    const [numero, setNumero] = useState(0);
    const [result, setResult] = useState('');

        function AddNumero() {
            setNumerosCopia([...numerosCopia, numero]);
            setNumero('');
        }

        async function MaiorNumero() {
            const resp = await axios.post('http://localhost:5000/dia2/maiornumero', numerosCopia);
            setResult(resp.data.x);
        }
    return(
        <main>
            <h2>Maior Número</h2>
            <p>Descubra o número maior!!</p>

            <div>
                Digite os números: <input type='text' value={numero} onChange={e => setNumero(Number(e.target.value))} />
                <button onClick={AddNumero}> Adicione outro Número</button>
            </div>

            <div>
                {numerosCopia.map (i => 
                    <div> {i} </div>    
                )}
            </div>
            
            <div>
                <button onClick={MaiorNumero}> Verificar </button> O maior número é {result}
            </div>


            <Link to = '/'> Voltar para Home</Link>
        </main>
    )
}