import React, { useState, useEffect, useRef } from 'react';
import { RotateCcw, Star, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

export function BannerCarAnimation() {
  // Animation states: 'driving_in' -> 'stopped' -> 'passenger_drop' -> 'driving_out' -> 'finished'
  const [stage, setStage] = useState<'driving_in' | 'stopped' | 'passenger_drop' | 'driving_out' | 'finished'>('driving_in');
  const [runCount, setRunCount] = useState(0);
  const timerRef = useRef<NodeJS.Timeout[]>([]);

  const clearAllTimers = () => {
    timerRef.current.forEach(t => clearTimeout(t));
    timerRef.current = [];
  };

  const startAnimation = () => {
    clearAllTimers();
    setStage('driving_in');

    // 1. White car travels across the banner and stops in the drop-off zone (3.8s)
    const t1 = setTimeout(() => {
      setStage('stopped');
    }, 3800);

    // 2. Passenger steps out, gives 5 stars and thanks driver (after 1.2s stopped)
    const t2 = setTimeout(() => {
      setStage('passenger_drop');
    }, 5000);

    // 3. Passenger finishes, car accelerates and traverses the rest of the banner (after 4.5s)
    const t3 = setTimeout(() => {
      setStage('driving_out');
    }, 9500);

    // 4. Car exits the entire banner to the right (after 4s of driving out)
    const t4 = setTimeout(() => {
      setStage('finished');
      // Loop again after 6 seconds so the banner stays lively
      const tLoop = setTimeout(() => {
        setRunCount(prev => prev + 1);
      }, 6000);
      timerRef.current.push(tLoop);
    }, 13500);

    timerRef.current = [t1, t2, t3, t4];
  };

  useEffect(() => {
    startAnimation();
    return () => clearAllTimers();
  }, [runCount]);

  return (
    <div className="absolute inset-x-0 bottom-2 md:bottom-6 lg:bottom-10 z-25 pointer-events-none select-none overflow-hidden h-36 md:h-44">
      
      {/* Subtle Illuminated Mobility Track across the Banner */}
      <div className="absolute bottom-2 inset-x-0 h-1 bg-gradient-to-r from-transparent via-brand-green/30 to-transparent" />
      <div className="absolute bottom-1 inset-x-0 flex justify-between gap-12 px-4 opacity-25">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="w-8 h-0.5 bg-brand-green rounded-full shrink-0" />
        ))}
      </div>

      {/* DROP-OFF ZONE PIN (Located in the banner) */}
      <div 
        className={`absolute bottom-12 md:bottom-16 left-[45%] -translate-x-1/2 flex flex-col items-center z-10 transition-all duration-700 ${
          stage === 'stopped' || stage === 'passenger_drop' ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      >
        <div className="flex items-center gap-1.5 px-3 py-1 bg-brand-navy/95 border border-brand-green text-brand-green rounded-full text-[11px] font-black shadow-xl backdrop-blur-md animate-bounce">
          <MapPin className="w-3 h-3 text-brand-green" />
          <span>Ponto de Desembarque Coop63</span>
        </div>
        <div className="w-0.5 h-3 bg-brand-green" />
        <div className="w-8 h-1 bg-brand-green/60 rounded-full blur-[2px]" />
      </div>

      {/* PASSENGER STEPPING OUT OF THE WHITE CAR */}
      {(stage === 'passenger_drop' || stage === 'driving_out' || stage === 'finished') && (
        <div 
          className={`absolute bottom-4 left-[46%] z-20 transition-all duration-1000 ${
            stage === 'driving_out' || stage === 'finished' ? 'translate-x-20 opacity-90' : 'translate-x-0 opacity-100'
          }`}
        >
          {/* Passenger Speech Bubble with 5-star Rating */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 bg-white/95 text-brand-navy px-3 py-1.5 rounded-2xl shadow-2xl border-2 border-brand-green flex flex-col items-center gap-0.5 min-w-[170px] backdrop-blur-sm animate-in fade-in zoom-in duration-300">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-3 h-3 fill-yellow-400 text-yellow-400 animate-pulse" />
              ))}
              <span className="text-[10px] font-black text-brand-navy ml-1">5.0</span>
            </div>
            <div className="text-[10px] font-extrabold text-center leading-tight">
              "Viagem excelente! <span className="text-brand-green font-black">Coop63</span> nota 10!"
            </div>
            {/* Bubble Tip */}
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-brand-green" />
          </div>

          {/* Passenger SVG Character */}
          <svg width="45" height="70" viewBox="0 0 60 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xl">
            {/* Shadow */}
            <ellipse cx="30" cy="85" rx="16" ry="3" fill="#000" fillOpacity="0.5" />
            {/* Legs */}
            <rect x="22" y="55" width="6" height="28" rx="3" fill="#1E293B" />
            <rect x="32" y="55" width="6" height="28" rx="3" fill="#0F172A" />
            {/* Torso */}
            <rect x="18" y="28" width="24" height="30" rx="6" fill="#0284C7" />
            <rect x="12" y="32" width="7" height="18" rx="3" fill="#334155" />
            {/* Arm with phone */}
            <g className="animate-bounce origin-top">
              <path d="M40 32L50 20L53 23" stroke="#0284C7" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="49" y="14" width="7" height="11" rx="2" fill="#0A0D14" stroke="#6EF000" strokeWidth="1" />
            </g>
            {/* Head */}
            <circle cx="30" cy="18" r="10" fill="#F8D7BB" />
            <path d="M20 16C20 11 24 8 30 8C36 8 40 11 40 16C37 14 33 13 30 13C26 13 22 14 20 16Z" fill="#3E2723" />
            <circle cx="28" cy="17" r="1.5" fill="#0A0D14" />
            <circle cx="34" cy="17" r="1.5" fill="#0A0D14" />
            <path d="M28 22C30 24 33 24 35 22" stroke="#0A0D14" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      )}

      {/* THE WHITE PLOTTED COOP63 CAR (Carro Branco com Plotagem Oficial) */}
      <div 
        className="absolute bottom-2 z-30 transition-all ease-in-out"
        style={{
          transitionDuration: stage === 'driving_in' ? '3.8s' : stage === 'driving_out' ? '4.0s' : '0.5s',
          transform: 
            stage === 'driving_in' || stage === 'stopped' || stage === 'passenger_drop'
              ? 'translateX(calc(45vw - 150px))' 
              : stage === 'driving_out' || stage === 'finished'
                ? 'translateX(calc(100vw + 120px))'
                : 'translateX(-360px)',
        }}
      >
        {/* Front Headlight Beam across the Banner */}
        <div className="absolute right-[-160px] top-4 w-52 h-16 bg-gradient-to-r from-yellow-100/50 via-yellow-100/20 to-transparent rounded-full blur-md -rotate-6 pointer-events-none" />

        {/* Dynamic Neon Green Speed Trail when driving */}
        {(stage === 'driving_in' || stage === 'driving_out') && (
          <div className="absolute left-[-90px] top-8 w-32 h-6 bg-gradient-to-l from-brand-green/70 via-brand-green/25 to-transparent blur-sm rounded-full pointer-events-none" />
        )}

        {/* WHITE CAR SVG GRAPHIC */}
        <svg width="300" height="96" viewBox="0 0 340 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl">
          <defs>
            {/* White Body Metallic Gradient */}
            <linearGradient id="whiteCarBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#F8FAFC" />
              <stop offset="85%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#CBD5E1" />
            </linearGradient>

            {/* Coop63 Official Neon Green Gradient */}
            <linearGradient id="whiteCarLiveryGreen" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6EF000" />
              <stop offset="100%" stopColor="#5ECC00" />
            </linearGradient>

            {/* Deep Navy Livery Accent */}
            <linearGradient id="whiteCarLiveryNavy" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0A0D14" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>

            {/* Premium Tinted Glass */}
            <linearGradient id="whiteCarGlass" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#0A0D14" stopOpacity="0.92" />
            </linearGradient>

            {/* Sport Wheel Rim */}
            <radialGradient id="whiteCarRim" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#6EF000" />
              <stop offset="45%" stopColor="#475569" />
              <stop offset="100%" stopColor="#0F172A" />
            </radialGradient>
          </defs>

          {/* Under-car Shadow */}
          <ellipse cx="170" cy="98" rx="142" ry="7" fill="#000000" fillOpacity="0.55" />

          {/* ROOF POD / COOP63 ILLUMINATED SIGN */}
          <g transform="translate(135, 12)">
            <rect x="0" y="0" width="65" height="14" rx="4" fill="#0A0D14" stroke="#6EF000" strokeWidth="1.5" />
            <rect x="2.5" y="2.5" width="60" height="9" rx="2" fill="#6EF000" />
            <text x="32" y="9" fill="#0A0D14" fontSize="7" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">
              COOP63
            </text>
          </g>

          {/* MAIN CHASSIS: PRISTINE WHITE CAR BODY */}
          <path 
            d="M18 78 C25 60 45 52 80 50 L120 30 C150 20 220 20 245 32 L290 54 C315 57 335 65 330 82 C325 90 310 90 295 90 L260 90 C255 76 235 76 230 90 L120 90 C115 76 95 76 90 90 L35 90 C22 90 14 85 18 78 Z" 
            fill="url(#whiteCarBodyGrad)" 
            stroke="#94A3B8" 
            strokeWidth="1.5"
          />

          {/* PLOTTED GREEN & NAVY STRIPES ACROSS THE WHITE BODY */}
          {/* Main Neon Green Dynamic Livery */}
          <path 
            d="M20 74 C50 71 100 67 160 67 C220 67 280 65 325 76 L324 82 C280 72 220 73 160 73 C100 73 50 77 20 80 Z" 
            fill="url(#whiteCarLiveryGreen)" 
          />
          {/* Upper Navy Accent Livery */}
          <path 
            d="M26 73 C60 69 110 65 160 65 C210 65 260 64 300 71 L301 73 C260 66 210 67 160 67 C110 67 60 71 26 75 Z" 
            fill="url(#whiteCarLiveryNavy)" 
          />
          {/* Aerodynamic Roof & Hood Accent */}
          <path 
            d="M75 53 L125 33 C145 27 215 27 240 35 L280 55 L265 57 L235 38 C215 32 150 32 130 38 L85 55 Z" 
            fill="url(#whiteCarLiveryGreen)" 
            opacity="0.9"
          />

          {/* TINTED WINDOWS & CABIN */}
          <path d="M125 35 L90 52 L145 52 L145 35 Z" fill="url(#whiteCarGlass)" stroke="#64748B" strokeWidth="1" />
          <path d="M149 35 L149 52 L195 52 L195 35 Z" fill="url(#whiteCarGlass)" stroke="#64748B" strokeWidth="1" />
          <path d="M199 35 L199 52 L245 52 L235 35 Z" fill="url(#whiteCarGlass)" stroke="#64748B" strokeWidth="1" />
          <path d="M237 35 L247 52 L280 52 Z" fill="url(#whiteCarGlass)" stroke="#64748B" strokeWidth="1" />

          {/* DRIVER SILHOUETTE BEHIND TINTED WINDSHIELD */}
          <circle cx="218" cy="43" r="5" fill="#E2E8F0" />
          <path d="M213 41 C213 38 216 37 220 37 C224 37 226 39 226 41 Z" fill="#6EF000" />
          <path d="M232 45 L227 49" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />

          {/* OFFICIAL PLOTTED DOOR BADGE: coop63.coop.br */}
          <g transform="translate(130, 58)">
            {/* Contrast Livery Plate on the White Door */}
            <rect x="0" y="0" width="105" height="25" rx="6" fill="#0A0D14" stroke="#6EF000" strokeWidth="1.2" />
            
            {/* Speed dots logo mark */}
            <circle cx="10" cy="12.5" r="4" fill="#6EF000" />
            <rect x="17" y="10.5" width="10" height="4" rx="2" fill="#6EF000" />

            {/* Official Domain & Brand */}
            <text x="32" y="14" fill="#FFFFFF" fontSize="9" fontWeight="900" fontFamily="sans-serif">
              coop<tspan fill="#6EF000">63</tspan><tspan fill="#6EF000" fontSize="7">.coop.br</tspan>
            </text>
            <text x="32" y="21" fill="#94A3B8" fontSize="5" fontWeight="bold" letterSpacing="0.8">
              TRANSPORTE COOPERATIVO
            </text>
          </g>

          {/* LIGHTS & HARDWARE */}
          {/* Front Modern LED Headlight */}
          <path d="M305 60 C320 62 328 66 328 72 L310 72 Z" fill="#FEF08A" filter="drop-shadow(0 0 6px #FEF08A)" />
          {/* Rear Taillight */}
          <path 
            d="M18 66 C24 66 28 68 28 74 L18 74 Z" 
            fill={stage === 'stopped' || stage === 'passenger_drop' ? '#EF4444' : '#DC2626'} 
            filter={stage === 'stopped' || stage === 'passenger_drop' ? 'drop-shadow(0 0 8px #EF4444)' : 'none'} 
          />
          {/* Hazard Blinking */}
          {(stage === 'stopped' || stage === 'passenger_drop') && (
            <circle cx="325" cy="74" r="3" fill="#F59E0B" className="animate-ping" />
          )}

          {/* Door Handles on White Body */}
          <line x1="147" y1="52" x2="147" y2="85" stroke="#94A3B8" strokeWidth="1.2" />
          <line x1="197" y1="52" x2="197" y2="85" stroke="#94A3B8" strokeWidth="1.2" />
          <rect x="153" y="55" width="10" height="2" rx="1" fill="#0A0D14" />
          <rect x="203" y="55" width="10" height="2" rx="1" fill="#0A0D14" />

          {/* WHEELS (Rear at x=105, Front at x=245) */}
          {/* Rear Wheel */}
          <g transform="translate(105, 90)">
            <circle cx="0" cy="0" r="19" fill="#0A0D14" stroke="#475569" strokeWidth="2" />
            <circle cx="0" cy="0" r="12" fill="url(#whiteCarRim)" />
            <circle cx="0" cy="0" r="4" fill="#6EF000" />
            <g className={stage === 'driving_in' || stage === 'driving_out' ? 'animate-spin' : ''} style={{ animationDuration: '0.35s' }}>
              <line x1="-12" y1="0" x2="12" y2="0" stroke="#FFFFFF" strokeWidth="1.5" />
              <line x1="0" y1="-12" x2="0" y2="12" stroke="#FFFFFF" strokeWidth="1.5" />
              <line x1="-8" y1="-8" x2="8" y2="8" stroke="#6EF000" strokeWidth="1.5" />
              <line x1="-8" y1="8" x2="8" y2="-8" stroke="#6EF000" strokeWidth="1.5" />
            </g>
          </g>

          {/* Front Wheel */}
          <g transform="translate(245, 90)">
            <circle cx="0" cy="0" r="19" fill="#0A0D14" stroke="#475569" strokeWidth="2" />
            <circle cx="0" cy="0" r="12" fill="url(#whiteCarRim)" />
            <circle cx="0" cy="0" r="4" fill="#6EF000" />
            <g className={stage === 'driving_in' || stage === 'driving_out' ? 'animate-spin' : ''} style={{ animationDuration: '0.35s' }}>
              <line x1="-12" y1="0" x2="12" y2="0" stroke="#FFFFFF" strokeWidth="1.5" />
              <line x1="0" y1="-12" x2="0" y2="12" stroke="#FFFFFF" strokeWidth="1.5" />
              <line x1="-8" y1="-8" x2="8" y2="8" stroke="#6EF000" strokeWidth="1.5" />
              <line x1="-8" y1="8" x2="8" y2="-8" stroke="#6EF000" strokeWidth="1.5" />
            </g>
          </g>
        </svg>
      </div>

      {/* COMPACT REPLAY TRIGGER ON THE BANNER (Discreto e Interativo) */}
      <div className="absolute right-4 bottom-3 z-30 pointer-events-auto">
        <button
          onClick={startAnimation}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-navy/80 hover:bg-brand-navy border border-brand-green/40 hover:border-brand-green text-gray-200 hover:text-white text-xs font-bold transition-all shadow-lg backdrop-blur-md active:scale-95"
          title="Rever animação do carro branco Coop63"
        >
          <RotateCcw className="w-3.5 h-3.5 text-brand-green" />
          <span className="hidden sm:inline">Rever Animação</span>
        </button>
      </div>

    </div>
  );
}
