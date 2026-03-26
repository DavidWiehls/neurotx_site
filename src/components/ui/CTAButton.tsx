import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface CTAButtonProps {
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  children: ReactNode;
  className?: string;
  external?: boolean;
}

const CTAButton = ({
  to,
  href,
  variant = 'primary',
  children,
  className = '',
  external = false,
}: CTAButtonProps) => {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all';
  const variants = {
    primary:
      'bg-indigo-600 hover:bg-indigo-500 text-white',
    secondary:
      'bg-white/10 hover:bg-white/20 text-white border border-white/10 backdrop-blur-sm',
    tertiary:
      'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 backdrop-blur-sm',
  };
  const variantClass =
    variant === 'primary'
      ? variants.primary
      : variant === 'tertiary'
        ? variants.tertiary
        : variants.secondary;
  const classes = `${baseClasses} ${variantClass} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return <span className={classes}>{children}</span>;
};

export default CTAButton;
