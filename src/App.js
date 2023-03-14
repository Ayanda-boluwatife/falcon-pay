import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Aside from './Asidebar/Aside';
import DashboardNav from './Asidebar/DashboardNav'
import Dashboard from './Dashboard-Items/Dashboard';
import BankDetail from './Dashboard-Items/BankDetail';
import Withdraw from './Dashboard-Items/Withdraw';
import VerifyYourKyc from './Dashboard-Items/VerifyYourKyc';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/aside' element={<Aside />} />
      <Route path='/dashboardnav' element={<DashboardNav />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/bankdetails' element={<BankDetail />} />
      <Route path='/withdraw' element={<Withdraw />} />
      <Route path='/verify_your_kyc' element={<VerifyYourKyc />} />
     </Routes>
   </BrowserRouter>
  );
}

export default App;
