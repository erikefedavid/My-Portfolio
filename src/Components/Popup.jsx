import { motion, AnimatePresence } from "framer-motion";

const Popup = ({ show, message, type, onClose }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-6 left-1/2 transform -translate-x-1/2 
            px-6 py-3 rounded-lg shadow-xl text-white font-medium
            ${type === "success" ? "bg-green-500" : "bg-red-500"}
          `}
        >
          {message}
          <button className="ml-4 text-sm underline" onClick={onClose}>
            Close
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
