import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';

function ThemeToggle({ isDark, toggleTheme }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className={`p-2 rounded-full ${
        isDark ? 'bg-gray-700 text-yellow-300' : 'bg-gray-100 text-gray-600'
      }`}
      aria-label="Toggle theme"
    >
      {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
    </motion.button>
  );
}

export default ThemeToggle;