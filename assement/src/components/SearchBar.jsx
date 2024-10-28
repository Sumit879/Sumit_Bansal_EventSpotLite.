import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';

function SearchBar({ searchTerm, onSearchChange, isDark }) {
  return (
    <motion.div 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="relative max-w-md w-full mx-auto mb-8"
    >
      <div className="relative">
        <FaSearch className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
          isDark ? 'text-gray-400' : 'text-gray-500'
        }`} />
        <input
          type="text"
          placeholder="Search events by name or location..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
            isDark 
              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
          } focus:outline-none focus:border-blue-500 transition-colors`}
        />
      </div>
    </motion.div>
  );
}

export default SearchBar;