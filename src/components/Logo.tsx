import React from 'react';

interface LogoProps {
  className?: string;
  imgClassName?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'header' | 'full';
  showText?: boolean;
  inverted?: boolean;
  variant?: 'official' | 'dark' | 'light' | 'square';
}

export function Logo({
  className = '',
  imgClassName = '',
  size = 'md',
  inverted = false,
  variant = 'official',
}: LogoProps) {
  const sizeMap = {
    sm: 'h-7 w-auto max-w-[130px]',
    md: 'h-9 md:h-10 w-auto max-w-[170px]',
    lg: 'h-11 md:h-12 w-auto max-w-[210px]',
    xl: 'h-14 md:h-16 w-auto max-w-[270px]',
    header: 'h-9 sm:h-10 lg:h-11 w-auto max-w-[170px] sm:max-w-[200px] lg:max-w-[230px]',
    full: 'h-full w-auto max-h-full',
  };

  // Choose the appropriate asset
  let logoSrc = '/logo-official.svg';
  if (variant === 'square') {
    logoSrc = '/logo-square.png';
  } else if (variant === 'light') {
    logoSrc = '/logo-light.svg';
  } else if (inverted || variant === 'dark') {
    logoSrc = '/logo-dark.svg';
  } else {
    logoSrc = '/logo-official.svg';
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="Coop63 Logo"
        className={`${sizeMap[size] || 'h-10 w-auto'} ${imgClassName} object-contain transition-transform duration-300 hover:scale-[1.02] rounded-xl`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
