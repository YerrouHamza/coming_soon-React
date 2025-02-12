import React from "react";
import BackgroundImage from "../assets/backgroundImage.jpg";

export default function MainLayout({children}: {children: React.ReactNode}) {
  return (
    <main className="font-poppins relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className="absolute inset-0 bg-gradient-to-br to-blue-950 from-white opacity-80"></div>
      <div className="relative z-10 flex flex-col items-center justify-center text-gray-900 text-center p-6">
        {children}
      </div>
    </main>
  );
};