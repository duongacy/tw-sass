import { useTheme } from 'next-themes';
import * as React from 'react';
import NoSsr from './NoSsr';

export const ToggleMode = () => {
  const { systemTheme } = useTheme();
  const setTheme = (theme: string) => {
    document
      .querySelector('html')
      ?.setAttribute('data-theme', theme);
  };
  React.useEffect(() => {
    setTheme(systemTheme === 'dark' ? 'dark' : 'light');
  }, [systemTheme]);

  return (
    <NoSsr>
      <button
        className='fixed bottom-0 right-0 z-[1000] my-5 ml-auto block w-fit rounded-md bg-primary-600 px-4 py-2 text-white'
        onClick={() => setTheme('dark')}
      >
        Switch to
      </button>
    </NoSsr>
  );
};
