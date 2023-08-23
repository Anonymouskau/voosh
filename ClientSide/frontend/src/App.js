import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Addorder from './Addorder';
import GetItem from './getItem';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <Routes>
    <Route path='/'   element={<Homepage/>}/>
    <Route path='/addorder'   element={<Addorder/>}/>
    <Route path='/getitem' element={<GetItem/>}/>

    </Routes>
    
     </BrowserRouter> 
     
    </div>
  );
}

export default App;
