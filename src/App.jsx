import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Offerspage from './components/offerspage';
import Jobseekerprofile from'./components/Jobseekerprofile';
import ABOUT from './Pages/About';
import HOME from './Pages/Home';
import Login from './components/Login';
import Jobseekersignup from './components/Jobseekersignup';
import JobSeekerForm from './components/JobseekerForm';
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
          
          

        </Routes>
      </div>
    </Router>
  )
}

export default App