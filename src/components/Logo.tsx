import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  inverted?: boolean;
}

export function Logo({
  className = '',
  size = 'md',
  showText = true,
  inverted = false,
}: LogoProps) {
  const sizeMap = {
    sm: 'w-9 h-9',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  return (
    <div className={`flex items-center gap-3 font-bold select-none ${className}`}>
      <div className="relative shrink-0">
        <img
          src="/logo.png"
          alt="Coop63 Logo"
          className={`${sizeMap[size]} object-contain drop-shadow-md rounded-full transition-transform hover:scale-105`}
          referrerPolicy="no-referrer"
        />
      </div>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="text-brand-green text-xl md:text-2xl tracking-wider uppercase font-black">
            Coop
          </span>
          <span
            className={`text-lg md:text-xl tracking-widest uppercase font-black ${
              inverted ? 'text-white' : 'text-brand-navy'
            }`}
          >
            63
          </span>
        </div>
      )}
    </div>
  );
}
