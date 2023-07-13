import { DivProps } from '@/components/types';
import { SidebarSection } from '@/sections/SidebarSection';
import * as React from 'react';

const MainTemplate: React.FC<DivProps> = ({ children }) => {
  return (
    <div className='grid min-h-screen grid-cols-[300px_1fr]'>
      <SidebarSection />
      <div>{children}</div>
    </div>
  );
};

export default MainTemplate;
