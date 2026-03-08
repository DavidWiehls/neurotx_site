import { type ReactNode } from 'react';

interface SectionCardProps {
  children: ReactNode;
  className?: string;
}

const SectionCard = ({ children, className = '' }: SectionCardProps) => (
  <div
    className={`bg-zinc-900/50 border border-white/5 rounded-xl hover:border-indigo-500/20 transition-all duration-300 ${className}`}
  >
    {children}
  </div>
);

export default SectionCard;
