import { ImageContext } from '@/contexts/VirtualContext';
import { useContext } from 'react';

export function useImage() {
  return useContext(ImageContext);
}
