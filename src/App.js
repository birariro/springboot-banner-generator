import './App.css';
import { useLocation } from 'react-router-dom';
import CharacterGrid from "./CharacterGrid";



function App() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const text = searchParams.get('text');

  return (

    <div className="App">
      <header className="App-header">
        <CharacterGrid text={text}/>
      </header>
    </div>
  );
}

export default App;
