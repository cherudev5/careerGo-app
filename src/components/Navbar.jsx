import { Link } from 'react-router-dom';
import image from '../images/logo2.png';

function Navbar() {
    return (
        <div className="navbar">
        <div className="left">
          <img src={image} alt="Company Logo" className="company-logo" />
        </div>
        <div className="center">
          <h1>CareerGO</h1>
        </div>
        <div className="right">
         <Link to="/"className="mr-4">Home</Link>
         <Link to="/login"className="mr-4">Login</Link>
         {/* <Link to="/Jobseeker-form"className="mr-4">Form</Link> */}
         {/* <Link to="/employer-form"className="mr-4">EmployerForm</Link>
         <Link to="/jobseeker_profile"className="mr-4">Profile</Link> */}
        </div>
      </div>
    );
}

export default Navbar;