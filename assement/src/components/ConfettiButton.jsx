import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRandom } from 'react-icons/fa';
import Confetti from 'react-confetti';

function ConfettiButton() {
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  const triggerConfetti = () => {
    setIsConfettiActive(true);
    setTimeout(() => setIsConfettiActive(false), 3000);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={triggerConfetti}
        className="p-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200"
        aria-label="Trigger confetti"
      >
        <FaRandom size={20} />
      </motion.button>
      {isConfettiActive && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
        />
      )}
    </>
  );
}

export default ConfettiButton;