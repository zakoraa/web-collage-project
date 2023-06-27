import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import UserRegisterPage from './pages/register/user_register_page';
import UserLoginPage from './pages/login/user_login_page';
import AdminRegisterPage from './pages/register/admin_register_page';
import AdminLoginPage from './pages/login/admin_login_page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<UserLoginPage/>} />
        <Route path = "/login/admin" element = {<AdminLoginPage/>} />
        <Route path = "/register/user" element = {<UserRegisterPage/>} />
        <Route path = "/register/admin" element = {<AdminRegisterPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
