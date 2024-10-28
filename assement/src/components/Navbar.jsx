import { motion } from 'framer-motion';
import { FaMoon, FaSun, FaRandom } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import ConfettiButton from './ConfettiButton';

function Navbar({ isDark, toggleTheme }) {
  return (
    <nav className={`${isDark ? 'bg-gray-800' : 'bg-white'} shadow-md transition-colors duration-200`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`text-3xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}
          >
            EventSpot Lite
          </motion.h1>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            <ConfettiButton />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;