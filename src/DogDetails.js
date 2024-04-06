import { useParams } from 'react-router-dom';
import { v4 as uuid } from "uuid";
 
function DogDetails({ dogs }) {
    const params = useParams();
    const dog = dogs.find(dog => dog.name === params.name);

    if (!dog) {
        return <p>Dog not found</p>;
    }

    return (
        <div>
            <div>
                <p>Name: {dog.name}</p>
                <p>Age: {dog.age}</p>
                <img src={dog.src} alt={dog.name}></img>
                <ul>Facts:
                    {dog.facts.map(fact =>
                        <li key={uuid()}>{fact}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default DogDetails;