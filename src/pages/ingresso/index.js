import axios from 'axios'
import { useState } from "react"
import { Link } from 'react-router-dom';

export default function Index() {
    const [qtdInteira, setQtdInteira] = useState(0);
    const [qtdMeia, setQtdMeia] = useState(0);
    const [nacionalidade, setNacionalidade] = useState('');
    const [weekDay, setWeekDay] = useState('');
    const [result, setResult] = useState(0);

        async function Ingresso() {
            const resp = await axios.post('http://localhost:5000/dia2/ingresso', {
                qtdInteiras: qtdInteira,
                qtdMeias: qtdMeia,
                Nacionalidade: nacionalidade,
                DiaDaSemana: weekDay    
            })

            setResult(resp.data.total);
        }
    return(
        <main>
            <h2>Ingresso</h2>
            <p>Compre seus Ingresso!!</p>

            <div>
                Quantidade de Inteiras: <input type='text' value={qtdInteira} onChange= {e => setQtdInteira(Number(e.target.value))}/>
            </div>
            <div>
                Quantidade de Meias: <input type='text' value={qtdMeia} onChange= {e => setQtdMeia(Number(e.target.value))}/>
            </div>
            <div>
                Nacionalidade: <input type='text' value={nacionalidade} onChange= {e => setNacionalidade(e.target.value)}/>
            </div>
            <div>
                Dia da Semana: <input type='text' value={weekDay} onChange= {e => setWeekDay(e.target.value)}/>
            </div>
            <div>
                <button onClick={Ingresso}> Calcule</button>
            </div>
            <div>
                O total a pagar é {result}
            </div>

            <Link to = '/'> Voltar para Home</Link>
        </main>
    )
}