import React from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  once?: boolean;
}

export function Reveal({
  children,
  width = 'fit-content',
  className = '',
}: RevealProps) {
  return (
    <div className={className} style={{ width, position: 'relative' }}>
      {children}
    </div>
  );
}
