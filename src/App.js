import './App.css';
import { Routes, Route } from 'react-router-dom';
import Food from './Food';
import Meal from './Meal';
import FoodSearch from './FoodSearch';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<FoodSearch />} />
        <Route path='/food/:foodName/drink/:drinkName' element={<Meal />} />
        <Route path='/food/:foodName' element={<Food />} />
        <Route path='*' element={
          <>
            <h2>NOTHING FOUNDED EVER!!!</h2>
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
