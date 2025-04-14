
import { Link } from 'react-router-dom';
import { Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  textColor?: string;
}

const Logo = ({ className, showText = true, size = 'md', textColor = 'text-primary' }: LogoProps) => {
  const logoSizes = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <Link to="/" className={cn("flex items-center gap-3", className)}>
      <div className={cn("bg-primary flex items-center justify-center rounded-lg", logoSizes[size])}>
        <Share2 className="text-white transform rotate-90" style={{ strokeWidth: 2.5 }} />
      </div>
      
      {showText && (
        <div className="flex flex-col">
          <span className={cn("font-heading font-bold tracking-tight", textSizes[size], textColor)}>
            Aittoves
          </span>
          <span className={cn("font-heading -mt-1.5 text-sm font-medium", textColor)}>
            AI Tools
          </span>
        </div>
      )}
    </Link>
  );
};

export default Logo;
