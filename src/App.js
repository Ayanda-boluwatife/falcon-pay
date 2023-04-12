import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Dashboard from './Dashboard-Items/Dashboard';
import BankDetail from './Dashboard-Items/BankDetail';
import Withdraw from './Dashboard-Items/Withdraw';
import VerifyYourKyc from './Dashboard-Items/VerifyYourKyc';
import SideNavBar from './Asidebar/SideNavBar';
import GovernmentIdentity from './Dashboard-Items/GovernmentIdentity';
import Profile from './Dashboard-Items/Profile';
import Refferal from './Dashboard-Items/Refferal';
import Community from './Dashboard-Items/Community';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/sidenavbar' element={<SideNavBar />} />
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/bankdetails' element={<BankDetail />} />
      <Route path='/withdraw' element={<Withdraw />} />
      <Route path='/verify_your_kyc' element={<VerifyYourKyc />} />
      <Route path='/government-id' element={<GovernmentIdentity/>} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/refferal' element={<Refferal />} />
      <Route path='/community' element={<Community />} />
     </Routes>
   </BrowserRouter>
  );
}

export default App;
