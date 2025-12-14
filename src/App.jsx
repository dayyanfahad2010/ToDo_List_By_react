import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Login } from './components/pages/login/login'
import { Signup } from './components/pages/Signup/Signup';
import {TodoList} from './components/pages/todo/todo';
import ProtectedRoutes from './components/services/ProtectedRoutes'
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<Login/>} ></Route>
          <Route path='/signup' element={<Signup/>} ></Route>
          <Route path='/' element={<ProtectedRoutes/>} ></Route>
          <Route path='/h' element={<TodoList/>}></Route>                           
        </Routes>
    </BrowserRouter>      
  );
}

export default App;
