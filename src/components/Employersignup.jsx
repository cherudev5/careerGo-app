import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
import image from '../images/career.jpg';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: 'employer',
        phone_number: '',
        
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
            const response = await fetch('https://careergo-api.onrender.com//users', {
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
                    duration: 2000,
                    gravity: "top",
                    position: "right",
                    backgroundColor: "linear-gradient(to right, #354f52, #7e9979)",
                }).showToast();

                setFormData({
                    username: '',
                    email: '',
                    password: '',
                    role: 'employer',
                    phone_number: '',
                    
                });
                setPasswordConfirmation('');

                setTimeout(() => {
                    navigate('/employer-form');
                }, 2000); 

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
        <div className="flex justify-center items-center h-1/2 shadow-lg p-4 rounded bg-gradient-to-r from-[#71e1ee] to-[#8494ee]">
            <div className="flex w-3/4 bg-white shadow-md rounded-md p-8">
                <div className="w-1/2 flex-shrink-0">
                    <img
                        src={image}
                        alt="career"
                        className="w-full h-full object-cover rounded-md border border-[#a5b6d6]"
                    />
                </div>

                <div className="w-1/2 p-8 flex flex-col justify-center">
                    <h2 className="text-darkGreen text-2xl font-semibold mb-6 text-center">Register as Employer</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label htmlFor="username" className="block text-darkTeal font-medium mb-2">
                                Username:
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                required
                                className="border border-[#ffd700] p-2 w-full rounded-lg focus:outline-none focus:border-[#006400]"
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="email" className="block text-darkTeal font-medium mb-2">
                                Email:
                            </label>
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
                            <label htmlFor="phone_numberNumber" className="block text-darkTeal font-medium mb-2">
                                phone_number Number:
                            </label>
                            
                                <input
                                    type="tel"
                                    id="phone_number"
                                    name="phone_number"
                                    value={formData.phone_numberNumber}
                                    onChange={handleInputChange}
                                    required
                                    className="border border-[#ffd700] p-2 w-full rounded-lg focus:outline-none focus:border-[#006400]"
                                    placeholder="Enter phone_number number in the format +2547xxxxxxxx"
                                />
                            
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password" className="block text-darkTeal font-medium mb-2">
                                Password:
                            </label>
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
                            <label htmlFor="passwordConfirmation" className="block text-darkTeal font-medium mb-2">
                                Confirm Password:
                            </label>
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
                            <div className="bg-red-100 text-red-700 p-3 rounded-md mb-4">
                                {errorMessage}
                            </div>
                        )}
                        <button
                            type="submit"
                            className="bg-[#374369] text-white px-4 py-2 rounded-lg w-full hover:bg-[#446552]"
                        >
                            Sign Up
                        </button>
                    </form>

                    <div className="mt-4 text-center">
                        <p className="text-darkTeal">
                            Already signed up?{' '}
                            <Link to="/login" className="text-blue-500 underline">
                                Login here.
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;
