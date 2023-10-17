import logo from './logo.svg';
import './App.css';
import {Button} from "./components/button"
import { Input } from './components/input'

function App() {
  return (
    <div className="container"> 
    <div className="App">
      <div className='top'>
        <Input/>
      </div>
      <div className='bottom'>
        <Button/>
      </div>
    </div>
    </div>
  ); 
}

export default App;
