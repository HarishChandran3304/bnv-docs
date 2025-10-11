'use client';  
  
import { useId } from 'react';  
  
export function BetterEnvIcon(props: React.SVGProps<SVGSVGElement>) {  
  const id = useId();  
  return (  
    <svg width="24" height="24" viewBox="0 0 180 180" {...props}>  
      <circle  
        cx="90"  
        cy="90"  
        r="89"  
        fill={`url(#${id}-iconGradient)`}  
        stroke="var(--color-fd-primary)"  
        strokeWidth="1"  
      />  
      <defs>  
        <linearGradient  
          id={`${id}-iconGradient`}  
          gradientTransform="rotate(45)"  
        >  
          <stop offset="45%" stopColor="var(--color-fd-background)" />  
          <stop offset="100%" stopColor="var(--color-fd-primary)" />  
        </linearGradient>  
      </defs>  
    </svg>  
  );  
}