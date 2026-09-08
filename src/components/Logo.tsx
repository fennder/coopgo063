import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 font-bold ${className}`}>
      <div className="relative flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-sm border-2 border-brand-green">
        <MapPin className="text-brand-navy w-5 h-5 absolute top-2" />
        <Navigation className="text-brand-green w-4 h-4 absolute bottom-2 right-2 rotate-45" />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-brand-green text-xl tracking-wider uppercase">Coop/span>
        <span className="text-brand-navy text-lg tracking-widest uppercase font-black"><span className="text-gray-500">63</span></span>
      </div>
    </div>
  );
}
