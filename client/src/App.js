import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import UserLoginPage from './pages/login/user_login_page';
import AdminLoginPage from './pages/login/admin_login_page';
import UserHomePage from './pages/home/user_home_page';
import AdminRegisterPage from './pages/register/admin_register_page'
import UserRegisterPage from './pages/register/user_register_page'
import AdminHomePage from './pages/home/admin_home_page';
import TransactionTableView from './components/tableVIew/transaction';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<UserLoginPage/>} />
        <Route path = "/home/:id" element = {<UserHomePage/>} />
        <Route path = "/home/admin/:id" element = {<AdminHomePage/>} />
        <Route path = "/login/admin" element = {<AdminLoginPage/>} />
        <Route path = "/home/tabletransaction" element = {<TransactionTableView/>} />
        <Route path = "/register/" element = {<UserRegisterPage/>} />
        <Route path = "/register/admin" element = {<AdminRegisterPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
