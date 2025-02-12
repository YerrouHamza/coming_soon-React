import { Fragment, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountDownProps {
  targetDate: string; // Accepts a date string like "2025-12-31T23:59:59"
}

export default function CountDown({ targetDate }: CountDownProps) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {      
    timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex space-x-2 sm:space-x-5 md:space-x-10 text-xl md:text-3xl font-semibold">
      {Object.entries(timeLeft).map(([unit, value], index, array) => (
        <Fragment key={unit}>
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-2xl sm:text-3xl md:text-7xl font-bold">{value}</span>
            <span className="uppercase text-xs sm:text-sm">{unit}</span>
          </motion.div>
          {index < array.length - 1 && <span className="text-xl sm:text-3xl md:text-5xl font-bold mt-1 md:mt-3">:</span>}
        </Fragment>
      ))}
    </div>
  );
}