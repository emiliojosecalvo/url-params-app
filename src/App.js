import './App.css';
import { Routes, Route } from 'react-router-dom';
import Food from './Food';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/food/:name' element={<Food />} />
      </Routes>
    </div>
  );
}

export default App;
