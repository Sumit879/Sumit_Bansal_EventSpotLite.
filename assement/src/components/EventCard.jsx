import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

function EventCard({ event, onClick, isDark }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${
        isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      } rounded-lg shadow-lg overflow-hidden cursor-pointer transition-colors duration-200`}
      onClick={() => onClick(event)}
    >
      <div className="relative h-48">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
            {event.category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
        <div className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-2`}>
          <FaCalendarAlt className="mr-2" />
          {format(new Date(event.date), 'MMM dd, yyyy')}
        </div>
        <div className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          <FaMapMarkerAlt className="mr-2" />
          {event.location}
        </div>
      </div>
    </motion.div>
  );
}

export default EventCard;