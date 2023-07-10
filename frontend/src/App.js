
import './App.css';
import Home from './components/home/Home';
import { Routes , Route} from 'react-router-dom';
import SignUp from './components/signup/SignUp';
import Login from './components/login/Login';


function App() {
  return (
   <>
 
   <Routes>
   <Route exact path='/' element ={ <SignUp/>} />
   <Route exact path='/login' element ={<Login/>} />
   <Route exact path='/home' element ={ <Home/>} />
   </Routes>
  
  
   </>
  );
}

export default App;
