import { FeatureSections01 } from '@/components/feature-sections/FeatureSections01';
import { FeatureSections02 } from '@/components/feature-sections/FeatureSections02';
import { FeatureSections03 } from '@/components/feature-sections/FeatureSections03';
import { FeatureSections04 } from '@/components/feature-sections/FeatureSections04';
import { FeatureSections05 } from '@/components/feature-sections/FeatureSections05';
import { FeatureSections06 } from '@/components/feature-sections/FeatureSections06';
import { FeatureSections07 } from '@/components/feature-sections/FeatureSections07';
import { FeatureSections08 } from '@/components/feature-sections/FeatureSections08';
import { FeatureSections09 } from '@/components/feature-sections/FeatureSections09';
import { FeatureSections10 } from '@/components/feature-sections/FeatureSections10';
import { FeatureSections11 } from '@/components/feature-sections/FeatureSections11';
import { FeatureSections12 } from '@/components/feature-sections/FeatureSections12';
import { FeatureSections13 } from '@/components/feature-sections/FeatureSections13';
import { FeatureSections14 } from '@/components/feature-sections/FeatureSections14';
import { FeatureSections16 } from '@/components/feature-sections/FeatureSections16';
import { FeatureSections17 } from '@/components/feature-sections/FeatureSections17';
import { FeatureSections18 } from '@/components/feature-sections/FeatureSections18';
import { FeatureSectionsProps } from '@/components/feature-sections/types';
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';

const featureSectionsPropsLightImage: FeatureSectionsProps =
  {
    title: 'Deploy faster',
    subTitle: 'Everything you need to deploy your app',
    description:
      'Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.',
    backgroundImage: {
      src: 'https://tailwindui.com/img/component-images/project-app-screenshot.png',
    },
    features: [
      {
        name: 'Push to deploy.',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CloudArrowUpIcon,
      },
      {
        name: 'SSL certificates.',
        description:
          'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: LockClosedIcon,
      },
      {
        name: 'Database backups.',
        description:
          'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ServerIcon,
      },
    ],
  };
const featureSectionsPropsDarkImage = {
  ...featureSectionsPropsLightImage,
  backgroundImage: {
    src: 'https://tailwindui.com/img/component-images/dark-project-app-screenshot.png',
  },
};

const Component = () => {
  return (
    <>
      With product screenshot
      <FeatureSections01
        {...featureSectionsPropsDarkImage}
      />
      Centered 2x2 grid
      <FeatureSections02
        {...featureSectionsPropsLightImage}
      />
      With large screenshot on dark
      <FeatureSections03
        {...featureSectionsPropsDarkImage}
      />
      With large screenshot
      <FeatureSections04
        {...featureSectionsPropsLightImage}
      />
      Simple three column with small icons on dark
      <FeatureSections05
        {...featureSectionsPropsLightImage}
      />
      Simple three column with small icons
      <FeatureSections06
        {...featureSectionsPropsLightImage}
      />
      With product screenshot on left
      <FeatureSections07
        {...featureSectionsPropsDarkImage}
      />
      With product screenshot on dark
      <FeatureSections08
        {...featureSectionsPropsDarkImage}
      />
      Simple three column with large icons on dark
      <FeatureSections09
        {...featureSectionsPropsLightImage}
      />
      Simple three column with large icons
      <FeatureSections10
        {...featureSectionsPropsLightImage}
      />
      Contained in panel
      <FeatureSections11
        {...featureSectionsPropsDarkImage}
      />
      With product screenshot panel
      <FeatureSections12
        {...featureSectionsPropsLightImage}
      />
      With testimonial
      <FeatureSections13
        {...featureSectionsPropsDarkImage}
      />
      Offset 2x2 grid
      <FeatureSections14
        {...featureSectionsPropsLightImage}
      />
      {/* With code example panel
      <FeatureSections15
        {...featureSectionsPropsDarkImage}
      /> */}
      Offset with feature list
      <FeatureSections16
        {...featureSectionsPropsLightImage}
      />
      Simple
      <FeatureSections17
        {...featureSectionsPropsLightImage}
      />
      Simple two-column with small icons on dark
      <FeatureSections18
        {...featureSectionsPropsLightImage}
      />
    </>
  );
};

export default Component;
