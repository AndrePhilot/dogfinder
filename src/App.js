import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Nav from './Nav';
import DogList from './DogList';
import DogDetails from './DogDetails';
import whiskey from './whiskey.jpg';
import duke from './duke.jpg';
import perry from './perry.jpg';

const defaultDogsData = [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    }
  ];

function App() {
  return (
    <div className="App">
      <h1>Good luck!</h1>
      <Nav dogs={defaultDogsData} />
      <Routes>
        <Route path="/dogs" element={<DogList dogs={defaultDogsData}/>}/>
        <Route path="/dogs/:name" element={<DogDetails dogs={defaultDogsData}/>}/>
        <Route path="/*" element={<Navigate to="/dogs"/>} />
      </Routes>
    </div>
  );
}

export default App;