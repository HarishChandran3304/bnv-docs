import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';  
import { BetterEnvIcon } from '@/lib/icon';  
  
export function baseOptions(): BaseLayoutProps {  
  return {  
    nav: {  
      title: (  
        <>  
          <BetterEnvIcon className="size-5" />  
          better-env  
        </>  
      ),  
    },  
    links: [],  
  };  
}