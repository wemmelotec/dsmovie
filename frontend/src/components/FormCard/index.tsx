import axios, {AxiosRequestConfig} from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Movie } from 'types/movie';
import { BASE_URL } from 'utils/requests';
import {validateEmail} from 'utils/validate'
import './styles.css';

//para implementar os parâmetros vou apagar o moviemocado
/*const movie = {
    id: 1,
    image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    title: "The Witcher",
    count: 2,
    score: 4.5
};*/
//criei o tipo Props do movie e vou lançar ele na function form
type Props = {
    movieId: string;
}

function FormCard({ movieId }: Props) {

    //esse objeto serve para eu dar um comando de redirecionamento de rota
    const navigate = useNavigate();

    //implementar a lógica para buscar o meu filme a partir do id do filme
    const [movie, setMovie] = useState<Movie>();

    useEffect(() => {
        axios.get(`${BASE_URL}/movies/${movieId}`)
            .then(response => {
                setMovie(response.data);
            });
    })

    //implementação do envio do form
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        //parar o evento
        event.preventDefault();
        //capturar os dados do form
        const email = (event.target as any).email.value;
        const score = (event.target as any).score.value;
        //para testar se ele está salvando utiliza o console.log e visualiza no inspecionar
        //console.log(email,score);
        //utilizar uma função para validar se o email é válido
        if(!validateEmail(email)){
            return; //aqui eu posso acrescentar uma memsagem de e-mail inválido
        }
        //se estiver tudo ok a função abaixo vai preparar a requisição para enviar
        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/scores',
            data: {
                email: email,
                movieId: movieId,
                score: score
            }
        }
        //e agora vou enviar
        axios(config).then(response => {
            //console.log(response.data);
            navigate('/');
        });
    }
    
    return (
        <div className="dsmovie-form-container">
            <img className="dsmovie-movie-card-image" src={movie?.image} alt={movie?.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie?.title}</h3>
                <form className="dsmovie-form" onSubmit={handleSubmit}>
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="dsmovie-form-btn-container">
                        <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>
                    </div>
                </form >
                <Link to="/">
                    <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
                </Link>

            </div >
        </div >
    )
}

export default FormCard;