import MovieScore from "components/MovieScore";
import { Link } from "react-router-dom";
import { Movie } from "types/movie";

//para utilizar o props, definindo um tipo
//eese é o tipo de dados que nossa função vai receber
type Props = {
    movie: Movie;
}

//para a função receber esse objeto observe que eu alterei a linha para receber o objeto do tipo props
//function MovieCard() {
function MovieCard({movie}:Props) {
    //como vou receber um objeto movie do tipo Props, eu posso retirar esse objeto mocado que eu tinha criado
    /*const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };*/

    return (
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />

                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>

            </div>
        </div>
    );
}

export default MovieCard;