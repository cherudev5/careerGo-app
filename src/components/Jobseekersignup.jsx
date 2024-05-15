import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css"; 
import image from '../images/jobseeker.jpg';

const jobseekersignup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        phone:'',
        role: 'jobseeker',
    });

    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); 

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'passwordConfirmation') {
            setPasswordConfirmation(value);
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== passwordConfirmation) {
            setErrorMessage('Password and confirmation do not match.');
            return;
        }

        if (formData.password.length < 8) {
            setErrorMessage('Password must be at least 8 characters long.');
            return;
        }

        setErrorMessage('');

        try {
            const response = await fetch('http://127.0.0.1:5050/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Form submitted successfully');
                
                Toastify({
                    text: "Registration successful!",
                    duration: 1000,
                    gravity: "top",
                    position: "right",
                    backgroundColor: "linear-gradient(to right, #354f52, #7e9979)",
                }).showToast();

                setFormData({
                    username: '',
                    email: '',
                    password: '',
                    phone:'',
                    role: 'jobseeker',
                });
                setPasswordConfirmation('');
                
                setTimeout(() => {
                    navigate('/Jobseeker-form');
                }, 1000); 

            } else if (response.status === 400) {
                setErrorMessage('Username or email already exists.');
            } else {
                console.error('Form submission failed:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <div className="flex justify-center items-center h-1/2 shadow-lg shadow-black p-4 round bg-gradient-to-r from-lavender-100 to-lavender-300">
            <div className="flex w-3/4 bg-white shadow-md rounded-md p-8">
                <div className="w-1/2 flex-shrink-0">
                    <img
                        src={image} 
                        alt="avatar"
                        className="w-full h-full object-cover rounded-md border border-[#6b6956]"
                    />
                </div>
                <div className="w-1/2 p-8 flex flex-col justify-center">
                    <h2 className="text-darkGreen text-2xl font-semibold mb-6 text-center">Register as Jobseeker</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label htmlFor="username" className="block text-darkTeal font-medium mb-2">Username:</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                required
                                className="border border-[#e6e3d2] p-2 w-full rounded-lg focus:outline-none focus:border-[#006400]"
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="email" className="block text-darkTeal font-medium mb-2">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="border border-[#ffd700] p-2 w-full rounded-lg focus:outline-none focus:border-[#006400]"
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="phoneNumber" className="block text-darkTeal font-medium mb-2">
                                Phone Number:
                            </label>
                            
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    className="border border-[#ffd700] p-2 w-full rounded-lg focus:outline-none focus:border-[#006400]"
                                    placeholder="Enter phone number"
                                />
                            
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password" className="block text-darkTeal font-medium mb-2">Password:</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                    className="border border-[#ffd700] p-2 w-full rounded-lg focus:outline-none focus:border-[#006400]"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 flex items-center px-3 text-darkTeal"
                                >
                                    {showPassword ? 'Hide' : 'Show'}
                                </button>
                            </div>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="passwordConfirmation" className="block text-darkTeal font-medium mb-2">Confirm Password:</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="passwordConfirmation"
                                name="passwordConfirmation"
                                value={passwordConfirmation}
                                onChange={handleInputChange}
                                required
                                className="border border-[#ffd700] p-2 w-full rounded-lg focus:outline-none focus:border-[#006400]"
                            />
                        </div>
                        {errorMessage && (
                            <div className="bg-red-100 text-red-700 p-3 rounded-md mb-4">{errorMessage}</div>
                        )}
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Sign Up
                        </button>
                    </form>
                    <div className="mt-4">
                        <p className="text-gray-700">Already signed up?{' '}<Link to="/login" className="text-darkGreen underline">Login here.</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default jobseekersignup;
