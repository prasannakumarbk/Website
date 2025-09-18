import React from 'react';
import { ArrowRight, Zap, Shield, Truck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Electronics & 
              <span className="text-orange-400"> Semiconductors</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Discover cutting-edge electronic components, processors, development boards, and sensors 
              for your next innovation. Premium quality, competitive prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all transform hover:scale-105">
                <span>Shop Now</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all">
                View Catalog
              </button>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg"
              alt="Electronic Components"
              className="rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="flex items-center space-x-4">
            <div className="bg-orange-500 p-3 rounded-lg">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">High Performance</h3>
              <p className="text-blue-100">Premium electronic components</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="bg-orange-500 p-3 rounded-lg">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Quality Assured</h3>
              <p className="text-blue-100">Tested and verified products</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="bg-orange-500 p-3 rounded-lg">
              <Truck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Fast Shipping</h3>
              <p className="text-blue-100">Quick delivery worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};