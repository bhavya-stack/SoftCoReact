import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './SoftCo/Dashboard';
import Detail from './SoftCo/Detail';

function App() {
  return (
    <>
      <div className='Container' >
        <BrowserRouter>
          <Routes>
             <Route path='/' element={<Dashboard />} ></Route>
             <Route path='/detail' element={<Detail />} ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
