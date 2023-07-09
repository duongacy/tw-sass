import { ReactNode } from 'react';

export const withCondition = (
  element: ReactNode,
  condition: boolean
) => {
  return condition ? element : null;
};
