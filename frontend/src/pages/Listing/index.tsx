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

    //testando o useEffect - recebe uma função e uma lista de objetos
    //ele vai executar essa lógica ao menos uma vez
    useEffect(()=>{
        axios.get(`${BASE_URL}/movies?size=12&page=1`)
        .then(response => {
            const data = response.data as MoviePage;
            console.log(data);
            setPageNumber(data.number);
        });
    }, []);

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


    return (
        <>
        <p>{pageNumber}</p>
            <Pagination />

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Listing;