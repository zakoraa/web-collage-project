import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import UserLoginPage from './pages/login/user_login_page';
import AdminLoginPage from './pages/login/admin_login_page';
import UserHomePage from './pages/home/user_home_page';
import AdminRegisterPage from './pages/register/admin_register_page'
import UserRegisterPage from './pages/register/user_register_page'
import AdminHomePage from './pages/home/admin_home_page';
import UserTableView from './components/tableVIew/user';
import TransactionTableView from './components/tableVIew/transaction';
import UserHasProductTableView from './components/tableVIew/user_has_product';
import { UserIdProvider } from "./provider/provider";

function App() {
  return (
    <UserIdProvider>
    <Router>
      <Routes>
        <Route path = "/" element = {<UserLoginPage/>} />
        <Route path = "/home/:id" element = {<UserHomePage/>} />
        <Route path = "/home/admin/:id" element = {<AdminHomePage/>} />
        <Route path = "/login/admin" element = {<AdminLoginPage/>} />
        <Route path = "/home/admin/tabletransaction" element = {<TransactionTableView/>} />
        <Route path = "/home/admin/tableuser" element = {<UserTableView/>} />
        <Route path = "/home/admin/tableuserhasproduct" element = {<UserHasProductTableView/>} />
        <Route path = "/register/" element = {<UserRegisterPage/>} />
        <Route path = "/register/admin" element = {<AdminRegisterPage/>} />
      </Routes>
    </Router>
    </UserIdProvider>
  );
}

export default App;
