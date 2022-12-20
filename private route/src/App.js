import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Homee from './components/Home/Homee';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Order from './components/Order/Order';
import Products from './components/Products/Products';
import Requireauth from './components/RequireAuth/Requireauth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homee></Homee>} ></Route>
        <Route path="/login" element={<Login></Login>} ></Route>
        <Route path="/register" element={<Register></Register>} ></Route>
         {/* private route */}
        <Route path="/products" element={
          <Requireauth>
              <Products></Products>
          </Requireauth>
        } ></Route>
        <Route path="/order" element={
          <Requireauth>
            <Order></Order>
          </Requireauth>
        } ></Route>
      </Routes>
    </div>
  );
}

export default App;
