import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import CheckOut from './components/CheckOut/CheckOut';
import Services from './components/Services/Services';
import RequireAuth from './components/RequireAuth/RequireAuth';
import LogIn from './components/LogIn/LogIn';
import Signup from './components/Signup/Signup';
import NotFound from './components/NotFound/NotFound';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import { Toaster } from 'react-hot-toast';
import BuyNow from './components/BuyNow/BuyNow';

function App() {
  return (
    <div>
      <Header></Header>
      <Toaster />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/checkout/:id' element={<CheckOut></CheckOut>}></Route>
        <Route path='/buynow' element={
          <RequireAuth>
            <BuyNow></BuyNow>
          </RequireAuth>
        }> </Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/blogs' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
