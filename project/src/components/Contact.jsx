import React, { useState, useEffect } from 'react';
import { Instagram } from 'lucide-react';

const Contact = () => {
  // State management with proper initialization
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Add visibility effect like in Hero component
  useEffect(() => {
    setIsVisible(true);
    
    // Clean up animation frames or timers if needed
    return () => {
      // Any cleanup code needed
    };
  }, []);

  // Direct event handler approach to ensure changes are captured
  const handleChange = (e) => {
    const { id, value } = e.target;
    
    // Update in a way that ensures the change is processed
    setFormData((prevState) => {
      const newState = { ...prevState };
      newState[id] = value;
      return newState;
    });
    
    // Clear errors immediately
    if (errors[id]) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Handle successful submission
      setSubmitSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Submission error:', error);
      setErrors({ form: 'Failed to submit the form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-hidden bg-blue-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Section with animation similar to Hero */}
          <div className={`md:w-1/2 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <h2 className="text-5xl font-bold text-primary leading-tight">
              We&apos;d Love to<br />
              Hear From You!
            </h2>
            <p className={`text-gray-600 mt-6 max-w-xl transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Your thoughts matter to us! Whether you have a question, suggestion, or just want to share your experience, we&apos;re here to listen. Every message helps us improve and serve you better. Reach out today—we&apos;re just a click away!
            </p>
            
            {/* Follow Us Section */}
            <div className={`mt-12 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <h3 className="text-2xl font-bold text-primary mb-4">Follow Us</h3>
              <a
                href="https://www.instagram.com/doctoraid.official/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="relative inline-block text-primary hover:text-primary transition-colors cursor-pointer"
              >
                <Instagram size={32} className="hover:scale-110 transition-transform duration-200" />
              </a>
            </div>
          </div>

          {/* Right Section - Form with animation similar to Hero */}
          <div className={`md:w-1/2 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            {submitSuccess ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6" role="alert">
                <p className="font-bold">Thank you!</p>
                <p>Your message has been sent successfully. We'll be in touch soon.</p>
              </div>
            ) : null}

            {errors.form && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6" role="alert">
                <p>{errors.form}</p>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-primary mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full p-3 border ${errors.firstName ? 'border-red-500' : 'border-gray-200'} rounded-md focus:outline-none focus:ring-1 focus:ring-primary bg-white`}
                    placeholder="First name"
                    aria-required="true"
                  />
                  {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-primary mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full p-3 border ${errors.lastName ? 'border-red-500' : 'border-gray-200'} rounded-md focus:outline-none focus:ring-1 focus:ring-primary bg-white`}
                    placeholder="Last name"
                    aria-required="true"
                  />
                  {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-md focus:outline-none focus:ring-1 focus:ring-primary bg-white`}
                  placeholder="youremail@email.com"
                  aria-required="true"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="contactNumber" className="block text-sm font-medium text-primary mb-2">
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary bg-white"
                  placeholder="+49 123 456 7890"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-3 border ${errors.message ? 'border-red-500' : 'border-gray-200'} rounded-md focus:outline-none focus:ring-1 focus:ring-primary bg-white`}
                  placeholder="Your message goes here"
                  aria-required="true"
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="group relative bg-gradient-to-r from-primary to-darkblue text-white px-6 py-3 rounded-lg
                  overflow-hidden transition-all duration-300 hover:shadow-lg
                  flex items-center justify-center gap-3 w-full"
                disabled={isSubmitting}
              >
                <span className="font-medium z-10">{isSubmitting ? 'Submitting...' : 'Submit'}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;