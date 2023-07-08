import { PricingSections01 } from '@/components/pricing-sections/PricingSections01';
import { PricingSections02 } from '@/components/pricing-sections/PricingSections02';
import { PricingSections03 } from '@/components/pricing-sections/PricingSections03';
import { PricingSections04 } from '@/components/pricing-sections/PricingSections04';
import { PricingSections05 } from '@/components/pricing-sections/PricingSections05';
import { PricingSections06 } from '@/components/pricing-sections/PricingSections06';
import { PricingSections07 } from '@/components/pricing-sections/PricingSections07';
import { PricingSections08 } from '@/components/pricing-sections/PricingSections08';
import { PricingSections09 } from '@/components/pricing-sections/PricingSections09';
import { PricingSections10 } from '@/components/pricing-sections/PricingSections10';
import { PricingSections11 } from '@/components/pricing-sections/PricingSections11';
import { PricingSections12 } from '@/components/pricing-sections/PricingSections12';
import { PricingSections13 } from '@/components/pricing-sections/PricingSections13';
import {
  FrequencyProps,
  //   FrequencyProps,
  PricingSectionProps,
  SectionProps,
  TierProps,
} from '@/components/pricing-sections/types';
import * as React from 'react';

// const frequencies: FrequencyProps[] = [
//   {
//     value: 'monthly',
//     label: 'Monthly',
//     priceSuffix: '/month',
//   },
//   {
//     value: 'annually',
//     label: 'Annually',
//     priceSuffix: '/year',
//   },
// ];
const tiers: TierProps[] = [
  {
    name: 'Freelancer',
    id: 'tier-freelancer',
    href: '#',
    price: { monthly: '$24', anually: '$124' },
    description:
      'The essentials to provide your best work for clients.',
    features: [
      '5 products',
      'Up to 1,000 subscribers',
      'Basic analytics',
      '48-hour support response time',
    ],
    featured: false,
    mostPopular: false,
    cto: 'Buy plan',
    slogan: 'Pay once, own it forever',
  },
  {
    name: 'Startup',
    id: 'tier-startup',
    href: '#',
    price: { monthly: '$32', anually: '$321' },
    description:
      'A plan that scales with your rapidly growing business.',
    features: [
      '25 products',
      'Up to 10,000 subscribers',
      'Advanced analytics',
      '24-hour support response time',
      'Marketing automations',
    ],
    featured: false,
    mostPopular: true,
    cto: 'Buy plan',
    slogan: `Invoices and receipts available for easy <br />company reimbursement`,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    price: { monthly: '$48', anually: '$481' },
    description:
      'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations',
    ],
    featured: true,
    mostPopular: false,
    cto: 'Buy plan',
    slogan: `Invoices and receipts available for easy <br />company reimbursement`,
  },
];

const tiers2Item: TierProps[] = [
  {
    name: 'Freelancer',
    id: 'tier-freelancer',
    href: '#',
    price: { monthly: '$24', anually: '$124' },
    description:
      'The essentials to provide your best work for clients.',
    features: [
      '5 products',
      'Up to 1,000 subscribers',
      'Basic analytics',
      '48-hour support response time',
    ],
    featured: true,
    mostPopular: false,
    cto: 'Buy plan',
    slogan: 'Pay once, own it forever',
  },
  {
    name: 'Startup',
    id: 'tier-startup',
    href: '#',
    price: { monthly: '$32', anually: '$321' },
    description:
      'A plan that scales with your rapidly growing business.',
    features: [
      '25 products',
      'Up to 10,000 subscribers',
      // 'Advanced analytics',
      // '24-hour support response time',
      // 'Marketing automations',
    ],
    featured: false,
    mostPopular: true,
    cto: 'Buy plan',
    slogan: `Invoices and receipts available for easy <br />company reimbursement`,
  },
];

const tiersComparison: TierProps[] = [
  {
    name: 'Basic',
    id: 'tier-basic',
    href: '#',
    price: { monthly: '$24', anually: '$124' },
    description:
      'Quis suspendisse ut fermentum neque vivamus non tellus.',
    mostPopular: false,
    features: [],
  },
  {
    name: 'Essential',
    id: 'tier-essential',
    href: '#',
    price: { monthly: '$24', anually: '$124' },
    description:
      'Quis eleifend a tincidunt pellentesque. A tempor in sed.',
    mostPopular: true,
    features: [],
  },
  {
    name: 'Premium',
    id: 'tier-premium',
    href: '#',
    price: { monthly: '$24', anually: '$124' },
    description:
      'Orci volutpat ut sed sed neque, dui eget. Quis tristique non.',
    mostPopular: false,
    features: [],
  },
];

