import Cadastro from "./components/Cadastro"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cadastro />}></Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
