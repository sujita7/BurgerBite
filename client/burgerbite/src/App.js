import logo from './logo.svg';
// import { Login }  from './Screens/Login';
import {Landing} from './Screens/Landing'
import './App.css';
import axios from 'axios';
axios.defaults.baseURL='http://localhost:8000'
axios.defaults.withCredentials=true;

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      <Landing/>
    </div>
  );
}

export default App;