const tiers2: TierProps[] = [
  {
    name: 'Starter',
    id: 'tier-starter',
    href: '#',
    featured: false,
    description:
      'All your essential business finances, taken care of.',
    price: { monthly: '$15', anually: '$144' },
    features: [
      'Basic invoicing',
      'Easy to use accounting',
      'Mutli-accounts',
    ],
  },
  {
    name: 'Scale',
    id: 'tier-scale',
    href: '#',
    featured: true,
    description:
      'The best financial services for your thriving business.',
    price: { monthly: '$60', anually: '$576' },
    features: [
      'Advanced invoicing',
      'Easy to use accounting',
      'Mutli-accounts',
      'Tax planning toolkit',
      'VAT & VATMOSS filing',
      'Free bank transfers',
    ],
  },
  {
    name: 'Growth',
    id: 'tier-growth',
    href: '#',
    featured: false,
    description:
      'Convenient features to take your business to the next level.',
    price: { monthly: '$30', anually: '$288' },
    features: [
      'Basic invoicing',
      'Easy to use accounting',
      'Mutli-accounts',
      'Tax planning toolkit',
    ],
  },
];
const sections2: SectionProps[] = [
  {
    name: 'Catered for business',
    features: [
      {
        name: 'Tax Savings',
        tiers: { Starter: true, Scale: true, Growth: true },
      },
      {
        name: 'Easy to use accounting',
        tiers: { Starter: true, Scale: true, Growth: true },
      },
      {
        name: 'Multi-accounts',
        tiers: {
          Starter: '3 accounts',
          Scale: 'Unlimited accounts',
          Growth: '7 accounts',
        },
      },
      {
        name: 'Invoicing',
        tiers: {
          Starter: '3 invoices',
          Scale: 'Unlimited invoices',
          Growth: '10 invoices',
        },
      },
      {
        name: 'Exclusive offers',
        tiers: {
          Starter: false,
          Scale: true,
          Growth: true,
        },
      },
      {
        name: '6 months free advisor',
        tiers: {
          Starter: false,
          Scale: true,
          Growth: true,
        },
      },
      {
        name: 'Mobile and web access',
        tiers: {
          Starter: false,
          Scale: true,
          Growth: false,
        },
      },
    ],
  },
  {
    name: 'Other perks',
    features: [
      {
        name: '24/7 customer support',
        tiers: { Starter: true, Scale: true, Growth: true },
      },
      {
        name: 'Instant notifications',
        tiers: { Starter: true, Scale: true, Growth: true },
      },
      {
        name: 'Budgeting tools',
        tiers: { Starter: true, Scale: true, Growth: true },
      },
      {
        name: 'Digital receipts',
        tiers: { Starter: true, Scale: true, Growth: true },
      },
      {
        name: 'Pots to separate money',
        tiers: {
          Starter: false,
          Scale: true,
          Growth: true,
        },
      },
      {
        name: 'Free bank transfers',
        tiers: {
          Starter: false,
          Scale: true,
          Growth: false,
        },
      },
      {
        name: 'Business debit card',
        tiers: {
          Starter: false,
          Scale: true,
          Growth: false,
        },
      },
    ],
  },
];

