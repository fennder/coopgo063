import React from 'react';

interface LogoProps {
  className?: string;
  imgClassName?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'header' | 'full';
  showText?: boolean;
  inverted?: boolean;
}

export function Logo({
  className = '',
  imgClassName = '',
  size = 'md',
  showText = false,
  inverted = false,
}: LogoProps) {
  const sizeMap = {
    sm: 'w-9 h-9',
    md: 'w-[58px] h-[58px]',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
    header: 'h-[56px] lg:h-[72px] w-[56px] lg:w-[72px]',
    full: 'h-full w-auto aspect-square max-h-full',
  };

  return (
    <div className={`flex items-center gap-3 font-bold select-none ${className}`}>
      <div className="relative shrink-0 flex items-center h-full">
        <img
          src="/logo.png"
          alt="Coop63 Logo"
          className={`${sizeMap[size] || ''} ${imgClassName} object-contain drop-shadow-md rounded-full transition-transform hover:scale-105`}
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
