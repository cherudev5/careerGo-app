import { useState } from 'react';
import { useNavigate  } from 'react-router-dom'; // Import useNavigate 
import image from '../images/login.jpg';

const LoginForm = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate (); // Initialize useNavigate 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiEndpoint = 'http://127.0.0.1:5050/login';

    const loginData = {
      identifier,
      password,
    };

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error('Failed to authenticate. Please try again.');
      }

      const data = await response.json();

      console.log('API response:', data);

      // Redirect to user profile upon successful login
      history.push('/Jobseekerprofile'); // Change '/user/profile' to your actual profile route
    } catch (error) {
      console.error('API error:', error);
    }

    setIdentifier('');
    setPassword('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-lavender-100 to-lavender-300">
      <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow-md p-8">
        {/* Login form section */}
        <div className="p-8 rounded-lg">
          <h1 className="text-3xl font-bold mb-6 text-gray-200 text-center">
            Login
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="identifier"
                className="block mb-2 font-light text-gray-200"
              >
                Username/Email/Phone:
              </label>
              <input
                type="text"
                id="identifier"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="border border-lightskyblue p-2 w-full rounded-lg focus:outline-none focus:border-royalblue"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 font-light text-gray-200"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-lightskyblue p-2 w-full rounded-lg focus:outline-none focus:border-royalblue"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-royalblue text-white px-4 py-2 rounded-lg w-full hover:bg-mediumslateblue"
            >
              Login
            </button>
          </form>
        </div>

        {/* Image section */}
        <div className="hidden md:block">
          <img
            src={image}
            alt="Login illustration"
            className="w-full h-full object-cover rounded-lg border border-lightskyblue"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
