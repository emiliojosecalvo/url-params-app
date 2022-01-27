import './App.css';
import { Routes, Route } from 'react-router-dom';

import Meal from './Meal';
import FoodSearch from './FoodSearch';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<FoodSearch />} />
        <Route path='/food/:foodName/drink/:drinkName' element={<Meal />} />
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
