'use client';
import React, { useState } from 'react';
import ChatTrigger from './ChatTrigger';
import ChatWindow from './ChatWindow';

interface ChatbotProps {
  className?: string;
}

const Chatbot = React.forwardRef<HTMLDivElement, ChatbotProps>(
  ({ className }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
      setIsOpen((prev) => !prev);
    };

    const handleClose = () => {
      setIsOpen(false);
    };

    return (
      <div ref={ref} className={className}>
        <span>RURIIIIIII</span>
        <ChatTrigger isOpen={isOpen} onClick={toggleChat} />
        <ChatWindow isOpen={isOpen} onClose={handleClose} />
      </div>
    );
  }
);

export default Chatbot;
