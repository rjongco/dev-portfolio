'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils/helper';
import { useTheme } from '@/lib/hooks/use-theme';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

const ChatWindow = React.forwardRef<HTMLDivElement, ChatWindowProps>(
  ({ isOpen, onClose, className }, ref) => {
    const { isDarkMode } = useTheme();
    const [messages, setMessages] = useState<Message[]>([
      {
        id: '1',
        text: 'Hello! How can I help you today?',
        sender: 'bot',
        timestamp: new Date(),
      },
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
      scrollToBottom();
    }, [messages]);

    const handleSendMessage = (e: React.FormEvent) => {
      e.preventDefault();
      if (!input.trim()) return;

      // Add user message
      const userMessage: Message = {
        id: Date.now().toString(),
        text: input,
        sender: 'user',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setInput('');

      // Simulate bot response
      setIsLoading(true);
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: 'Thanks for your message! I\'m a demo chatbot. Feel free to ask me anything about Rafael\'s portfolio or services.',
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
        setIsLoading(false);
      }, 1000);
    };

    return (
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={onClose}
              className="fixed inset-0 z-30 md:hidden"
              style={{
                background: 'rgba(0, 0, 0, 0.5)',
              }}
            />

            {/* Chat Window */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className={cn(
                'fixed bottom-24 right-6 z-40',
                'w-full max-w-sm md:max-w-md',
                'h-96 md:h-[500px]',
                'rounded-2xl',
                'shadow-2xl',
                'flex flex-col',
                'overflow-hidden',
                isDarkMode
                  ? 'bg-dark-1 border border-dark-2'
                  : 'bg-bg border border-bg-secondary',
                className
              )}
            >
              {/* Header */}
              <div
                className={cn(
                  'px-6 py-4 border-b',
                  isDarkMode ? 'border-dark-3' : 'border-bg-secondary'
                )}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg text-dark-2">Chat</h3>
                    <p
                      className={cn(
                        'text-sm',
                        isDarkMode ? 'text-dark-3' : 'text-light-1'
                      )}
                    >
                      Always here to help
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className={cn(
                      'p-2 rounded-lg transition-colors',
                      isDarkMode
                        ? 'hover:bg-dark-3/10 text-dark-2'
                        : 'hover:bg-accent/5 text-dark-2'
                    )}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Messages Container */}
              <div
                className={cn(
                  'flex-1 overflow-y-auto px-6 py-4 space-y-4',
                  isDarkMode ? 'bg-dark-1' : 'bg-bg'
                )}
              >
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={cn('flex', {
                      'justify-end': message.sender === 'user',
                      'justify-start': message.sender === 'bot',
                    })}
                  >
                    <div
                      className={cn(
                        'max-w-xs px-4 py-2 rounded-lg',
                        message.sender === 'user'
                          ? 'bg-accent text-white rounded-br-none'
                          : isDarkMode
                            ? 'bg-dark-2 text-dark-1 rounded-bl-none'
                            : 'bg-bg-secondary text-dark-2 rounded-bl-none'
                      )}
                    >
                      <p className="text-sm break-words">{message.text}</p>
                      <p
                        className={cn(
                          'text-xs mt-1 opacity-70',
                          message.sender === 'user'
                            ? 'text-white'
                            : isDarkMode
                              ? 'text-dark-3'
                              : 'text-light-1'
                        )}
                      >
                        {message.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {/* Loading indicator */}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-2 pt-2"
                  >
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -4, 0] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                        className={cn(
                          'w-2 h-2 rounded-full',
                          isDarkMode ? 'bg-dark-3' : 'bg-light-1'
                        )}
                      />
                    ))}
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <form
                onSubmit={handleSendMessage}
                className={cn(
                  'border-t px-6 py-4 flex gap-2',
                  isDarkMode ? 'border-dark-3 bg-dark-1' : 'border-bg-secondary bg-bg'
                )}
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  disabled={isLoading}
                  className={cn(
                    'flex-1 rounded-lg px-4 py-2 text-sm',
                    'outline-none focus:ring-2 focus:ring-offset-0',
                    isDarkMode
                      ? 'bg-dark-2 text-dark-1 placeholder-dark-3 focus:ring-accent'
                      : 'bg-bg-secondary text-dark-2 placeholder-light-1 focus:ring-accent',
                    'transition-all duration-200'
                  )}
                />
                <motion.button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    'p-2 rounded-lg transition-all duration-200',
                    'disabled:opacity-50 disabled:cursor-not-allowed',
                    'bg-accent text-white hover:opacity-90'
                  )}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,0.9 1.77946707,1.4429026 C0.994623095,2.10604706 0.837654309,3.0486314 1.15159189,3.99701575 L3.03521743,10.4380088 C3.03521743,10.5951061 3.19218622,10.7522035 3.50612381,10.7522035 L16.6915026,11.5376905 C16.6915026,11.5376905 17.1624089,11.5376905 17.1624089,12.0089827 C17.1624089,12.4744748 17.1624089,12.4744748 16.6915026,12.4744748 Z" />
                  </svg>
                </motion.button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  }
);

export default ChatWindow;
