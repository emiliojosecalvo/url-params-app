import './App.css';
import { Routes, Route } from 'react-router-dom';
import Food from './Food';
import Drink from './Drink';
import Meal from './Meal';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/food/:name' element={<Food anothername='hola' />} /> */}
        <Route path='/food/:foodName/drink/:drinkName' element={<Meal />} />
      </Routes>
    </div>
  );
}

export default App;
