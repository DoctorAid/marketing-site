import React from 'react';

const EarlyAccess = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg"
      >
        <div className="mb-6">
          <h6 className="text-xl font-semibold text-gray-800">Get Early Access</h6>
          <hr className="mt-2 border-gray-300" />
        </div>
        <input
          type="hidden"
          name="access_key"
          value="3e5075b8-a471-460b-9099-9b8e6b47fe16"
        />
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Speciality"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Working Place/ Clinic Location"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            placeholder="Your message"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center w-full bg-primary text-white py-3 rounded-md hover:bg-secondary transition-colors"
        >
          Submit <i className="fa-solid fa-arrow-right ml-2"></i>
        </button>
      </form>
    </div>
  );
};

export default EarlyAccess;
