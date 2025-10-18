import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import logo from '@/public/images/logo.png';
  
export function baseOptions(): BaseLayoutProps {  
  return {  
    nav: {  
      title: (  
        <>  
          <Image
            src={logo}
            alt="bnv logo"
            width={40}
            height={40}
            className="rounded-full size-10 md:size-10"
          />
          <span className="ml-2 text-lg md:text-xl font-semibold">better-env</span>
        </>  
      ),  
    },  
    links: [],  
  };  
}