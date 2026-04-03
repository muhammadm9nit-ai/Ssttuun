
import React from 'react';
import { ChevronLeft } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  onBack?: () => void;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle, onBack }) => {
  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col">
      <div className="p-8 pb-12 flex flex-col justify-end min-h-[30vh]">
        {onBack && (
          <button onClick={onBack} className="mb-6 text-white hover:opacity-70">
            <ChevronLeft size={28} />
          </button>
        )}
        <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
        <p className="text-gray-400 text-lg">{subtitle}</p>
      </div>
      <div className="flex-1 bg-white rounded-t-[40px] shadow-2xl p-8 pb-12">
        {children}
      </div>
    </div>
  );
};
