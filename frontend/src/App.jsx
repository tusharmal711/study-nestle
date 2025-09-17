import{Navigate} from 'react-router';

import {Route,Routes} from 'react-router';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminLogin from './pages/AdminLogin';

import AdminDashboard from './pages/AdminDashboard';
import AdminPending from './pages/AdminPending';
import AdminApprove from './pages/AdminApprove';



import UploadMaterial from './pages/UploadMaterial';
import DispStudyMaterial from './pages/DispStudyMaterial';
import About from './pages/About';
import Contact from './pages/Contact';
import GetProfile from './pages/Getprofile';
import UpdateProfile from './pages/UpdateProfile';
function App() {
  

  return (
    <>
      <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
           
            <Route path="/upload" element={<UploadMaterial/>}></Route>
            <Route path="/disp" element={<DispStudyMaterial/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>

            <Route path="/adminlogin" element={<AdminLogin/>}></Route>
            <Route path="/adminDashboard" element={<AdminDashboard />}>
                
                <Route path="pending" element={<AdminPending />} />
                <Route path="approve" element={<AdminApprove />} />
            </Route>

            <Route path='/getProfile' element={<GetProfile/>}></Route>
            <Route path='/updateProfile' element={<UpdateProfile/>}></Route>
        </Routes>
    </>
  )
}

export default App
