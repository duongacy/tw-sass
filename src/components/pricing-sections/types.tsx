import { DivProps } from '../types';

export type FrequencyProps = {
  value: string;
  label: string;
  priceSuffix: string;
};

export type PriceProps = {
  monthly: string;
  anually: string;
};

export type TierProps = {
  name: string;
  id: string;
  href: string;
  price: PriceProps;
  description: string;
  features: string[];
  featured?: boolean;
  mostPopular?: boolean;
  slogan?: string;
  cto?: string;
};

export type SectionFeatureProps = {
  name: string;
  tiers: Record<string, boolean | string>;
};

export type SectionProps = {
  name: string;
  features: SectionFeatureProps[];
};

export interface PricingSectionProps extends DivProps {
  subTitle: string;
  title: string;
  description: string;
  frequencies: FrequencyProps[];
  tiers: TierProps[];
  sections?: SectionProps[];
}
