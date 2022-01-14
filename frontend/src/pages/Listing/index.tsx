import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { BASE_URL } from "utils/requests";
import { useState, useEffect } from "react";
import { MoviePage } from "types/movie"

function Listing() {

    //definindo o usestate do hook,  e colaca esse p lá no return para testar o useState <p>{pagaNumber}</p>
    //assim o meu componente vai reenderizar uma informação interna do componente em algo gráfico
    const [pageNumber, setPageNumber] = useState(0);

    //outro elemento useState, esse estado guarda a página que eu recebo lá da minha requisição
    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

    //testando o useEffect - recebe uma função e uma lista de objetos
    //ele vai executar essa lógica ao menos uma vez
    /*useEffect(()=>{
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}`)
        .then(response => {
            const data = response.data as MoviePage;
            console.log(data);
            setPageNumber(data.number);
        });
    }, []);*/
    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}`)
            .then(response => {
                const data = response.data as MoviePage;
                setPage(data);
            });
    }, [pageNumber]);


    //forma errada, apenas para testar a primeira requisição
    /*
    axios.get('http://localhost:8080/movies?size=12&page=0')
        .then(response => {
            console.log(response.data);
        });
    axios.get(`${BASE_URL}/movies?size=12&page=0`)
        .then(response => {
            console.log(response.data);
        });
    axios.get(`${BASE_URL}/movies?size=12&page=1`)
        .then(response => {
            const data = response.data as MoviePage;
            setPageNumber(data.number);
        });*/


    //para testar o Props vou definir um obejto movie aqui eu vou utilizar ele no return <MovieCard movie={movie}/>
    //depois de testado eu vou utilizar o props para lançar como argumento os filmes que vieram na consulta hook
    /*const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };*/


    //essa função vai implementar o funcionamento do clique na paginação
    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    }


    return (
        <>
            <Pagination page={page} onChange={handlePageChange} />

            <div className="container">
                <div className="row">
                    {page.content.map(movie => {
                        return (
                            <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                                <MovieCard movie={movie} />
                            </div>
                        )
                    })}


                </div>
            </div>
        </>

    )
}

export default Listing;