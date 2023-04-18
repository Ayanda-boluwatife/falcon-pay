
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
import GovtInner from './Dashboard-Items/GovtInner';
import Govtouter from './Dashboard-Items/Govtouter';
import Review from './Dashboard-Items/Review';
import UnderReview from './Dashboard-Items/UnderReview';
import Localbank from './Dashboard-Items/Localbank';
import Domain from './Dashboard-Items/Domain';
import PaymentHistory from './Dashboard-Items/PaymentHistory';
import ShareToFriends from './Dashboard-Items/ShareToFriends';

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
      <Route path='/payment_history' element={<PaymentHistory />} />
      <Route path='/referral' element={<Refferal />} />
      <Route path='/community' element={<Community />} />
      <Route path='/govtinner' element={<GovtInner />} />
      <Route path='/govtouter' element={<Govtouter />}/>
      <Route path='/review' element={<Review />}/>
      <Route path='/under' element={<UnderReview/>}/> 
      <Route path='/local' element={<Localbank/>}/>
      <Route path='/domain' element={<Domain/>}/>
      <Route path='/share_to_friends' element={<ShareToFriends />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
