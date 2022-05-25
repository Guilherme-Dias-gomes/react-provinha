


export default function index() {
    return(
        <main>
            <h2>Cor Primária</h2>

            <div>
               Cor: <input type='text' value={cor} onChange={e => setCor(e.target.value)} />
            </div>
        </main>
    )
}