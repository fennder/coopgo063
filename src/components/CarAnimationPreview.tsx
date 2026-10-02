import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, X, CheckCircle2, Star, Sparkles, MapPin, ShieldCheck, HeartHandshake, Eye, EyeOff } from 'lucide-react';

interface CarAnimationPreviewProps {
  onApprove?: () => void;
}

export function CarAnimationPreview({ onApprove }: CarAnimationPreviewProps) {
  // Animation stages: 'driving_in' -> 'stopped' -> 'passenger_drop' -> 'driving_out' -> 'finished'
  const [stage, setStage] = useState<'idle' | 'driving_in' | 'stopped' | 'passenger_drop' | 'driving_out' | 'finished'>('driving_in');
  const [isMinimized, setIsMinimized] = useState(false);
  const [userApproved, setUserApproved] = useState(false);
  const [showRoad, setShowRoad] = useState(true);
  const timerRef = useRef<NodeJS.Timeout[]>([]);

  const clearAllTimers = () => {
    timerRef.current.forEach(t => clearTimeout(t));
    timerRef.current = [];
  };

  const startAnimation = () => {
    clearAllTimers();
    setStage('driving_in');

    // 1. Car approaches and stops at the drop-off zone (3s)
    const t1 = setTimeout(() => {
      setStage('stopped');
    }, 3200);

    // 2. Passenger opens door, steps out, thanks driver with 5 stars (after 1s stopped)
    const t2 = setTimeout(() => {
      setStage('passenger_drop');
    }, 4500);

    // 3. Passenger finishes drop-off, car takes off (after 4s of drop-off interaction)
    const t3 = setTimeout(() => {
      setStage('driving_out');
    }, 9500);

    // 4. Car exits screen, sequence completes (3s after driving out)
    const t4 = setTimeout(() => {
      setStage('finished');
    }, 13000);

    timerRef.current = [t1, t2, t3, t4];
  };

  useEffect(() => {
    startAnimation();
    return () => clearAllTimers();
  }, []);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 pointer-events-none select-none">
      
      {/* Interactive Road Track & Animation Stage */}
      {showRoad && (
        <div className="relative w-full h-44 overflow-hidden pointer-events-auto">
          {/* Street & Scenery Background */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0A0D14] via-[#141A24] to-transparent border-t border-brand-green/30 backdrop-blur-md shadow-2xl">
            
            {/* Sidewalk & Street Lights */}
            <div className="absolute top-0 inset-x-0 h-4 bg-[#1E2638] flex items-center justify-between px-6 border-b border-gray-700/60">
              <div className="flex items-center gap-3 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
                <span>Ponto de Embarque & Desembarque Coop63</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-brand-green font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Viagem Monitorada & Segura</span>
              </div>
            </div>

            {/* Asphalt Road Lane */}
            <div className="absolute top-4 inset-x-0 bottom-0 bg-[#0c1017] flex flex-col justify-center">
              {/* Road Dash Lines */}
              <div className="w-full flex justify-between gap-6 px-2 overflow-hidden opacity-40">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div key={i} className="w-12 h-1 bg-yellow-400/80 rounded-full shrink-0" />
                ))}
              </div>
            </div>
          </div>

          {/* DESTINATION PIN / STOPPING ZONE (at 45% screen width) */}
          <div className="absolute bottom-14 left-[46%] -translate-x-1/2 flex flex-col items-center z-10 transition-opacity duration-500">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-brand-navy-light/95 border border-brand-green text-brand-green rounded-full text-xs font-bold shadow-lg animate-bounce">
              <MapPin className="w-3.5 h-3.5 text-brand-green" />
              <span>Destino Final</span>
            </div>
            <div className="w-0.5 h-4 bg-brand-green/80" />
            <div className="w-6 h-1.5 bg-brand-green/40 rounded-full blur-[1px]" />
          </div>

          {/* PASSENGER ANIMATION ELEMENT */}
          {(stage === 'passenger_drop' || stage === 'driving_out' || stage === 'finished') && (
            <div 
              className={`absolute bottom-6 left-[48%] z-20 transition-all duration-700 ${
                stage === 'driving_out' || stage === 'finished' ? 'translate-x-16 opacity-95' : 'translate-x-0 opacity-100'
              }`}
            >
              {/* Passenger Speech & Rating Bubble */}
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 bg-white text-brand-navy px-3.5 py-2 rounded-2xl shadow-2xl border-2 border-brand-green flex flex-col items-center gap-1 min-w-[190px] animate-in fade-in zoom-in duration-300">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400 animate-pulse" />
                  ))}
                  <span className="text-[11px] font-extrabold text-brand-navy ml-1">5.0</span>
                </div>
                <div className="text-[11px] font-bold text-center leading-tight">
                  "Obrigado, motorista! <br />
                  <span className="text-brand-green font-extrabold">Coop63</span> é nota 10!"
                </div>
                {/* Speech Bubble Arrow */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-brand-green" />
              </div>

              {/* Passenger Figure (Stylized Vector) */}
              <svg width="60" height="90" viewBox="0 0 60 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
                {/* Shadow */}
                <ellipse cx="30" cy="85" rx="18" ry="4" fill="#000" fillOpacity="0.4" />
                
                {/* Legs */}
                <rect x="22" y="55" width="6" height="28" rx="3" fill="#1E293B" />
                <rect x="32" y="55" width="6" height="28" rx="3" fill="#0F172A" />
                {/* Shoes */}
                <ellipse cx="24" cy="83" rx="5" ry="3" fill="#FFFFFF" />
                <ellipse cx="36" cy="83" rx="5" ry="3" fill="#FFFFFF" />

                {/* Torso / Jacket */}
                <rect x="18" y="28" width="24" height="30" rx="6" fill="#0284C7" />
                {/* Backpack */}
                <rect x="12" y="32" width="7" height="18" rx="3" fill="#334155" />

                {/* Left Arm waving with Phone */}
                <g className="animate-bounce origin-top">
                  <path d="M40 32L50 20L53 23" stroke="#0284C7" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                  {/* Phone */}
                  <rect x="49" y="14" width="7" height="11" rx="2" fill="#0A0D14" stroke="#6EF000" strokeWidth="1" />
                </g>

                {/* Head & Face */}
                <circle cx="30" cy="18" r="10" fill="#F8D7BB" />
                {/* Hair */}
                <path d="M20 16C20 11 24 8 30 8C36 8 40 11 40 16C37 14 33 13 30 13C26 13 22 14 20 16Z" fill="#3E2723" />
                {/* Friendly Smile & Glasses */}
                <circle cx="28" cy="17" r="1.5" fill="#0A0D14" />
                <circle cx="34" cy="17" r="1.5" fill="#0A0D14" />
                <path d="M28 22C30 24 33 24 35 22" stroke="#0A0D14" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          )}

          {/* THE COOP63 PLOTTED CAR (Carro Plotado com Identidade Oficial) */}
          <div 
            className="absolute bottom-5 z-30 transition-all ease-in-out"
            style={{
              transitionDuration: stage === 'driving_in' ? '3.2s' : stage === 'driving_out' ? '3.5s' : '0.5s',
              transform: 
                stage === 'idle' 
                  ? 'translateX(-380px)' 
                  : stage === 'driving_in' || stage === 'stopped' || stage === 'passenger_drop'
                    ? 'translateX(calc(45vw - 160px))' 
                    : stage === 'driving_out' || stage === 'finished'
                      ? 'translateX(105vw)'
                      : 'translateX(-380px)',
            }}
          >
            {/* Front Light Beam */}
            <div className="absolute right-[-140px] top-6 w-44 h-16 bg-gradient-to-r from-yellow-200/40 via-yellow-100/15 to-transparent rounded-full blur-md -rotate-6 pointer-events-none" />

            {/* Rear Electric/Speed Trail when moving */}
            {(stage === 'driving_in' || stage === 'driving_out') && (
              <div className="absolute left-[-80px] top-10 w-28 h-6 bg-gradient-to-l from-brand-green/60 via-brand-green/20 to-transparent blur-sm rounded-full pointer-events-none" />
            )}

            {/* Car SVG Graphic */}
            <svg width="340" height="110" viewBox="0 0 340 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl">
              <defs>
                {/* Metallic Navy Body Gradient */}
                <linearGradient id="carBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1E293B" />
                  <stop offset="40%" stopColor="#0A0D14" />
                  <stop offset="100%" stopColor="#0F172A" />
                </linearGradient>

                {/* Neon Green Livery Gradient */}
                <linearGradient id="liveryGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6EF000" />
                  <stop offset="100%" stopColor="#5ECC00" />
                </linearGradient>

                {/* Window Tint Gradient */}
                <linearGradient id="glassGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#0A0D14" stopOpacity="0.9" />
                </linearGradient>

                {/* Wheel Rim Gradient */}
                <radialGradient id="rimGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#6EF000" />
                  <stop offset="40%" stopColor="#334155" />
                  <stop offset="100%" stopColor="#0A0D14" />
                </radialGradient>
              </defs>

              {/* Shadow under car */}
              <ellipse cx="170" cy="100" rx="145" ry="8" fill="#000000" fillOpacity="0.6" />

              {/* ROOF TAXI / COOPERATIVA POD */}
              <g transform="translate(135, 10)">
                <rect x="0" y="0" width="65" height="15" rx="5" fill="#0A0D14" stroke="#6EF000" strokeWidth="1.5" />
                <rect x="3" y="3" width="59" height="9" rx="3" fill="#6EF000" />
                <text x="32" y="10" fill="#0A0D14" fontSize="7" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">
                  COOP63
                </text>
              </g>

              {/* MAIN CAR CHASSIS */}
              {/* Lower Body */}
              <path 
                d="M18 78 C25 60 45 52 80 50 L120 30 C150 20 220 20 245 32 L290 54 C315 57 335 65 330 82 C325 90 310 90 295 90 L260 90 C255 76 235 76 230 90 L120 90 C115 76 95 76 90 90 L35 90 C22 90 14 85 18 78 Z" 
                fill="url(#carBodyGrad)" 
                stroke="#334155" 
                strokeWidth="1.5"
              />

              {/* GREEN PLOTTED LIVERY STRIPES (Plotagem Oficial Coop63) */}
              <path 
                d="M20 74 C50 72 100 68 160 68 C220 68 280 66 325 76 L324 82 C280 72 220 74 160 74 C100 74 50 78 20 80 Z" 
                fill="url(#liveryGrad)" 
              />
              <path 
                d="M75 53 L125 33 C145 27 215 27 240 35 L280 55 L265 57 L235 38 C215 32 150 32 130 38 L85 55 Z" 
                fill="url(#liveryGrad)" 
                opacity="0.85"
              />

              {/* CABIN / WINDOWS */}
              {/* Rear Window */}
              <path d="M125 35 L90 52 L145 52 L145 35 Z" fill="url(#glassGrad)" stroke="#1E293B" strokeWidth="1" />
              {/* Passenger Rear Door Window */}
              <path d="M149 35 L149 52 L195 52 L195 35 Z" fill="url(#glassGrad)" stroke="#1E293B" strokeWidth="1" />
              {/* Front Driver Door Window */}
              <path d="M199 35 L199 52 L245 52 L235 35 Z" fill="url(#glassGrad)" stroke="#1E293B" strokeWidth="1" />
              {/* Front Windshield Angle */}
              <path d="M237 35 L247 52 L280 52 Z" fill="url(#glassGrad)" stroke="#1E293B" strokeWidth="1" />

              {/* DRIVER SILHOUETTE (Behind Steering Wheel) */}
              <circle cx="218" cy="43" r="5" fill="#E2E8F0" />
              <path d="M213 41 C213 38 216 37 220 37 C224 37 226 39 226 41 Z" fill="#6EF000" />
              {/* Steering Wheel */}
              <path d="M232 45 L227 49" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />

              {/* PLOTTED LOGO & URL ON THE CAR SIDE DOOR */}
              <g transform="translate(130, 60)">
                {/* Badge Plate */}
                <rect x="0" y="0" width="105" height="24" rx="6" fill="#0A0D14" stroke="#6EF000" strokeWidth="1" />
                
                {/* Mini logo icon mark */}
                <circle cx="10" cy="12" r="4" fill="#6EF000" />
                <rect x="17" y="10" width="10" height="4" rx="2" fill="#6EF000" />

                {/* Crisp Domain coop63.coop.br */}
                <text x="32" y="14" fill="#FFFFFF" fontSize="9" fontWeight="900" fontFamily="sans-serif">
                  coop<tspan fill="#6EF000">63</tspan><tspan fill="#6EF000" fontSize="7">.coop.br</tspan>
                </text>
                <text x="32" y="20" fill="#94A3B8" fontSize="5" fontWeight="bold" letterSpacing="0.8">
                  TRANSPORTE COOPERATIVO
                </text>
              </g>

              {/* CAR DETAILS: Headlights, Taillights, Door Handles */}
              {/* Front Headlight */}
              <path d="M305 60 C320 62 328 66 328 72 L310 72 Z" fill="#FEF08A" filter="drop-shadow(0 0 6px #FEF08A)" />
              {/* Rear Taillight / Brake light */}
              <path 
                d="M18 66 C24 66 28 68 28 74 L18 74 Z" 
                fill={stage === 'stopped' || stage === 'passenger_drop' ? '#EF4444' : '#DC2626'} 
                filter={stage === 'stopped' || stage === 'passenger_drop' ? 'drop-shadow(0 0 8px #EF4444)' : 'none'} 
              />
              {/* Turn Signal / Hazard Flash */}
              {(stage === 'stopped' || stage === 'passenger_drop') && (
                <circle cx="325" cy="74" r="3" fill="#F59E0B" className="animate-ping" />
              )}

              {/* Door Seam Lines & Handles */}
              <line x1="147" y1="52" x2="147" y2="85" stroke="#1E293B" strokeWidth="1.2" />
              <line x1="197" y1="52" x2="197" y2="85" stroke="#1E293B" strokeWidth="1.2" />
              <rect x="153" y="56" width="10" height="2" rx="1" fill="#6EF000" />
              <rect x="203" y="56" width="10" height="2" rx="1" fill="#6EF000" />

              {/* WHEELS (Front at x=245, Rear at x=105) */}
              {/* Rear Wheel */}
              <g transform="translate(105, 90)">
                <circle cx="0" cy="0" r="19" fill="#0A0D14" stroke="#334155" strokeWidth="2" />
                <circle cx="0" cy="0" r="12" fill="url(#rimGrad)" />
                <circle cx="0" cy="0" r="4" fill="#6EF000" />
                {/* Spinning Spokes */}
                <g className={stage === 'driving_in' || stage === 'driving_out' ? 'animate-spin' : ''} style={{ animationDuration: '0.4s' }}>
                  <line x1="-12" y1="0" x2="12" y2="0" stroke="#FFFFFF" strokeWidth="1.5" />
                  <line x1="0" y1="-12" x2="0" y2="12" stroke="#FFFFFF" strokeWidth="1.5" />
                  <line x1="-8" y1="-8" x2="8" y2="8" stroke="#6EF000" strokeWidth="1.5" />
                  <line x1="-8" y1="8" x2="8" y2="-8" stroke="#6EF000" strokeWidth="1.5" />
                </g>
              </g>

              {/* Front Wheel */}
              <g transform="translate(245, 90)">
                <circle cx="0" cy="0" r="19" fill="#0A0D14" stroke="#334155" strokeWidth="2" />
                <circle cx="0" cy="0" r="12" fill="url(#rimGrad)" />
                <circle cx="0" cy="0" r="4" fill="#6EF000" />
                {/* Spinning Spokes */}
                <g className={stage === 'driving_in' || stage === 'driving_out' ? 'animate-spin' : ''} style={{ animationDuration: '0.4s' }}>
                  <line x1="-12" y1="0" x2="12" y2="0" stroke="#FFFFFF" strokeWidth="1.5" />
                  <line x1="0" y1="-12" x2="0" y2="12" stroke="#FFFFFF" strokeWidth="1.5" />
                  <line x1="-8" y1="-8" x2="8" y2="8" stroke="#6EF000" strokeWidth="1.5" />
                  <line x1="-8" y1="8" x2="8" y2="-8" stroke="#6EF000" strokeWidth="1.5" />
                </g>
              </g>
            </svg>
          </div>
        </div>
      )}

      {/* FLOATING PREVIEW CONTROLLER & APPROVAL PROMPT (Interativo para o Usuário) */}
      <div className="container mx-auto px-4 pb-4 flex justify-end pointer-events-auto">
        <div className="bg-brand-navy/95 border-2 border-brand-green text-white p-4 rounded-3xl shadow-2xl backdrop-blur-xl max-w-md w-full animate-in slide-in-from-bottom-6 duration-500">
          
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-brand-green animate-ping" />
              <h3 className="font-black text-sm tracking-wide text-white uppercase flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-brand-green" />
                Prévia da Animação Coop63
              </h3>
            </div>
            
            <div className="flex items-center gap-1">
              <button
                onClick={() => setShowRoad(!showRoad)}
                title={showRoad ? "Ocultar pista" : "Exibir pista"}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 transition-colors"
              >
                {showRoad ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <p className="text-xs text-gray-300 mb-3 leading-relaxed">
            Aqui está a prévia do <strong className="text-brand-green">carro plotado oficial da Coop63</strong> passeando pelo site, estacionando no ponto de destino e deixando o passageiro satisfeito com avaliação 5 estrelas!
          </p>

          {/* Current Animation State Badge */}
          <div className="bg-brand-navy-light rounded-xl p-2.5 mb-3.5 flex items-center justify-between text-xs border border-white/10">
            <span className="text-gray-400 font-medium">Status da Corrida:</span>
            <span className="font-extrabold text-brand-green flex items-center gap-1.5">
              {stage === 'driving_in' && '🚗 Carro Chegando ao Destino...'}
              {stage === 'stopped' && '🛑 Parando no Ponto...'}
              {stage === 'passenger_drop' && '👋 Passageiro Desembarcando (5 ⭐)'}
              {stage === 'driving_out' && '⚡ Carro Seguindo Viagem...'}
              {stage === 'finished' && '✅ Corrida Concluída!'}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={startAnimation}
              className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-2.5 px-3 rounded-xl text-xs transition-all active:scale-95 border border-white/15"
            >
              <RotateCcw className="w-3.5 h-3.5 text-brand-green" />
              <span>Ver Novamente</span>
            </button>

            <button
              onClick={() => {
                setUserApproved(true);
                if (onApprove) onApprove();
              }}
              className={`flex-1 flex items-center justify-center gap-2 font-black py-2.5 px-3 rounded-xl text-xs transition-all active:scale-95 shadow-lg ${
                userApproved 
                  ? 'bg-brand-green text-brand-navy ring-2 ring-brand-green' 
                  : 'bg-brand-green hover:bg-brand-green-hover text-brand-navy'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{userApproved ? 'Aprovado! ✓' : 'Aprovar Implementação'}</span>
            </button>
          </div>

          {userApproved && (
            <div className="mt-2.5 p-2 bg-brand-green/20 border border-brand-green/40 rounded-lg text-center text-xs text-brand-green font-bold animate-in fade-in">
              🎉 Perfeito! A animação está aprovada e ativa no site.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
