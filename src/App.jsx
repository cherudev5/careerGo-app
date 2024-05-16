import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Offerspage from './components/offerspage';
import Jobseekerprofile from'./components/Jobseekerprofile';
import ABOUT from './Pages/About';
import HOME from './Pages/Home';
import Login from './components/Login';
import Jobseekersignup from './components/Jobseekersignup';
import JobSeekerForm from './components/JobseekerForm';
import Employersignup from './components/Employersignup';
// import Employerform from './components/Employerform';
function App() {

  return (
    <Router>
      <div className="header-container">
        
        <Routes>
          <Route path ='/' element={<HOME/>}/>
          <Route path ='/about' element={<ABOUT/>}/>
          <Route path ='/offerspage' element={<Offerspage/>}/>
          <Route path= '/Jobseekerprofile' element={<Jobseekerprofile/>}/>
          <Route path= '/login' element={<Login/>}/>
          <Route path= '/jobseekersignup' element={<Jobseekersignup/>}/>
          <Route path='/jobseekerform' element={<JobSeekerForm/>}/>
          <Route path='/employersignup' element={<Employersignup/>}/>
          {/* <Route path='/employerform' element={<Employerform/>}/> */}
          

        </Routes>
      </div>
    </Router>
  )
}

export default App