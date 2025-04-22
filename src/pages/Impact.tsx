import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const Impact = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Impact on Society</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Economic Impact</h2>
          <p className="mb-4">
            Our agricultural initiatives have created sustainable economic opportunities for rural communities, increasing average farmer income by 30% and creating over 500 local jobs.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Environmental Impact</h2>
          <p className="mb-4">
            Through sustainable farming practices, we've reduced water usage by 40% and eliminated harmful pesticides, restoring local biodiversity and improving soil health.
          </p>
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Social Impact</h2>
        <p className="mb-4">
          Our programs have empowered over 2,000 farmers with new skills and knowledge, with a particular focus on supporting women farmers who now make up 45% of our network.
        </p>
      </div>
      
      <div className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Impact Metrics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <p className="text-4xl font-bold text-green-600">2,000+</p>
            <p>Farmers Supported</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-4xl font-bold text-green-600">30%</p>
            <p>Income Increase</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-4xl font-bold text-green-600">40%</p>
            <p>Water Saved</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-4xl font-bold text-green-600">500+</p>
            <p>Jobs Created</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;