import { ImageResponse } from 'next/og';  
  
export const runtime = 'edge';  
export const size = { width: 32, height: 32 };  
export const contentType = 'image/png';  
  
export default function Icon() {  
  return new ImageResponse(  
    (  
      <svg width="32" height="32" viewBox="0 0 180 180">  
        <circle  
          cx="90"  
          cy="90"  
          r="89"  
          fill="url(#iconGradient)"  
          stroke="hsl(217, 92%, 76%)"  
          strokeWidth="1"  
        />  
        <defs>  
          <linearGradient  
            id="iconGradient"  
            gradientTransform="rotate(45)"  
          >  
            <stop offset="45%" stopColor="#000000" />  
            <stop offset="100%" stopColor="hsl(217, 92%, 76%)" />  
          </linearGradient>  
        </defs>  
      </svg>  
    ),  
    {  
      ...size,  
    }  
  );  
}