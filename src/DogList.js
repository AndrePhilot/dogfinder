import { v4 as uuid } from "uuid";
import { Link } from 'react-router-dom';

function DogList({ dogs }) {

    return (
        <ul>
            {dogs.map( dog => 
                <li key={uuid()}>
                    <Link to={`/dogs/${dog.name}`}>
                        <p>Name: {dog.name}</p>
                    </Link>
                    <p>Age: {dog.age}</p>
                    <Link to={`/dogs/${dog.name}`}>
                        <img src={dog.src} alt={dog.name}></img>
                    </Link>
                    <ul>Facts:
                        {dog.facts.map( fact =>
                            <li key={uuid()}>{fact}</li>)}
                    </ul>

                </li>)}
        </ul>
    )
}

export default DogList;