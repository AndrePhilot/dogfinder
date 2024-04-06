import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

function Nav({ dogs }) {
    return (
        <ul>
            {dogs.map(dog => <li key={uuid()}><Link to={`/dogs/${dog.name}`}>{dog.name}</Link></li>)}
        </ul>
    )
}

export default Nav;