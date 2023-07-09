import { useTheme } from 'next-themes';
import * as React from 'react';
import NoSsr from './NoSsr';

export const ToggleMode = () => {
  const { theme, setTheme } = useTheme();
  return (
    <NoSsr>
      <button
        className='fixed bottom-0 right-0 z-[1000] my-5 ml-auto block w-fit rounded-md bg-primary-600 px-4 py-2 text-white'
        onClick={() =>
          setTheme(theme !== 'dark' ? 'dark' : 'light')
        }
      >
        Switch to
        {theme === 'dark' ? ' light' : ' dark'} mode.
      </button>
    </NoSsr>
  );
};
