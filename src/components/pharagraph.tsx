import { motion } from "framer-motion";

export default function Pharagraph() {
    return (
        <>
            <motion.h1
                className="text-2xl sm:text-3xl md:text-6xl font-bold mb-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                We are coming soon
            </motion.h1>
            <p className="mb-16 text-md md:text-lg opacity-80">Something amazing is coming! Stay tuned for an exciting experience!</p>
        </>
    );
}