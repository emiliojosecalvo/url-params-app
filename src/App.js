import './App.css';
import { Router, Route } from 'react-router-dom';
import Food from './Food';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Route path='/food/:name' {...routeProps} />
      </Router> */}
      <Food name='dog' />
    </div>
  );
}

export default App;
