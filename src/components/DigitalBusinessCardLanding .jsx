import React from 'react';
import { Button } from '@/components/ui/button';
import Navbar from './Navbar';
import tablet from './../../images/close-up-hand-holding-futuristic-screen.jpg'
import man from './../../images/medium-shot-man-holding-device.jpg'

const DigitalBusinessCardLanding = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="absolute w-4 h-4 bg-[#FFD1DC] rounded-full top-20 left-10" />
      <Navbar />
      <div className="w-[60%] mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-scale-in opacity-0">
            <h1 className="text-6xl font-bold">
              <span className="text-gray-800">Seha</span>
              <br />
              <span className="text-[#FFD700]">
                Solutions
              </span>
            </h1>
            <p className="text-gray-600 text-lg font-bold\">
            where innovative digital solutions empower businesses to enhance compliance, ensure quality, and safeguard consumer health.
            </p>
            <div className="flex gap-4">
              <Button className="bg-[#FFD1DC] text-white hover:bg-pink-300 rounded-full text-xl px-6">
                Discover Services
              </Button>
              <Button variant="outline" className="border-[#FFD1DC] text-[#FFD1DC] hover:bg-pink-50 rounded-full px-6">
                Contact Us
              </Button>
            </div>
          </div>

          <div className="relative animate-scale-in opacity-0">
            <div className="absolute w-96 h-96 bg-[#FFD1DC]/20 rounded-full right-0 top-0" />
            <div className="relative">
              <div className="w-[300px] ml-auto">
                <div className="relative">
                  {/* Phone frame */}
                  <div className="bg-gray-900 rounded-[3rem] p-4 transform rotate-12">
                    <div className="bg-white rounded-[2.5rem] p-2 h-[600px] relative overflow-hidden">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-b-xl" />

                      {/* Sample content */}
                      <div className="mt-8 p-4">
                        <div className="w-full h-32 bg-[#FFD1DC] rounded-xl mb-4">
                          <img src={man} alt="" className="w-full h-full object-cover rounded-xl" />
                        </div>
                        <div className="space-y-2">
                          <div className="w-3/4 h-4 bg-gray-100 rounded" />
                          <div className="w-full h-4 bg-gray-100 rounded" />
                          <div className="w-5/6 h-4 bg-gray-100 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating card */}
                  <div className="absolute top-1/3 -left-12 bg-white p-4 rounded-xl shadow-lg transform -rotate-6">
                    <div className="w-48 h-24 bg-[#FFD1DC] rounded-lg">
                      <img src={tablet} alt="" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="mt-2 space-y-1">
                      <div className="w-3/4 h-2 bg-gray-100 rounded" />
                      <div className="w-full h-2 bg-gray-100 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8) translateZ(-100px);
            perspective: 1000px;
          }
          to {
            opacity: 1;
            transform: scale(1) translateZ(0);
            perspective: 1000px;
          }
        }

        .animate-scale-in {
          animation: scaleIn 4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default DigitalBusinessCardLanding;