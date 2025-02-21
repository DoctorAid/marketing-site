import React from 'react';

const FeatureCard = () => (
  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
      <FaSearch className="text-primary text-xl algin-center" />
    </div>
    <h3 className="text-lg font-semibold mb-2">Find a Doctor</h3>
    <p className="text-gray-600 text-sm">Search for trusted GPs near you</p>
  </div>
);

const Features = () => {
  return (
    <div className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Effortless  at<br />Your Fingertips
        </h2>
      </div>
      <div className="flex flex-cols-1 justify-center md:grid-cols-1 lg:grid-cols-4 gap-12 ">
      <div className="flex flex-col max-w-7xl items-center justify-center ">
      <div class="w-[221px] h-[246px] relative">
      <div class="w-[221px] h-[246px] left-0 top-0 absolute bg-white rounded-[29px] shadow-md hover:shadow-lg transition-shadow"></div>
      <img class="w-[76px] h-[76px] left-[73px] top-[41px] absolute" src="https://placehold.co/76x76" />
      <div class="w-[140px] h-[45px] left-[41px] top-[174px] absolute text-center text-black text-base font-normal font-['Raleway']">Search for trusted GPs near you<br/></div>
      <div class="w-[158px] h-[45px] left-[36px] top-[136px] absolute text-black text-2xl font-bold font-['Raleway']">Find a Doctor</div>
</div>
</div>
<div className="flex flex-col max-w-7xl items-center justify-center "><div class="w-[221px] h-[246px] relative">
    <div class="w-[221px] h-[246px] left-0 top-0 absolute bg-white rounded-[29px] shadow-md hover:shadow-lg transition-shadow"></div>
    <img class="w-[76px] h-[76px] left-[73px] top-[41px] absolute" src="https://placehold.co/76x76" />
    <div class="w-[140px] h-[45px] left-[41px] top-[174px] absolute text-center text-black text-base font-normal font-['Raleway']">Search for trusted GPs near you<br/></div>
    <div class="w-[158px] h-[45px] left-[36px] top-[136px] absolute text-black text-2xl font-bold font-['Raleway']">Find a Doctor</div>
</div>
</div>
<div className="flex flex-col max-w-7xl items-center justify-center  "><div class="w-[221px] h-[246px] relative">
    <div class="w-[221px] h-[246px] left-0 top-0 absolute bg-white rounded-[29px] shadow-md hover:shadow-lg transition-shadow"></div>
    <img class="w-[76px] h-[76px] left-[73px] top-[41px] absolute" src="https://placehold.co/76x76" />
    <div class="w-[140px] h-[45px] left-[41px] top-[174px] absolute text-center text-black text-base font-normal font-['Raleway']">Search for trusted GPs near you<br/></div>
    <div class="w-[158px] h-[45px] left-[36px] top-[136px] absolute text-black text-2xl font-bold font-['Raleway']">Find a Doctor</div>
</div>
</div>
<div className="flex flex-col max-w-7xl items-center justify-center"><div class="w-[221px] h-[246px] relative">
    <div class="w-[221px] h-[246px] left-0 top-0 absolute bg-white rounded-[29px] shadow-md hover:shadow-lg transition-shadow"></div>
    <img class="w-[76px] h-[76px] left-[73px] top-[41px] absolute" src="https://placehold.co/76x76" />
    <div class="w-[140px] h-[45px] left-[41px] top-[174px] absolute text-center text-black text-base font-normal font-['Raleway']">Search for trusted GPs near you<br/></div>
    <div class="w-[158px] h-[45px] left-[36px] top-[136px] absolute text-black text-2xl font-bold font-['Raleway']">Find a Doctor</div>
</div>
</div>
        </div>
        <div className="flex items-center justify-center">
        <img src="/src/assets/child-cheerful-laughing-parent.png" alt="Laptop" className="  mb-[-4.85%] w-[50%] h-auto" />
        </div>
      </div>
  );
};

export default Features;