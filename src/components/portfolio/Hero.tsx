import { motion } from "framer-motion";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-adit-black"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <motion.h1
          className="text-6xl md:text-7xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Cinematic Stories
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-8 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Crafting compelling visual narratives that captivate and inspire
        </motion.p>

        <motion.button
          className="glassmorphism px-8 py-4 rounded-full flex items-center justify-center space-x-2 mx-auto hover:bg-white/20 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Play className="w-5 h-5" />
          <span>Watch Showreel</span>
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
