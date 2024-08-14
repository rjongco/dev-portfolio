'use client';
import { useCallback, useEffect, useState } from 'react';

type Props = {
  className?: string;
};

const Cursor = ({ className = '' }: Props) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const onMouseMove = useCallback((e: MouseEvent) => {
    // Handle mouse move event
    setPosition({ x: e.clientX, y: e.clientY });
  }, []); 

  const addEventListeners = useCallback(() => {
    document.addEventListener('mousemove', onMouseMove);
  }, [onMouseMove]);

  const removeEventListeners = useCallback(() => {
    document.removeEventListener('mousemove', onMouseMove);
  }, [onMouseMove]);
  
  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, [addEventListeners, removeEventListeners]);

  return (
    <div
      className={`fixed w-[100%] h-[140%] z-30 transition duration-300 pointer-events-none -translate-x-1/2 -translate-y-1/2 bg-torch ${className}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    ></div>
  );
};

export default Cursor;
