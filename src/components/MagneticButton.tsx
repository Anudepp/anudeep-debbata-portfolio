import { useRef, useState, type ReactNode, type MouseEvent } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  download?: boolean;
  external?: boolean;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  download = false,
  external = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.25, y: y * 0.25 });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  const baseClasses = 'relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 will-change-transform';
  const variants = {
    primary: 'bg-accent text-ink-950 hover:bg-accent-300',
    secondary: 'glass text-white hover:border-accent/40 hover:text-accent',
    ghost: 'text-ink-100 hover:text-accent',
  };

  const content = (
    <motion.span
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  const sharedProps = {
    ref,
    className: `${baseClasses} ${variants[variant]} ${className}`,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };

  if (href) {
    return (
      <a
        {...sharedProps}
        href={href}
        download={download}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button {...sharedProps} onClick={onClick} type="button">
      {content}
    </button>
  );
}
