import './DonatePage.scss';
import { useParams } from 'react-router-dom';

function DonatePage() {

    const params = useParams();

    return (
        <h1>Donate Page for disaster id {params.id}</h1>
    )
}

export default DonatePage;