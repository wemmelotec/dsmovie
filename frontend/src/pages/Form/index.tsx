import FormCard from 'components/FormCard';
import { useParams } from 'react-router-dom';

function Form() {

    //o nosso form ficou responsavel apenas por pegar o parametro da requisição e passar para o formcard
    const params = useParams();

    return (
        <FormCard movieId={`${params.movieId}`} />
    );
}

export default Form;