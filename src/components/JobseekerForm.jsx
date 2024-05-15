import React, { useState } from 'react';


const userAvatars = [
  'Avatar1.jpg',
  'Avatar2.jpg',
  'Avatar3.jpg',
  'Avatar4.jpg',
  'Avatar5.jpg',
  'Avatar6.jpg',
  'Avatar7.jpg',
  
  
];

const JobSeekerForm = () => {
  
  const [formData, setFormData] = useState({
    picture: null,
    firstname: '',
    lastname: '',
    job_category: '',
    availability: '',
    salary_expectation: '',
    skills: [],
    experience: '',
    qualifications: '',
    resume: null,
    cv: null,
    github_link: '',
    linkedin_link: '',
    profile_verified:'Unverified'
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5050/jobseekers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Failed to submit form data');
      }
      // Handle success, e.g., show a success message
      console.log('Form submitted successfully');
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error('Error submitting form:', error);
    }
  };

  
  const nextStep = () => {
    if (currentStep < 7) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };


  const renderStepIndicator = () => {
    const steps = ['1', '2', '3', '4', '5', '6','7'];
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
  const renderSkillOptions = () => {
    const skillsData = [
      { name: 'Communication skills (verbal and written)'},
      { name: 'Problem-solving'},
      { name: 'Time management'},
      { name: 'Adaptability',},
      {name: 'Teamwork/collaboration'},
      {name: 'Decision-making'},
      {name: 'Leadership'},
      {name: 'Critical thinking'},
      {name: 'Self-motivation'},
      {name: 'Initiative'},
      {name: 'Adaptability'},
      {name: 'Attention to detail'},
      {name: 'Creativity'},
      {name: 'Flexibility'},
      {name: 'Organization'},
      {name: 'Customer service'},
      {name: 'Project management'},
      {name: 'Emotional intelligence'},
      {name: 'Presentation skills'},
      {name:'Conflict resolution'},
      {name:'Networking skills'},
      
    ];

    return skillsData.map((skill, index) => (
      <div key={index} className="mb-4">
        <label className="block mb-2 text-gold">
          <input
            type="checkbox"
            name="skills"
            data-skill={skill.name}
            onChange={handleChange}
            className="mr-2"
          />
          {skill.name}
        </label>
      
      </div>
    ));
  };
  const renderQualificationOptions = () => {
    const qualificationData = [
      { name: 'High School Diploma or Equivalent'},
      { name: `Bachelor's Degree (B.A. or B.S.)`},
      { name: `Master's Degree (M.A., M.S., M.B.A., etc.)`},
      { name: `Doctorate (Ph.D., M.D., Ed.D., etc.)`},
      {name: `Professional Certifications`},
      {name: 'Diploma or Certificate Programs'},
      ];

    return qualificationData.map((qualification, index) => (
      <div key={index} className="mb-4">
        <label className="block mb-2 text-gold">
          <input
            type="checkbox"
            name="qualification"
            data-skill={qualification.name}
            onChange={handleChange}
            className="mr-2"
          />
          {qualification.name}
        </label>
      
      </div>
    ));
  };

  return (
    <div className="container mx-auto p-4 bg-darkTeal">
      <h2 className="text-2xl font-bold mb text-wh text-center">Job Seeker Form</h2>

      {/* Render the step indicator */}
      {renderStepIndicator()}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Step 1: Upload profile picture, first name, second name, and job category */}
        {currentStep === 1 && (
          <div>
            <h3 className="text-xl font-semibold mb text-wh text-center">Step 1: Profile</h3>
            <div className="mb-4">
              <label className="block mb text-wh">Profile Picture: Choose from Avatars or upload:</label>
              <div className="flex flex-wrap mb-2">
                {/* Render avatars for selection */}
                {userAvatars.map((avatar, index) => (
                  <img
                    key={index}
                    src={`/src/useravatar/${avatar}`} // Path to the user avatars directory
                    alt={`Avatar ${index + 1}`}
                    className={`w-12 h-15 rounded-full cursor-pointer m-1 ${
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
            <div className="mb-4">
              <label className="block mb text-wh">First Name:</label>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                className="p-2 border rounded w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb text-wh">Second Name:</label>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                className="p-2 border rounded w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb text-wh">Job Category:</label>
              <select
                name="job_category"
                value={formData.job_category}
                onChange={handleChange}
                className="p-2 border rounded w-full"
                required
              >
                <option></option>
                <option value="Administrative and Clerical">Administrative and Clerical</option>
                <option value="Sales and Customer Service">Sales and Customer Service</option>
                <option value="Information Technology (IT)">Information Technology (IT)</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education and Training">Education and Training</option>
                <option value="Finance and Accounting">Finance and Accounting</option>
                <option value="Engineering">Engineering</option>
                <option value="Marketing and Advertising">Marketing and Advertising</option>
                <option value="Construction and planning">Construction and Planning</option>
                <option value="Arts and Entertainment">Arts and Entertainment</option>
                <option value="Hospitality and Tourism">Hospitality and Tourism</option>
                <option value="Research and Development">Research and Development</option>
                </select> *Required
            </div>
            <button
              type="button"
              onClick={nextStep}
              className="p-2 bg-gold text-white rounded"
            >
              Next
            </button>
          </div>
        )}

        {/* Step 2: availability and Salary Expectation */}
        {currentStep === 2 && (
          <div>
            <h3 className="text-xl font-semibold mb text-wh text-center ">Step 2: availability and Salary Expectation</h3>
            <div className="mb-4">
              <label className="block mb text-wh">Select availability:</label>
              <select
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                className="p-2 border rounded w-full"
                required
              >
                <option></option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
                <option value="Freelance/Consulting ">Freelance/Consulting </option>
                <option value="Temporary">Temporary</option>
                <option value="Apprenticeships">Apprenticeships</option>
                <option value="Flexible Work Arrangements">Flexible Work Arrangements</option>
                
              </select> *Required
            </div>
            <div className="mb-4">
              <label className="block mb text-wh ">Salary Expectation:</label>
              <input
                type="text"
                name="salary_expectation"
                value={formData.salary_expectation}
                onChange={handleChange}
                className="p-2 border rounded w-full"
                required
              />
            </div>
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

        {/* Step 3: skills */}
        {currentStep === 3 && (
          <div>
            <h3 className="text-xl font-semibold mb text-wh text-center">Step 3: skills</h3>
            <div className="mb-4">
              <label className="block mb text-wh">skills:</label>
              {renderSkillOptions()}              
            </div>
                        
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
        {/* Step 4: experience, and qualifications */}
        {currentStep === 4 && (
          <div>
            <h3 className="text-xl font-semibold mb text-wh text-center">Step 4: experience, and qualifications</h3>
            <div className="mb-4">
      <label className="block mb text-wh">experience:</label>
      <textarea
        name="experience"
        value={formData.experience}
        onChange={handleChange}
        className="p-2 border rounded w-full"
        rows="8" // Set the number of visible rows
      />
    </div>
    <div className="mb-4">
      <label className="block mb text-wh">qualifications:</label>
      {renderQualificationOptions()}  
    </div>
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
        {/* Step 5: Upload files (resume and CV) */}
        {currentStep === 5 && (
          <div>
            <h3 className="text-xl font-semibold mb text-wh text-center">Step 5: Upload Files</h3>
            <div className="mb-4">
              <label className="block mb text-wh">Resume:</label>
              <input
                type="file"
                name="resume"
                accept=".pdf"
                onChange={handleChange}
                className="p-2 border rounded w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb text-wh">CV:</label>
              <input
                type="file"
                name="cv"
                accept=".pdf"
                onChange={handleChange}
                className="p-2 border rounded w-full"
                required
              />
            </div>
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

        {/* Step 6: Provide links (GitHub and LinkedIn) */}
        {currentStep === 6 && (
          <div>
            <h3 className="text-xl font-semibold mb text-wh text-center">Step 6: Provide Links</h3>
            <div className="mb-4">
              <label className="block mb text-wh">GitHub Link:</label>
              <input
                type="url"
                name="github_link"
                value={formData.github_link}
                onChange={handleChange}
                className="p-2 border rounded w-full"
                placeholder="https://github.com/username"
              />
            </div>
            <div className="mb-4">
              <label className="block mb text-wh">LinkedIn Link:</label>
              <input
                type="url"
                name="linkedin_link"
                value={formData.linkedin_link}
                onChange={handleChange}
                className="p-2 border rounded w-full"
                placeholder="https://www.linkedin.com/in/username"
              />
            </div>
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

        {/* Step 6: Review the form and submit */}
        {currentStep === 7 && (
          <div>
            <h3 className="text-xl font-semibold mb text-wh text-center">Step 7: Review and Submit</h3>
            <div className="mb-4">
              <h4 className="text-lg font-semibold mb text-wh">Review your details:</h4>
              <ul>
                <li className="mb-2">Name: {formData.firstname} {formData.lastname}</li>
                <li className="mb-2">Job Category: {formData.job_category}</li>
                <li className="mb-2">availability: {formData.availability}</li>
                <li className="mb-2">Salary Expectation: {formData.salary_expectation}</li>
                <li className="mb-2">skills: {formData.skills}</li>
                <li className="mb-2">experience: {formData.experience}</li>
                <li className="mb-2">qualifications: {formData.qualifications}</li>
                <li className="mb-2">GitHub Link: {formData.github_link}</li>
                <li className="mb-2">LinkedIn Link: {formData.linkedin_link}</li>
              </ul>
            </div>
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

export default JobSeekerForm;
