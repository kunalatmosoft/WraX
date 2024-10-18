"use client"

import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight, Star, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import SubscribeForm from '@/components/SubscribeForm';
export default function PremiumDarkHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    controls.start({
      x: mousePosition.x / 50,
      y: mousePosition.y / 50,
    });
  }, [mousePosition, controls]);

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-0.5 w-0.5 bg-white rounded-full"
              animate={{
                x: [0, mousePosition.x / 20, 0],
                y: [0, mousePosition.y / 20, 0],
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative inline-block"
              >
                <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-600">
                  Elevate Your Experience
                </h1>
                <motion.div
                  className="absolute -top-6 -left-6 text-yellow-500"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <Sparkles className="h-8 w-8" />
                </motion.div>
              </motion.div>
              <motion.p
                className="text-xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Immerse yourself in a world of luxury and innovation. Our premium platform redefines excellence.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:from-amber-600 hover:to-orange-700 flex items-center justify-center group">
                 <Link href="/Dashboard"> Experience Now</Link>
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-transparent text-white font-bold py-3 px-8 rounded-full border-2 border-amber-500 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-amber-500/10 hover:shadow-lg">
                  Discover More
                </button>
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
              <motion.div
                className="relative"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-600 rounded-lg filter blur-xl opacity-30"
                  animate={controls}
                />
                <motion.img
                  src="https://www.pngall.com/wp-content/uploads/12/Illustration-PNG-Free-Image.png?height=400&width=400"
                  alt="Premium Product"
                  className="mx-auto rounded-lg shadow-2xl relative z-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </div>

      {/* New Section with Space Background */}
      <div className="relative min-h-screen bg-black bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2014/12/27/15/40/milky-way-581354_960_720.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-0.5 w-0.5 bg-white rounded-full"
              animate={{
                x: [0, mousePosition.x / 20, 0],
                y: [0, mousePosition.y / 20, 0],
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
          <h2 className="text-4xl text-white font-bold mb-6">Explore the Infinite Possibilities</h2>
          <p className="text-lg text-gray-300 mb-8">
            Journey through the cosmos and unlock the secrets of the universe with our platform. Every feature is designed to take you on an unforgettable adventure.
          </p>
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <button className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
              Start Your Journey
            </button>
            <SubscribeForm/>
          </motion.div>
        </div>
      </div>
    </>
  );
}
