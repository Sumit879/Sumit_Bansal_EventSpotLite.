import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { format } from 'date-fns';
import { FaMapMarkerAlt, FaCalendarAlt, FaTimes } from 'react-icons/fa';

function EventModal({ isOpen, onClose, event, isDark }) {
  if (!event) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className={`w-full max-w-md transform overflow-hidden rounded-2xl ${
                isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
              } p-6 text-left align-middle shadow-xl transition-all`}>
                <div className="absolute right-4 top-4">
                  <button
                    onClick={onClose}
                    className={`${isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`}
                  >
                    <FaTimes size={24} />
                  </button>
                </div>

                <div className="relative h-56 -mx-6 -mt-6 mb-4">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <Dialog.Title
                  as="h3"
                  className="text-2xl font-semibold leading-6 mb-4"
                >
                  {event.title}
                </Dialog.Title>

                <div className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-2`}>
                  <FaCalendarAlt className="mr-2" />
                  {format(new Date(event.date), 'MMMM dd, yyyy')}
                </div>

                <div className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                  <FaMapMarkerAlt className="mr-2" />
                  {event.location}
                </div>

                <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>{event.description}</p>

                <div className="mt-6">
                  <button
                    type="button"
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default EventModal;