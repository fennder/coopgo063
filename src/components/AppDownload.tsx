import React, { useState } from 'react';
import { Smartphone, CheckCircle, ShieldCheck } from 'lucide-react';
import { getCookie, setCookie, COOKIE_PLATFORM_KEY } from '../utils/cookies';

export function AppDownload() {
  const [passengerPlatform, setPassengerPlatform] = useState<'apple' | 'android'>(() => {
    const saved = getCookie(COOKIE_PLATFORM_KEY);
    return saved === 'apple' || saved === 'android' ? saved : 'android';
  });

  const handlePlatformChange = (platform: 'apple' | 'android') => {
    setPassengerPlatform(platform);
    setCookie(COOKIE_PLATFORM_KEY, platform, {
      maxAge: 60 * 60 * 24 * 365,
      path: '/',
      sameSite: 'Lax',
    });
  };

  const passengerGooglePlayUrl =
    'https://play.google.com/store/apps/details?id=br.com.coop63.passenger.drivermachine&pcampaignid=web_share';

  const driverGooglePlayUrl =
    'https://play.google.com/store/apps/details?id=br.com.coop63.taxi.drivermachine&pcampaignid=web_share';

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/5 rounded-l-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-brand-navy/5 rounded-r-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-4">
            Baixe nossos <span className="text-brand-green">Aplicativos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mobilidade na palma da sua mão. Baixe o app oficial da Coop63 para passageiros ou motoristas parceiros na Google Play.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 justify-center items-stretch max-w-5xl mx-auto">
          
          {/* Card Passageiro */}
          <div className="flex-1 bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col items-center text-center relative overflow-hidden group hover:border-brand-green transition-colors">
            <div className="absolute top-0 left-0 w-full h-2 bg-brand-green" />
            <img 
              src="/assets/aistudio/unnamed_88fe9c17.webp" 
              alt="Coop63 App Passageiro" 
              className="w-16 h-16 object-contain mb-3 drop-shadow-md group-hover:scale-105 transition-transform rounded-2xl bg-black" 
              referrerPolicy="no-referrer"
            />
            <h3 className="text-2xl font-bold text-brand-navy mb-1">App Passageiro</h3>
            <p className="text-gray-500 mb-5 h-10 text-sm">Para você chegar onde precisa com segurança, conforto e preço justo.</p>
            
            {/* Store Toggle */}
            <div className="inline-flex p-1 bg-gray-100 rounded-xl mb-6 w-full max-w-[260px]">
              <button
                type="button"
                onClick={() => handlePlatformChange('android')}
                className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  passengerPlatform === 'android'
                    ? 'bg-brand-green text-brand-navy font-bold shadow-sm'
                    : 'text-gray-600 hover:text-brand-navy'
                }`}
              >
                <svg viewBox="0 0 512 512" fill="currentColor" className="w-3.5 h-3.5"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                <span>Google Play</span>
              </button>
              <button
                type="button"
                onClick={() => handlePlatformChange('apple')}
                className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  passengerPlatform === 'apple'
                    ? 'bg-brand-navy text-white shadow-sm'
                    : 'text-gray-600 hover:text-brand-navy'
                }`}
              >
                <svg viewBox="0 0 384 512" fill="currentColor" className="w-3.5 h-3.5"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                <span>Apple (iOS)</span>
              </button>
            </div>

            {/* App Showcase Box with Official Link */}
            <div className="w-full bg-gray-50 p-6 rounded-2xl border border-gray-200 mb-6 flex flex-col items-center justify-center min-h-[200px]">
              {passengerPlatform === 'android' ? (
                <>
                  <div className="p-2.5 bg-white rounded-xl border border-gray-200 shadow-sm mb-3">
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(passengerGooglePlayUrl)}`}
                      alt="QR Code Google Play App Passageiro Coop63"
                      className="w-28 h-28 object-contain"
                    />
                  </div>
                  <span className="text-xs text-gray-500 font-semibold mb-3">
                    Aponte a câmera do seu celular Android
                  </span>
                  <a
                    href={passengerGooglePlayUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-green hover:bg-brand-green-hover text-brand-navy font-black text-xs transition-transform active:scale-95 shadow-md"
                  >
                    <svg viewBox="0 0 512 512" fill="currentColor" className="w-4 h-4 fill-current"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                    <span>Baixar no Google Play</span>
                  </a>
                </>
              ) : (
                <>
                  <div className="w-16 h-16 rounded-2xl bg-brand-navy/10 border border-brand-navy/20 flex items-center justify-center mb-3 text-brand-navy">
                    <Smartphone className="w-8 h-8 text-brand-navy" />
                  </div>
                  <span className="text-sm font-bold text-brand-navy">Versão para iPhone (iOS)</span>
                  <span className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
                    Em processo de homologação na App Store
                  </span>
                </>
              )}
            </div>
            
            <p className="text-xs font-bold text-brand-navy mb-3 uppercase tracking-wider">Acesse diretamente</p>
            <div className="flex gap-3 justify-center w-full">
              <a
                href={passengerGooglePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handlePlatformChange('android')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl flex-1 justify-center transition-all ${
                  passengerPlatform === 'android'
                    ? 'bg-brand-green text-brand-navy font-bold shadow-md ring-2 ring-brand-green ring-offset-2'
                    : 'bg-gray-900 text-white hover:bg-black'
                }`}
                title="Abrir no Google Play"
              >
                <svg viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5 fill-current shrink-0"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                <div className="text-left">
                  <span className="block text-[10px] leading-none opacity-80">Disponível no</span>
                  <span className="block text-sm font-bold leading-none mt-0.5">Google Play</span>
                </div>
              </a>
              <div
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl flex-1 justify-center transition-all ${
                  passengerPlatform === 'apple'
                    ? 'bg-brand-navy text-white shadow-md'
                    : 'bg-gray-100 text-gray-500'
                }`}
              >
                <svg viewBox="0 0 384 512" fill="currentColor" className="w-5 h-5 shrink-0"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                <div className="text-left">
                  <span className="block text-[10px] leading-none text-gray-400">Em breve na</span>
                  <span className="block text-sm font-semibold leading-none mt-0.5">App Store</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card Motorista */}
          <div className="flex-1 bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col items-center text-center relative overflow-hidden group hover:border-brand-navy transition-colors">
            <div className="absolute top-0 left-0 w-full h-2 bg-brand-navy" />
            <img 
              src="/assets/aistudio/unnamed_88fe9c17.webp" 
              alt="Coop63 App Motorista" 
              className="w-16 h-16 object-contain mb-3 drop-shadow-md group-hover:scale-105 transition-transform rounded-2xl bg-black" 
              referrerPolicy="no-referrer"
            />
            <h3 className="text-2xl font-bold text-brand-navy mb-1">App Motorista</h3>
            <p className="text-gray-500 mb-5 h-10 text-sm">Mais rentabilidade, suporte cooperativo e segurança para você rodar tranquilo.</p>
            
            {/* App Showcase Box with Official Link */}
            <div className="w-full bg-gray-50 p-6 rounded-2xl border border-gray-200 mb-6 flex flex-col items-center justify-center min-h-[200px]">
              <div className="p-2.5 bg-white rounded-xl border border-gray-200 shadow-sm mb-3">
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(driverGooglePlayUrl)}`}
                  alt="QR Code Google Play App Motorista Coop63"
                  className="w-28 h-28 object-contain"
                />
              </div>
              <span className="text-xs text-gray-500 font-semibold mb-3">
                Aponte a câmera do seu celular Android
              </span>
              <a
                href={driverGooglePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-navy hover:bg-black text-white font-black text-xs transition-transform active:scale-95 shadow-md"
              >
                <svg viewBox="0 0 512 512" fill="currentColor" className="w-4 h-4 text-green-400 shrink-0"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                <span>Baixar no Google Play</span>
              </a>
            </div>
            
            <p className="text-xs font-bold text-brand-navy mb-3 uppercase tracking-wider">Acesse diretamente</p>
            <div className="flex gap-4 justify-center w-full">
              <a
                href={driverGooglePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-brand-navy hover:bg-black text-white px-5 py-2.5 rounded-xl w-full max-w-[240px] justify-center shadow-md transition-transform hover:scale-105 active:scale-95"
                title="Abrir App Motorista no Google Play"
              >
                <svg viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5 text-green-400 shrink-0"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                <div className="text-left">
                  <span className="block text-[10px] leading-none text-gray-300">Disponível no</span>
                  <span className="block text-sm font-bold leading-none mt-0.5">Google Play</span>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
