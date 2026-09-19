import React from 'react';
import { Smartphone } from 'lucide-react';

export function AppDownload() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/5 rounded-l-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-brand-navy/5 rounded-r-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-4">
            Baixe nosso <span className="text-brand-green">Aplicativo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mobilidade na palma da sua mão. Baixe agora e aproveite todas as vantagens da Coop63.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 justify-center items-stretch max-w-5xl mx-auto">
          
          {/* Card Passageiro */}
          <div className="flex-1 bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col items-center text-center relative overflow-hidden group hover:border-brand-green transition-colors">
            <div className="absolute top-0 left-0 w-full h-2 bg-brand-green" />
            <img 
              src="/logo.png" 
              alt="Coop63" 
              className="w-14 h-14 object-contain mb-3 drop-shadow-sm group-hover:scale-105 transition-transform" 
              referrerPolicy="no-referrer"
            />
            <h3 className="text-2xl font-bold text-brand-navy mb-2">App Passageiro</h3>
            <p className="text-gray-500 mb-8 h-12">Para você chegar onde precisa com segurança e preço justo.</p>
            
            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 mb-8 group-hover:shadow-md transition-shadow">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://coop63.com.br/download/passageiro" 
                alt="QR Code Passageiro" 
                className="w-40 h-40 object-contain"
              />
            </div>
            
            <p className="text-sm font-bold text-brand-navy mb-4 uppercase tracking-wider">Disponível para</p>
            <div className="flex gap-4 justify-center w-full">
              <div className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg flex-1 justify-center">
                <svg viewBox="0 0 384 512" fill="currentColor" className="w-5 h-5"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                <div className="text-left">
                  <span className="block text-[10px] leading-none text-gray-300">Baixar na</span>
                  <span className="block text-sm font-semibold leading-none mt-0.5">App Store</span>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg flex-1 justify-center">
                <svg viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5 text-green-400"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                <div className="text-left">
                  <span className="block text-[10px] leading-none text-gray-300">Disponível no</span>
                  <span className="block text-sm font-semibold leading-none mt-0.5">Google Play</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card Motorista */}
          <div className="flex-1 bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col items-center text-center relative overflow-hidden group hover:border-brand-navy transition-colors">
            <div className="absolute top-0 left-0 w-full h-2 bg-brand-navy" />
            <img 
              src="/logo.png" 
              alt="Coop63" 
              className="w-14 h-14 object-contain mb-3 drop-shadow-sm group-hover:scale-105 transition-transform" 
              referrerPolicy="no-referrer"
            />
            <h3 className="text-2xl font-bold text-brand-navy mb-2">App Motorista</h3>
            <p className="text-gray-500 mb-8 h-12">Mais rentabilidade e segurança para você rodar tranquilo.</p>
            
            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 mb-8 group-hover:shadow-md transition-shadow">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://coop63.com.br/download/motorista" 
                alt="QR Code Motorista" 
                className="w-40 h-40 object-contain"
              />
            </div>
            
            <p className="text-sm font-bold text-brand-navy mb-4 uppercase tracking-wider">Exclusivo para</p>
            <div className="flex gap-4 justify-center w-full">
              <div className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg w-full max-w-[200px] justify-center">
                <svg viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6 text-green-400"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                <div className="text-left">
                  <span className="block text-[11px] leading-none text-gray-300">Disponível no</span>
                  <span className="block text-base font-semibold leading-none mt-1">Google Play</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