const sections: SectionProps[] = [
  {
    name: 'Features',
    features: [
      {
        name: 'Integrations',
        tiers: {
          Basic: true,
          Essential: true,
          Premium: true,
        },
      },
      {
        name: 'Shared links',
        tiers: {
          Basic: true,
          Essential: true,
          Premium: true,
        },
      },
      {
        name: 'Importing and exporting',
        tiers: { Essential: true, Premium: true },
      },
      {
        name: 'Team members',
        tiers: {
          Essential: 'Up to 20 users',
          Premium: 'Up to 50 users',
        },
      },
    ],
  },
  {
    name: 'Reporting',
    features: [
      {
        name: 'Advanced analytics',
        tiers: {
          Basic: true,
          Essential: true,
          Premium: true,
        },
      },
      {
        name: 'Basic reports',
        tiers: { Essential: true, Premium: true },
      },
      {
        name: 'Professional reports',
        tiers: { Premium: true },
      },
      {
        name: 'Custom report builder',
        tiers: { Premium: true },
      },
    ],
  },
  {
    name: 'Support',
    features: [
      {
        name: '24/7 online support',
        tiers: {
          Basic: true,
          Essential: true,
          Premium: true,
        },
      },
      {
        name: 'Quarterly product workshops',
        tiers: { Essential: true, Premium: true },
      },
      {
        name: 'Priority phone support',
        tiers: { Essential: true, Premium: true },
      },
      {
        name: '1:1 onboarding tour',
        tiers: { Premium: true },
      },
    ],
  },
];

const frequencies: FrequencyProps[] = [
  {
    value: 'monthly',
    label: 'Monthly',
    priceSuffix: '/month',
  },
  {
    value: 'anually',
    label: 'Annually',
    priceSuffix: '/year',
  },
];

const pricingSectionProps: PricingSectionProps = {
  subTitle: 'Pricing',
  title: 'Simple no-tricks pricing',
  frequencies: frequencies,
  description:
    'Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.',
  tiers: tiers,
};

const pricingSectionProps2 = {
  ...pricingSectionProps,
  title: 'Pricing plans for teams of all sizes',
};
const pricingSectionProps3 = {
  ...pricingSectionProps,
  title: 'Choose the right plan for you',
};
const pricingSectionProps4 = {
  ...pricingSectionProps,
  title: 'Pricing plans for teams of all sizes',
};
const pricingSectionProps7 = {
  ...pricingSectionProps,
  title: 'Pricing plans for teams of all sizes',
  tiers: [
    ...pricingSectionProps.tiers,
    {
      name: 'Enterprise',
      id: 'tier-enterprise',
      href: '#',
      price: { monthly: '$90', anually: '$900' },
      description:
        'Dedicated support and infrastructure for your company.',
      features: [
        'Unlimited products',
        'Unlimited subscribers',
        'Advanced analytics',
        '1-hour, dedicated support response time',
        'Marketing automations',
      ],
      featured: true,
      mostPopular: false,
      cto: 'Buy plan',
      slogan: `Invoices and receipts available for easy <br />company reimbursement`,
    },
  ],
};

const pricingSectionProps8 = {
  ...pricingSectionProps,
  title: 'The right price for you, whoever you are',
  tiers: tiers2Item,
};
const pricingSectionProps9 = {
  ...pricingSectionProps,
  title:
    'The right price for you, whoever you arePlans for teams of all sizes',
  tiers: tiersComparison,
  sections: sections,
};
const pricingSectionProps11 = {
  ...pricingSectionProps,
  title: 'Three tiers with feature comparison',
  tiers: tiers2,
  sections: sections2,
};
const pricingSectionProps12 = {
  ...pricingSectionProps,
  title: 'The right price for you, whoever you are',
  tiers: tiers2Item,
};

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

const PricingComponent: React.FunctionComponent = () => {
  return (
    <>
      Single price with details
      <PricingSections01 {...pricingSectionProps} />
      Three tiers
      <PricingSections02 {...pricingSectionProps2} />
      Three tiers with dividers
      <PricingSections03 {...pricingSectionProps3} />
      Three tiers with emphasized tier
      <PricingSections04 {...pricingSectionProps4} />
      Three tiers with toggle
      <PricingSections05 {...pricingSectionProps4} />
      Three tiers with toggle on dark
      <PricingSections06 {...pricingSectionProps4} />
      Four tiers with toggle
      <PricingSections07 {...pricingSectionProps7} />
      Two tiers with extra tier
      <PricingSections08 {...pricingSectionProps8} />
      With comparison table
      <PricingSections09 {...pricingSectionProps9} />
      With comparison table on dark
      <PricingSections10 {...pricingSectionProps9} />
      Three tiers with feature comparison
      <PricingSections11 {...pricingSectionProps11} />
      Two tiers
      <PricingSections12 {...pricingSectionProps12} />
      Two tiers with emphasized tier
      <PricingSections13 {...pricingSectionProps12} />
    </>
  );
};

export default PricingComponent;
