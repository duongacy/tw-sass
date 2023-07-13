import { Sidebar1 } from '@/components/sections/navigation/sidebar/Sidebar1';
import { Sidebar2 } from '@/components/sections/navigation/sidebar/Sidebar2';
import { Sidebar3 } from '@/components/sections/navigation/sidebar/Sidebar3';
import { Sidebar4 } from '@/components/sections/navigation/sidebar/Sidebar4';
import { Sidebar5 } from '@/components/sections/navigation/sidebar/Sidebar5';
import * as React from 'react';

export default function Sidebar() {
  return (
    <div>
      Brand
      <Sidebar1 className='w-[400px]' />
      Dark
      <Sidebar2 className='w-[400px]'/>
      Light
      <Sidebar3 className='w-[400px]'/>
      With expandable sections
      <Sidebar4 className='w-[400px]'/>
      With secondary navigation
      <Sidebar5 className='w-[400px]'/>
    </div>
  );
}
