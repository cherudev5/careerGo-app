import React, { useState } from 'react';

// Define an array of avatars based on the company avatar files
const companyAvatars = [
  'company1.jpg',
  'company2.jpg',
  'company3.jpg',
  'company4.jpg',
  
];

const EmployerForm = () => {
  
  const [formData, setFormData] = useState({
    profilePicture: null,
    location: '',
    size: '',
    description: '',
    website: '',
    companyRegistration: null,
  });

  const [currentStep, setCurrentStep] = useState(1);

 
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };


  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  
  const renderStepIndicator = () => {
    const steps = ['1', '2', '3'];
    return (
      <div className="flex justify-center items-center mb-6">
        {steps.map((step, index) => {
          const isActive = index + 1 === currentStep;
          const isComplete = index < currentStep - 1;
          const isLastStep = index === steps.length - 1;

          return (
            <React.Fragment key={index}>
              <div className={`flex items-center ${!isLastStep ? 'flex-1' : ''}`}>
                {/* Render the dot */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    isActive ? 'bg-gold text-white' : isComplete ? 'bg-darkGreen text-white' : 'bg-gray-300 text-gray-700'
                  }`}
                >
                  {step}
                </div>

                {/* Render the connecting line */}
                {!isLastStep && (
                  <div className={`flex-1 h-1 mx-2 ${isComplete ? 'bg-darkTeal' : 'bg-gray-300'}`} />
                )}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4 bg-gradient-to-r from-[#354f52] to-[#7e9979]">
      <h2 className="text-2xl font-bold mb-4 text-black">Employer Form</h2>

      {/* Render the step indicator */}
      {renderStepIndicator()}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Step 1: Profile picture, location, and size */}
        {currentStep === 1 && (
          <div>
            <h3 className="text-xl font-semibold mb-2 text-black">Step 1: Profile</h3>
            
            {/* Profile Picture */}
            <div className="mb-4">
              <label className="block mb-2 text-black">Profile Picture: Choose from icons or upload:</label>
              <div className="flex flex-wrap mb-2">
               
                {companyAvatars.map((avatar, index) => (
                  <img
                    key={index}
                    src={`/src/companyavatar/${avatar}`} // Path to the company avatars directory
                    alt={`Avatar ${index + 1}`}
                    className={`w-12 h-12 rounded-full cursor-pointer m-1 ${
                      formData.profilePicture === avatar ? 'border-2 border-darkGreen' : ''
                    }`}
                    onClick={() => setFormData({ ...formData, profilePicture: avatar })}
                  />
                ))}
              </div>
              {/* Allow users to upload their own profile picture */}
              <input
                type="file"
                name="profilePicture"
                accept="image/*"
                onChange={handleChange}
                className="p-2 border rounded w-full"
              />
            </div>
            
            {/* Location */}
            <div className="mb-4">
              <label className="block mb-2 text-black">Location:</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="p-2 border rounded w-full"
              />
            </div>
            
            {/* Size */}
            <div className="mb-4">
              <label className="block mb-2 text-black">Size:</label>
              <input
                type="text"
                name="size"
                value={formData.size}
                onChange={handleChange}
                className="p-2 border rounded w-full"
              />
            </div>
            
            {/* Next button */}
            <button
              type="button"
              onClick={nextStep}
              className="p-2 bg-gold text-white rounded"
            >
              Next
            </button>
          </div>
        )}

        {/* Step 2: Description, website, and company registration */}
        {currentStep === 2 && (
          <div>
            <h3 className="text-xl font-semibold mb-2 text-black">Step 2: Description and Additional Details</h3>
            
            {/* Description */}
            <div className="mb-4">
              <label className="block mb-2 text-black">Description:</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="p-2 border rounded w-full"
                rows={4}
              />
            </div>
            
            {/* Website */}
            <div className="mb-4">
              <label className="block mb-2 text-black">Website:</label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="p-2 border rounded w-full"
              />
            </div>
            
            {/* Company Registration (file upload) */}
            <div className="mb-4">
              <label className="block mb-2 text-black">Company Registration:</label>
              <input
                type="file"
                name="companyRegistration"
                accept=".pdf" // Specify allowed file types
                onChange={handleChange}
                className="p-2 border rounded w-full"
              />
            </div>
            
            {/* Navigation buttons */}
            <button
              type="button"
              onClick={prevStep}
              className="p-2 bg-darkTeal text-white rounded mr-2"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={nextStep}
              className="p-2 bg-gold text-white rounded"
            >
              Next
            </button>
          </div>
        )}

        {/* Step 3: Review and submit */}
        {currentStep === 3 && (
          <div>
            <h3 className="text-xl font-semibold mb-2 text-black">Step 3: Review and Submit</h3>
            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2 text-black">Review your details:</h4>
              <ul>
                <li className="mb-2">Profile Picture: {formData.profilePicture}</li>
                <li className="mb-2">Location: {formData.location}</li>
                <li className="mb-2">Size: {formData.size}</li>
                <li className="mb-2">Description: {formData.description}</li>
                <li className="mb-2">Website: {formData.website}</li>
                <li className="mb-2">Company Registration: {formData.companyRegistration?.name}</li>
              </ul>
            </div>
            
            {/* Navigation and Submit buttons */}
            <button
              type="button"
              onClick={prevStep}
              className="p-2 bg-darkTeal text-white rounded mr-2"
            >
              Previous
            </button>
            <button
              type="submit"
              className="p-2 bg-gold text-white rounded"
            >
              Submit
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default EmployerForm;
