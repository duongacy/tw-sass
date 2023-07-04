import { JSXElementConstructor } from 'react';
import { DivProps, ImgProps } from '../types';

export type FeatureItem = {
  name: string;
  description: string;
  icon: JSXElementConstructor<any>;
  href?: string;
};

export interface FeatureSectionsProps extends DivProps {
  title?: string;
  subTitle?: string;
  description?: string;
  features: FeatureItem[];
  backgroundImage?: ImgProps;
}
