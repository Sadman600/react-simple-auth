
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header/Header/Header';
import Countries from './Pages/Main/Countries/Countries/Countries';
import Home from './Pages/Main/Home/Home/Home';
import Login from './Pages/Main/Login/Login/Login';
import RequireAuth from './Pages/Main/Login/RequireAuth/RequireAuth';
import SignUp from './Pages/Main/Login/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={
          <RequireAuth>
            <Home></Home>
          </RequireAuth>
        }></Route>
        <Route path='/countries' element={
          <RequireAuth>
            <Countries></Countries>
          </RequireAuth>
        }></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
