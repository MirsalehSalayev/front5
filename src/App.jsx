import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Add from "./Pages/Add";
import Detail from "./Pages/Detail";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/detail/:id" element={<Detail/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}



export default App;
