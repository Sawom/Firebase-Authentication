import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Homee/Home';
import About from './Components/About/About';
import Order from './Components/Order/Order';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import RequireAuth from './Components/RequireAuth/RequireAuth';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} >Home</Route>
        <Route path='/about' element={<About></About>}  >About</Route>
        {/* require auth */}
        <Route path='/order' element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>
        } >Order</Route>
        <Route path='/login' element={<Login></Login>} >Login</Route>
        <Route path='/register' element={<Register></Register>} >Register</Route>
      </Routes>
    </div>
  );
}

export default App;
