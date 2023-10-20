import './GetHelpPage';
import { useParams } from 'react-router-dom';

function GetHelpPage() {
    const params = useParams();

    return (
        <h1>Get Help Page for disaster id {params.id}</h1>
    )
}

export default GetHelpPage;