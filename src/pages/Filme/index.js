import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from '../../services/api';
import './filme-info.css'
import { toast } from "react-toastify";

function Filme() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [filme, setFilme] = useState({})
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "f5c1ad4446f1990ecfa279ff6d0134a3",
                    language: "pt-BR",
                }
            })
                .then((response) => {
                    setFilme(response.data);
                    setLoading(false);
                })
                .catch(() => {
                    console.log("filme não encontrado")
                    navigate("/", {replace: true} )
                    return;
                })
        }
        loadFilme();


        return () => {
            console.log("Apagina foi desmontada")
        }
    }, [navigate,id])



    function salvarFilme(){
   const minhaLista = localStorage.getItem("@reactFlix");
   
   //DEVOLNER O FILME OU UMA LISTA VASIA
   let filmesSalvos =JSON.parse(minhaLista) || [];

   //VERIFICA SE JA TEM O FILME NA LISTA 
   const hasFilme = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id)

   if(hasFilme){
   toast.warn("Esse filme ja esta na sua lista!")
    return;
   }

   //SALVAR O FILME 
   filmesSalvos.push(filme);
   localStorage.setItem("@reactFlix", JSON.stringify(filmesSalvos));
   toast.success("Filme salvo com sucesso!")


    }



    if (loading) {
        return (
            <div className="filme-info">
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }

    return (
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average} /10</strong>

            <div className="area-buttons">
             <button onClick={salvarFilme}>Salvar</button>
             <button>
                <a target="blanck" rel="external" href={`http://youtube.com/results?search_query=${filme.title} trailer`}>
                    Trailer
                </a>
             </button>
            </div>
        </div>
    )
}

export default Filme;