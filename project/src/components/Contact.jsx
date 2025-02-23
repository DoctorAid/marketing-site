import React from 'react';
import { Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-[#EBF5FF] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Section */}
          <div className="md:w-1/2">
            <h2 className="text-5xl font-bold text-[#5296B8] leading-tight">
              We&apos;d Love to<br />
              Hear From You!
            </h2>
            <p className="text-[#555] mt-6 max-w-xl">
              Your thoughts matter to us! Whether you have a question, suggestion, or just want to share your experience, we&apos;re here to listen. Every message helps us improve and serve you better. Reach out today—we&apos;re just a click away!
            </p>
            
            {/* Follow Us Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-[#5296B8] mb-4">Follow Us</h3>
              <a
                href="YOUR_INSTAGRAM_URL_HERE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[#5296B8] hover:text-[#407a94] transition-colors"
              >
                <Instagram size={42} className="cursor-pointer" />
              </a>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="md:w-1/2">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-[#5296B8] mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5296B8] bg-white"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-[#5296B8] mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5296B8] bg-white"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#5296B8] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5296B8] bg-white"
                  placeholder="youremail@email.com"
                />
              </div>

              <div>
                <label htmlFor="contactNumber" className="block text-sm font-medium text-[#5296B8] mb-2">
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5296B8] bg-white"
                  placeholder="+49 123 2324562926"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#5296B8] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5296B8] bg-white"
                  placeholder="Your Message goes here"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;