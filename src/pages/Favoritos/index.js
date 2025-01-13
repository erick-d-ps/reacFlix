import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './favoritos.css';
import { toast } from 'react-toastify';

function Favoritos(){

    const [filmes, setFilmes] = useState([]);

    useEffect(()=> {
       const minhaLista = localStorage.getItem("@reactFlix");
        setFilmes(JSON.parse(minhaLista) || [])
    }, [])
   
    //filtrando os filmes
    function excluirFilme(id){
     let filterFilmes = filmes.filter((f)=> {
        return(f.id !==id)
     }) 

     //atualição no localStorage apos excluir
     setFilmes(filterFilmes);
     localStorage.setItem("@reactFlix", JSON.stringify(filterFilmes))
     toast.success("Filme removido com sucesso")
    }

    return(
        <div className='meus-filmes'>
            <h1>Meus filmes favoritos</h1>

            {filmes.length === 0 && <span>Você não possui nenhum filme salvo :( </span>}

            <ul>
                {filmes.map((f) => {
                    return(
                        <li key={f.id}>
                          <span>{f.title}</span>

                          <div>
                           <Link to={`/filme/${f.id}`}>Ver detalhes</Link>
                           <button onClick={()=> excluirFilme(f.id)}>Excluir</button>
                          </div>
                        </li>
                        
                    )
                })}
            </ul>
    
        </div>
    )
}

export default Favoritos;