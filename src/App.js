import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Aside from './Asidebar/Aside';
import DashboardNav from './Asidebar/DashboardNav'

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/aside' element={<Aside />} />
      <Route path='/dashboardnav' element={<DashboardNav />}/>
     </Routes>
   </BrowserRouter>
  );
}

export default App;
