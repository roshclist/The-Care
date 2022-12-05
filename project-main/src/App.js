import Main from './Main/Main';
import Login from './Main/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/login" element={<Login/>} />
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
