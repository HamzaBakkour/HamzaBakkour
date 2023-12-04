import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App d-flex">
        <Routes>
          <Route path = "/" element = {
            <Home />
          }/>
        </Routes>
    </div>
  );
}

export default App;
