// About.jsx
import React from "react";

import { Link } from 'react-router-dom';
import heroImg from "../assets/images/img6.jpg"; // Replace with your hero image
import aboutImg from "../assets/images/about.jpg"; // Replace with your image path
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F5DC] via-[#FFF8E7] to-[#FFEFD5]">

      {/* Hero Section */}
      <motion.div 
        className="relative flex flex-col md:flex-row items-center justify-between bg-[#A0522D] text-white py-28 px-6 overflow-hidden rounded-b-3xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Text */}
        <div className="md:w-1/2 z-10 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-wide animate-pulse">
            Mandala Muse
          </h1>
          <p className="text-lg sm:text-xl max-w-md mx-auto md:mx-0">
            Discover the beauty of mandalas and inspired art that sparks creativity and mindfulness.
          </p>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 relative">
          <motion.img 
            src={heroImg} 
            alt="Mandala Hero" 
            className="w-full h-72 md:h-96 object-cover rounded-3xl shadow-xl border border-[#D2B48C] opacity-90"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
          />
        </div>

        {/* Decorative Circles (Optional subtle animation) */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#D2B48C] rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#FFF8E7] rounded-full opacity-30 animate-pulse"></div>
      </motion.div>

      {/* About Content */}
      <motion.section
        className="max-w-6xl mx-auto px-6 sm:px-12 py-20 flex flex-col md:flex-row items-center gap-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Image */}
        <div className="md:w-1/2 overflow-hidden rounded-3xl shadow-xl border border-[#D2B48C]">
          <motion.img 
            src={aboutImg} 
            alt="Mandala Art" 
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#5C4033]">
            Our Story
          </h2>
          <p className="text-[#5C4033] mb-6 text-lg leading-relaxed">
            Mandala Muse was founded to bring mindfulness, creativity, and joy to everyone through the art of mandalas. Each piece is designed to inspire inner peace and artistic expression.
          </p>

          <h3 className="text-2xl font-semibold mb-2 text-[#5C4033]">Our Mission</h3>
          <p className="text-[#5C4033] mb-4 text-lg leading-relaxed">
            We aim to create a community where art meets meditation. Our curated collections and prints are designed for everyone—from beginners exploring mandalas to seasoned art enthusiasts.
          </p>
           <Link to= "/collection/all">
          <motion.button 
            className="bg-[#D2B48C] text-[#5C4033] px-6 py-3 rounded-lg font-semibold hover:bg-[#C19A6B] shadow-lg transition transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
          >
            Explore Our Collections
          </motion.button>
          </Link>
        </div>
      </motion.section>

      {/* Highlights / Features */}
      <motion.section 
        className="bg-[#FFF8E7] py-20 px-6 sm:px-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#5C4033]">Why Choose Mandala Muse?</h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-[#F5F5DC] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center border border-[#D2B48C]">
            <h3 className="text-xl font-semibold mb-2 text-[#5C4033]">Mindfulness</h3>
            <p className="text-[#5C4033]">Our designs promote meditation and inner peace through art.</p>
          </div>
          <div className="bg-[#F5F5DC] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center border border-[#D2B48C]">
            <h3 className="text-xl font-semibold mb-2 text-[#5C4033]">Unique Designs</h3>
            <p className="text-[#5C4033]">Each mandala is handcrafted and curated for a unique experience.</p>
          </div>
          <div className="bg-[#F5F5DC] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center border border-[#D2B48C]">
            <h3 className="text-xl font-semibold mb-2 text-[#5C4033]">Quality Prints</h3>
            <p className="text-[#5C4033]">We ensure high-quality prints for your home or personal use.</p>
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default About;



