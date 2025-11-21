import './App.css';
import { Pokeapi } from './components/Pokeapi';
import { SearchFilter } from './components/SearchFilter';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <SearchFilter />
        <Pokeapi />
    </div>
  );
}

export default App;
