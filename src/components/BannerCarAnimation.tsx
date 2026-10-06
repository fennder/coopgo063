import React, { useState, useEffect, useRef } from 'react';
import { RotateCcw, Star, ShieldCheck, Check } from 'lucide-react';

export function BannerCarAnimation() {
  // Animation stages: 'driving_in' -> 'braking' -> 'stopped' -> 'door_open' -> 'passenger_out' -> 'door_close' -> 'accelerating' -> 'cruising_away' -> 'finished'
  const [stage, setStage] = useState<
    'driving_in' | 'braking' | 'stopped' | 'passenger_out' | 'door_close' | 'accelerating' | 'cruising_away' | 'finished'
  >('driving_in');
  
  const [runCount, setRunCount] = useState(0);
  const timerRef = useRef<NodeJS.Timeout[]>([]);

  const clearAllTimers = () => {
    timerRef.current.forEach(t => clearTimeout(t));
    timerRef.current = [];
  };

  const startAnimation = () => {
    clearAllTimers();
    setStage('driving_in');

    // 1. Car enters at speed (0 -> 2.6s) then begins natural braking with front suspension pitch (2.6s -> 3.8s)
    const tBrake = setTimeout(() => {
      setStage('braking');
    }, 2500);

    // 2. Car comes to a complete smooth stop with suspension rebound (3.8s)
    const tStop = setTimeout(() => {
      setStage('stopped');
    }, 3900);

    // 3. Courtesy interior light turns on, door unlocks, passenger steps out with mobile app open (4.8s)
    const tPass = setTimeout(() => {
      setStage('passenger_out');
    }, 4800);

    // 4. Passenger thanks driver, door closes, courtesy light off (8.6s)
    const tDoorClose = setTimeout(() => {
      setStage('door_close');
    }, 8600);

    // 5. Turn signal engages, driver accelerates with rear squat inertia (9.5s)
    const tAccel = setTimeout(() => {
      setStage('accelerating');
    }, 9500);

    // 6. Car shifts to cruise speed and exits the banner smoothly (10.5s -> 13.5s)
    const tCruise = setTimeout(() => {
      setStage('cruising_away');
    }, 10500);

    // 7. Complete cycle, resets after interval (14.2s)
    const tFinish = setTimeout(() => {
      setStage('finished');
      const tLoop = setTimeout(() => {
        setRunCount(prev => prev + 1);
      }, 7000);
      timerRef.current.push(tLoop);
    }, 14200);

    timerRef.current = [tBrake, tStop, tPass, tDoorClose, tAccel, tCruise, tFinish];
  };

  useEffect(() => {
    startAnimation();
    return () => clearAllTimers();
  }, [runCount]);

  // Realistic vehicle positioning and physics calculation
  const getCarTransform = () => {
    switch (stage) {
      case 'driving_in':
        return 'translateX(-340px) rotate(0deg)';
      case 'braking':
        // Decelerating sharply with slight nose-dive pitch (-1.1deg)
        return 'translateX(calc(46vw - 160px)) rotate(-1.1deg)';
      case 'stopped':
      case 'passenger_out':
      case 'door_close':
        // Settled at rest, neutral suspension
        return 'translateX(calc(46vw - 160px)) rotate(0deg)';
      case 'accelerating':
        // High torque takeoff with rear suspension squat (+1.2deg pitch)
        return 'translateX(calc(52vw - 140px)) rotate(1.2deg)';
      case 'cruising_away':
      case 'finished':
        // Cruising at high speed out of the banner
        return 'translateX(calc(102vw + 160px)) rotate(0deg)';
      default:
        return 'translateX(-340px) rotate(0deg)';
    }
  };

  const getTransitionDuration = () => {
    switch (stage) {
      case 'braking':
        return '1.4s';
      case 'stopped':
        return '0.35s';
      case 'accelerating':
        return '1.1s';
      case 'cruising_away':
        return '2.8s';
      default:
        return '0.4s';
    }
  };

  const getTransitionTiming = () => {
    switch (stage) {
      case 'braking':
        return 'cubic-bezier(0.16, 1, 0.3, 1)'; // Natural physical deceleration
      case 'accelerating':
        return 'cubic-bezier(0.4, 0, 0.2, 1)'; // Smooth vehicle torque ramp-up
      case 'cruising_away':
        return 'cubic-bezier(0.3, 0.1, 0.2, 1)';
      default:
        return 'ease-out';
    }
  };

  const isWheelsSpinning = stage === 'driving_in' || stage === 'braking' || stage === 'accelerating' || stage === 'cruising_away';
  const wheelDuration = stage === 'braking' ? '0.7s' : stage === 'cruising_away' ? '0.22s' : '0.38s';
  const isBrakingActive = stage === 'braking' || stage === 'stopped' || stage === 'passenger_out';
  const isTurnSignalActive = stage === 'stopped' || stage === 'passenger_out' || stage === 'accelerating';
  const isCourtesyLightOn = stage === 'passenger_out';

  return (
    <div className="absolute inset-x-0 bottom-2 md:bottom-6 lg:bottom-10 z-25 pointer-events-none select-none overflow-hidden h-40 md:h-48">
      
      {/* 1. REALISTIC ASPHALT TRACK & ILLUMINATED AMBIENT LANE */}
      <div className="absolute bottom-2 inset-x-0 h-4 bg-gradient-to-b from-[#111622] to-[#0A0D14] border-t border-white/10 shadow-inner">
        {/* Road Surface Texture & Street Light Reflection */}
        <div className="absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:8px_8px] opacity-40" />
        
        {/* Lane Divider Paint with Light Reflection */}
        <div className="absolute top-1/2 -translate-y-1/2 inset-x-0 flex justify-between gap-16 px-4">
          {Array.from({ length: 28 }).map((_, i) => (
            <div 
              key={i} 
              className="w-12 h-0.5 bg-yellow-400/50 rounded-full shrink-0 shadow-[0_0_6px_rgba(250,204,21,0.4)]" 
            />
          ))}
        </div>
      </div>

      {/* 2. REALISTIC DROP-OFF MARKER (Modern Holographic Waypoint) */}
      <div 
        className={`absolute bottom-14 md:bottom-16 left-[46%] -translate-x-1/2 flex flex-col items-center z-10 transition-all duration-700 pointer-events-none ${
          stage === 'stopped' || stage === 'passenger_out' ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      >
        <div className="flex items-center gap-2 px-3.5 py-1.5 bg-[#0A0D14]/90 border border-brand-green/60 text-white rounded-full text-[11px] font-bold shadow-[0_8px_20px_rgba(110,240,0,0.25)] backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
          <span className="text-brand-green font-black">Destino Coop63</span>
          <span className="text-gray-400 text-[10px] font-medium">• Chegada</span>
        </div>
        <div className="w-[1.5px] h-3.5 bg-gradient-to-b from-brand-green to-transparent" />
        <div className="w-12 h-2 bg-brand-green/30 rounded-full blur-[3px]" />
      </div>

      {/* 3. PASSENGER INTERACTION (Realistic Proportion, Phone Lighting & Modern Glass Card) */}
      {(stage === 'passenger_out' || stage === 'door_close' || stage === 'accelerating' || stage === 'cruising_away') && (
        <div 
          className={`absolute bottom-3 left-[47%] z-20 transition-all duration-1000 ${
            stage === 'accelerating' || stage === 'cruising_away' ? 'translate-x-16 opacity-85' : 'translate-x-0 opacity-100'
          }`}
        >
          {/* Modern Mobile App Ride Completion Card */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 bg-[#0A0D14]/95 text-white px-3.5 py-2 rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.7)] border border-brand-green/50 flex flex-col items-center gap-1 min-w-[210px] backdrop-blur-xl animate-in fade-in zoom-in-95 duration-300">
            <div className="flex items-center justify-between w-full border-b border-white/10 pb-1">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-brand-green">
                  Corrida Finalizada
                </span>
              </div>
              <div className="flex items-center gap-1 text-[11px] font-black text-yellow-400">
                <Star className="w-3 h-3 fill-yellow-400" />
                <span>5.0</span>
              </div>
            </div>

            <div className="text-[11px] font-semibold text-center text-gray-200 leading-tight">
              "Viagem excelente com a <strong className="text-brand-green font-extrabold">Coop63</strong>!"
            </div>

            <div className="flex items-center gap-1 text-[9px] text-gray-400 pt-0.5">
              <ShieldCheck className="w-3 h-3 text-brand-green" />
              <span>Motorista Cooperado Verificado</span>
            </div>

            {/* Pointer arrow */}
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-brand-green/60" />
          </div>

          {/* Realistic Silhouette of Passenger with App Phone Glow */}
          <svg width="48" height="78" viewBox="0 0 60 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xl">
            {/* Soft Ambient Contact Shadow */}
            <ellipse cx="30" cy="91" rx="17" ry="4" fill="#000000" fillOpacity="0.65" />
            
            {/* Trousers / Legs with walking posture */}
            <path d="M22 57 L20 88 L25 88 L28 57 Z" fill="#1E293B" />
            <path d="M31 57 L34 88 L39 88 L36 57 Z" fill="#0F172A" />
            {/* Shoes */}
            <ellipse cx="23" cy="89" rx="5" ry="2.5" fill="#FFFFFF" />
            <ellipse cx="37" cy="89" rx="5" ry="2.5" fill="#FFFFFF" />

            {/* Contemporary Jacket */}
            <rect x="17" y="29" width="26" height="30" rx="5" fill="#0284C7" stroke="#0369A1" strokeWidth="1" />
            {/* Backpack strap */}
            <path d="M19 30 L16 50" stroke="#334155" strokeWidth="3" strokeLinecap="round" />

            {/* Right Arm waving thanks */}
            <path d="M42 33 L52 22 L50 18" stroke="#0284C7" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Smartphone with glowing screen */}
            <g transform="translate(48, 11)">
              <rect x="0" y="0" width="7" height="12" rx="1.5" fill="#0A0D14" stroke="#6EF000" strokeWidth="1" />
              <rect x="1" y="1.5" width="5" height="9" rx="1" fill="#6EF000" fillOpacity="0.85" />
            </g>

            {/* Head and features */}
            <circle cx="30" cy="18" r="9.5" fill="#F8D7BB" />
            <path d="M21 16 C21 10 25 7 30 7 C35 7 39 10 39 16 C36 13 32 13 30 13 C26 13 23 14 21 16 Z" fill="#2E1B14" />
            {/* Sunglasses / Eyes */}
            <rect x="26" y="15" width="9" height="3" rx="1.5" fill="#0A0D14" />
            {/* Warm smile */}
            <path d="M28 22 C30 24 32 24 34 22" stroke="#0A0D14" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
      )}

      {/* 4. REALISTIC WHITE COOP63 VEHICLE (Physics-Driven Motion, Specular Lighting, Suspension Pitch) */}
      <div 
        className="absolute bottom-2 z-30 will-change-transform"
        style={{
          transform: getCarTransform(),
          transitionProperty: 'transform',
          transitionDuration: getTransitionDuration(),
          transitionTimingFunction: getTransitionTiming(),
        }}
      >
        {/* Dynamic Headlight Photometric Cone Projection on the Ground */}
        <div className="absolute right-[-240px] top-6 w-72 h-20 bg-gradient-to-r from-yellow-100/50 via-yellow-100/15 to-transparent rounded-full blur-[10px] -rotate-6 pointer-events-none" />
        <div className="absolute right-[-150px] top-9 w-44 h-8 bg-gradient-to-r from-white/70 via-yellow-200/20 to-transparent rounded-full blur-[4px] -rotate-3 pointer-events-none" />

        {/* Dynamic Electric Green Speed Trail during acceleration */}
        {(stage === 'accelerating' || stage === 'cruising_away') && (
          <div className="absolute left-[-110px] top-10 w-36 h-5 bg-gradient-to-l from-brand-green/80 via-brand-green/20 to-transparent blur-[3px] rounded-full pointer-events-none" />
        )}

        {/* HIGH-PRECISION VECTOR AUTOMOTIVE MODEL (Modern White Aerodynamic Sedan) */}
        <svg 
          width="320" 
          height="102" 
          viewBox="0 0 360 115" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="drop-shadow-2xl overflow-visible"
        >
          <defs>
            {/* Pearl White Paint Gradient with Specular Horizon Highlight */}
            <linearGradient id="realWhiteBody" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="25%" stopColor="#F8FAFC" />
              <stop offset="55%" stopColor="#E2E8F0" />
              <stop offset="85%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>

            {/* Specular Roof Reflection Line */}
            <linearGradient id="roofReflection" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#CBD5E1" stopOpacity="0.2" />
              <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#E2E8F0" stopOpacity="0.3" />
            </linearGradient>

            {/* Tinted Automotive Glass with Sky Reflection */}
            <linearGradient id="automotiveGlass" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.35" />
              <stop offset="40%" stopColor="#1E293B" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#0A0D14" stopOpacity="0.95" />
            </linearGradient>

            {/* Official Coop63 Automotive Vinyl Wrap Livery (Neon Lime) */}
            <linearGradient id="coopLiveryNeon" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6EF000" />
              <stop offset="60%" stopColor="#5ECC00" />
              <stop offset="100%" stopColor="#4BB300" />
            </linearGradient>

            {/* Deep Metallic Navy Contrast Vinyl Stripe */}
            <linearGradient id="coopLiveryNavy" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0A0D14" />
              <stop offset="70%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>

            {/* Diamond Cut Alloy Wheel Rim */}
            <radialGradient id="alloyRim" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F8FAFC" />
              <stop offset="35%" stopColor="#64748B" />
              <stop offset="75%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0A0D14" />
            </radialGradient>

            {/* Brake Caliper Neon Green */}
            <linearGradient id="caliperGreen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6EF000" />
              <stop offset="100%" stopColor="#4BB300" />
            </linearGradient>
          </defs>

          {/* DUAL LAYER GROUND SHADOW (Diffuse Ambient Shadow + High Density Contact Shadow) */}
          {/* Ambient Diffuse Shadow */}
          <ellipse cx="180" cy="103" rx="155" ry="9" fill="#000000" fillOpacity="0.45" filter="blur(3px)" />
          {/* Tire Contact Occlusion Shadows */}
          <ellipse cx="110" cy="103" rx="22" ry="3" fill="#000000" fillOpacity="0.85" />
          <ellipse cx="260" cy="103" rx="22" ry="3" fill="#000000" fillOpacity="0.85" />

          {/* SHARK FIN ROOF ANTENNA */}
          <path d="M102 32 L112 26 L114 32 Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="0.8" />

          {/* AERODYNAMIC ROOF POD / COOP63 ILLUMINATED SIGN */}
          <g transform="translate(148, 12)">
            {/* Pod Base */}
            <path d="M0 13 L6 3 L64 3 L70 13 Z" fill="#0A0D14" stroke="#6EF000" strokeWidth="1.2" />
            {/* Illuminated Center Display */}
            <rect x="7" y="4" width="56" height="8" rx="2" fill="#6EF000" />
            <text x="35" y="10.5" fill="#0A0D14" fontSize="7" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.6">
              COOP63
            </text>
          </g>

          {/* CHASSIS & WHITE CAR BODY (Realistic Contemporary Sedan Proportions) */}
          <g id="carBody">
            {/* Base Bodywork Silhouette with Sleek Roofline */}
            <path 
              d="M20 82 
                 C24 68 38 60 55 58 
                 C80 57 105 45 130 31 
                 C160 22 230 22 260 33 
                 C295 48 318 58 340 68 
                 C352 74 354 86 348 93 
                 C342 96 325 96 312 96 
                 C308 81 282 81 278 96 
                 L132 96 
                 C128 81 102 81 98 96 
                 L38 96 
                 C26 96 18 90 20 82 Z" 
              fill="url(#realWhiteBody)" 
              stroke="#94A3B8" 
              strokeWidth="1.2" 
            />

            {/* Specular Roofline Highlight Beam */}
            <path 
              d="M130 32 C160 23 230 23 260 34 L258 36 C229 25 161 25 132 34 Z" 
              fill="url(#roofReflection)" 
            />

            {/* Crisp Body Crease (Character Line along the door shoulder) */}
            <path 
              d="M48 60 C110 58 200 56 335 69" 
              stroke="#CBD5E1" 
              strokeWidth="1.2" 
              fill="none" 
            />
            <path 
              d="M48 61 C110 59 200 57 335 70" 
              stroke="#FFFFFF" 
              strokeWidth="1" 
              fill="none" 
            />
          </g>

          {/* GREEN & NAVY AUTOMOTIVE LIVERY (Plotagem de Precisão Coop63) */}
          <g id="liveryWrap">
            {/* Dynamic Swish along Lower Door & Rocker */}
            <path 
              d="M22 80 C60 77 120 73 180 73 C240 73 300 71 346 83 L344 88 C298 78 240 79 180 79 C120 79 60 83 22 86 Z" 
              fill="url(#coopLiveryNeon)" 
            />

            {/* Upper Navy Contrast Pinstripe */}
            <path 
              d="M26 77 C70 74 130 70 190 70 C245 70 300 69 335 77 L336 79 C300 71 245 72 190 72 C130 72 70 76 26 79 Z" 
              fill="url(#coopLiveryNavy)" 
            />

            {/* Front Bumper Aerodynamic Winglet */}
            <path 
              d="M328 85 L346 83 L344 88 L328 88 Z" 
              fill="url(#coopLiveryNeon)" 
            />
          </g>

          {/* TINTED GREENHOUSE GLASS & INTERNAL DETAILS */}
          <g id="glassArea">
            {/* Rear Quarter Window */}
            <path d="M120 37 L92 53 L144 53 L144 37 Z" fill="url(#automotiveGlass)" stroke="#475569" strokeWidth="0.8" />
            
            {/* Rear Passenger Window (Opens slightly when passenger exits) */}
            <path d="M148 37 L148 53 L204 53 L204 37 Z" fill="url(#automotiveGlass)" stroke="#475569" strokeWidth="0.8" />
            {isCourtesyLightOn && (
              <rect x="150" y="38" width="52" height="14" rx="2" fill="#FEF08A" fillOpacity="0.25" />
            )}

            {/* Front Driver Window */}
            <path d="M208 37 L208 53 L260 53 L248 37 Z" fill="url(#automotiveGlass)" stroke="#475569" strokeWidth="0.8" />
            
            {/* Front Windshield A-Pillar Angle */}
            <path d="M250 37 L262 53 L298 53 Z" fill="url(#automotiveGlass)" stroke="#475569" strokeWidth="0.8" />

            {/* B-Pillar & C-Pillar Solid Dark Frames */}
            <rect x="144" y="36" width="4" height="18" fill="#0A0D14" />
            <rect x="204" y="36" width="4" height="18" fill="#0A0D14" />

            {/* Driver Silhouette with Cap & Hands on Wheel */}
            <circle cx="230" cy="45" r="4.8" fill="#E2E8F0" />
            <path d="M225 43 C225 40 228 39 232 39 C236 39 238 41 238 43 Z" fill="#6EF000" />
            <line x1="242" y1="47" x2="238" y2="51" stroke="#94A3B8" strokeWidth="1.8" strokeLinecap="round" />
          </g>

          {/* OFFICIAL PLOTTED DOOR EMBLEM: coop63.coop.br */}
          <g transform="translate(138, 62)">
            {/* Badge Plate with Deep Navy Texture & Lime Border */}
            <rect x="0" y="0" width="112" height="25" rx="5" fill="#0A0D14" stroke="#6EF000" strokeWidth="1.2" />
            
            {/* Speed dots icon mark */}
            <circle cx="10" cy="12.5" r="3.5" fill="#6EF000" />
            <rect x="16" y="10.5" width="10" height="4" rx="2" fill="#6EF000" />

            {/* Crisp Official Brand Typography */}
            <text x="31" y="13.5" fill="#FFFFFF" fontSize="9" fontWeight="900" fontFamily="sans-serif">
              coop<tspan fill="#6EF000">63</tspan><tspan fill="#6EF000" fontSize="7">.coop.br</tspan>
            </text>
            <text x="31" y="20.5" fill="#94A3B8" fontSize="5.2" fontWeight="bold" letterSpacing="0.8">
              TRANSPORTE COOPERATIVO
            </text>
          </g>

          {/* AERODYNAMIC SIDE MIRROR WITH INTEGRATED LED REPEATER */}
          <g transform="translate(254, 52)">
            <path d="M0 4 C0 1 5 0 10 2 L12 6 C10 8 4 8 0 7 Z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="0.8" />
            {/* LED Mirror Turn Signal Flasher */}
            {isTurnSignalActive && (
              <circle cx="9" cy="4" r="1.8" fill="#F59E0B" className="animate-ping" />
            )}
          </g>

          {/* DOOR SEAMS & EMBEDDED HANDLES */}
          <line x1="146" y1="53" x2="146" y2="92" stroke="#94A3B8" strokeWidth="1" />
          <line x1="206" y1="53" x2="206" y2="92" stroke="#94A3B8" strokeWidth="1" />
          {/* Handles */}
          <rect x="152" y="58" width="11" height="2.5" rx="1.2" fill="#0A0D14" stroke="#6EF000" strokeWidth="0.5" />
          <rect x="212" y="58" width="11" height="2.5" rx="1.2" fill="#0A0D14" stroke="#6EF000" strokeWidth="0.5" />

          {/* FRONT FULL-LED HEADLIGHT CLUSTER */}
          <g transform="translate(322, 65)">
            {/* Headlight Housing */}
            <path d="M0 0 C16 3 24 9 24 16 L2 16 Z" fill="#0F172A" />
            {/* LED DRL Light Blade */}
            <path d="M2 1 C14 4 21 8 21 14" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
            {/* Xenon Projector Lens */}
            <circle cx="10" cy="11" r="4" fill="#FEF08A" filter="drop-shadow(0 0 5px #FEF08A)" />
            {/* Front Turn Signal */}
            {isTurnSignalActive && (
              <circle cx="21" cy="14" r="2.5" fill="#F59E0B" className="animate-ping" />
            )}
          </g>

          {/* REAR LED LIGHT BAR & BRAKE LIGHT */}
          <g transform="translate(19, 71)">
            {/* Taillight Housing */}
            <path d="M0 0 C8 0 12 3 12 11 L0 11 Z" fill="#450A0A" />
            {/* Red LED Element */}
            <path 
              d="M1 2 C7 2 10 4 10 9" 
              stroke={isBrakingActive ? '#EF4444' : '#DC2626'} 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              filter={isBrakingActive ? 'drop-shadow(0 0 8px #EF4444)' : 'none'} 
            />
            {/* Reverse & Indicator lights */}
            {isTurnSignalActive && (
              <circle cx="3" cy="8" r="2" fill="#F59E0B" className="animate-ping" />
            )}
          </g>

          {/* HIGH-FIDELITY ALLOY WHEELS & SPORT TIRES (Physical Rotation & Calipers) */}
          {/* REAR WHEEL (Center at x=110, y=96) */}
          <g transform="translate(110, 96)">
            {/* Rubber Tire with Tread Profile */}
            <circle cx="0" cy="0" r="21" fill="#0A0D14" stroke="#1E293B" strokeWidth="2.5" />
            {/* Brake Disc with Cross-Drilled Holes */}
            <circle cx="0" cy="0" r="15" fill="#475569" stroke="#334155" strokeWidth="1" />
            {/* Neon Green Sport Caliper (Stationary) */}
            <path d="M-6 -15 C0 -16 6 -16 12 -13 L9 -9 C5 -11 0 -11 -4 -10 Z" fill="url(#caliperGreen)" />
            
            {/* Rotating 5-Spoke Diamond-Cut Alloy Rim */}
            <g 
              className={isWheelsSpinning ? 'animate-spin' : ''} 
              style={{ 
                animationDuration: wheelDuration,
                transformOrigin: '0px 0px',
              }}
            >
              <circle cx="0" cy="0" r="14" fill="url(#alloyRim)" />
              {/* Spoke 1 */}
              <line x1="0" y1="0" x2="0" y2="-13" stroke="#F8FAFC" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="0" y1="0" x2="0" y2="-13" stroke="#0A0D14" strokeWidth="0.8" />
              {/* Spoke 2 */}
              <line x1="0" y1="0" x2="12.3" y2="-4" stroke="#F8FAFC" strokeWidth="2.2" strokeLinecap="round" />
              {/* Spoke 3 */}
              <line x1="0" y1="0" x2="7.6" y2="10.5" stroke="#F8FAFC" strokeWidth="2.2" strokeLinecap="round" />
              {/* Spoke 4 */}
              <line x1="0" y1="0" x2="-7.6" y2="10.5" stroke="#F8FAFC" strokeWidth="2.2" strokeLinecap="round" />
              {/* Spoke 5 */}
              <line x1="0" y1="0" x2="-12.3" y2="-4" stroke="#F8FAFC" strokeWidth="2.2" strokeLinecap="round" />
              {/* Center Wheel Hub with Neon Accent */}
              <circle cx="0" cy="0" r="4.5" fill="#0A0D14" stroke="#6EF000" strokeWidth="1" />
            </g>
          </g>

          {/* FRONT WHEEL (Center at x=260, y=96) */}
          <g transform="translate(260, 96)">
            {/* Rubber Tire with Tread Profile */}
            <circle cx="0" cy="0" r="21" fill="#0A0D14" stroke="#1E293B" strokeWidth="2.5" />
            {/* Brake Disc with Cross-Drilled Holes */}
            <circle cx="0" cy="0" r="15" fill="#475569" stroke="#334155" strokeWidth="1" />
            {/* Neon Green Sport Caliper (Stationary) */}
            <path d="M-6 -15 C0 -16 6 -16 12 -13 L9 -9 C5 -11 0 -11 -4 -10 Z" fill="url(#caliperGreen)" />
            
            {/* Rotating 5-Spoke Diamond-Cut Alloy Rim */}
            <g 
              className={isWheelsSpinning ? 'animate-spin' : ''} 
              style={{ 
                animationDuration: wheelDuration,
                transformOrigin: '0px 0px',
              }}
            >
              <circle cx="0" cy="0" r="14" fill="url(#alloyRim)" />
              {/* Spoke 1 */}
              <line x1="0" y1="0" x2="0" y2="-13" stroke="#F8FAFC" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="0" y1="0" x2="0" y2="-13" stroke="#0A0D14" strokeWidth="0.8" />
              {/* Spoke 2 */}
              <line x1="0" y1="0" x2="12.3" y2="-4" stroke="#F8FAFC" strokeWidth="2.2" strokeLinecap="round" />
              {/* Spoke 3 */}
              <line x1="0" y1="0" x2="7.6" y2="10.5" stroke="#F8FAFC" strokeWidth="2.2" strokeLinecap="round" />
              {/* Spoke 4 */}
              <line x1="0" y1="0" x2="-7.6" y2="10.5" stroke="#F8FAFC" strokeWidth="2.2" strokeLinecap="round" />
              {/* Spoke 5 */}
              <line x1="0" y1="0" x2="-12.3" y2="-4" stroke="#F8FAFC" strokeWidth="2.2" strokeLinecap="round" />
              {/* Center Wheel Hub with Neon Accent */}
              <circle cx="0" cy="0" r="4.5" fill="#0A0D14" stroke="#6EF000" strokeWidth="1" />
            </g>
          </g>

        </svg>
      </div>

      {/* DISCREET INTERACTIVE REPLAY BUTTON */}
      <div className="absolute right-4 bottom-3 z-30 pointer-events-auto">
        <button
          onClick={startAnimation}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0A0D14]/85 hover:bg-[#0A0D14] border border-brand-green/40 hover:border-brand-green text-gray-200 hover:text-white text-xs font-bold transition-all shadow-xl backdrop-blur-md active:scale-95"
          title="Rever animação realista do carro Coop63"
        >
          <RotateCcw className="w-3.5 h-3.5 text-brand-green" />
          <span className="hidden sm:inline">Rever Animação Realista</span>
        </button>
      </div>

    </div>
  );
}
