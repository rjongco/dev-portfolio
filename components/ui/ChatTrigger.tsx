'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils/helper';
import { useTheme } from '@/lib/hooks/use-theme';

interface ChatTriggerProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

const ChatTrigger = React.forwardRef<HTMLButtonElement, ChatTriggerProps>(
  ({ isOpen, onClick, className }, ref) => {
    const { isDarkMode } = useTheme();

    return (
      <motion.button
        ref={ref}
        onClick={onClick}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className={cn(
          'fixed bottom-6 right-6 z-40',
          'w-14 h-14 rounded-full',
          'flex items-center justify-center',
          'bg-accent hover:opacity-90',
          'shadow-lg hover:shadow-xl',
          'transition-shadow duration-200',
          'relative overflow-hidden',
          className
        )}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Ping effect background */}
        {!isOpen && (
          <motion.div
            className={cn(
              'absolute inset-0 rounded-full',
              isDarkMode ? 'bg-accent/20' : 'bg-accent/10'
            )}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        )}

        {/* Icon */}
        <motion.div
          id={'the-dragon'}
          animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 flex items-center justify-center"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        </motion.div>

        {/* Float animation on idle */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0"
            animate={{ y: [0, -2, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ pointerEvents: 'none' }}
          />
        )}
      </motion.button>
    );
  }
);

export default ChatTrigger;
