import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Login } from './components/pages/login/login'
import { Signup } from './components/pages/Signup/Signup';
import {TodoList} from './components/pages/todo/todo';
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>} ></Route>
          <Route path='/signup' element={<Signup/>} ></Route>
          <Route path='/' element={<TodoList/>}></Route>                           
        </Routes>
    </BrowserRouter>      
  );
}

export default App;
