import { ToggleMode } from '@/components/common/ToggleMode';
import { Newsletter1 } from '@/components/sections/marketing/newsletter/Newsletter1';
import { Newsletter2 } from '@/components/sections/marketing/newsletter/Newsletter2';
import { Newsletter4 } from '@/components/sections/marketing/newsletter/Newsletter4';
import { Newsletter5 } from '@/components/sections/marketing/newsletter/Newsletter5';
import { Newsletter6 } from '@/components/sections/marketing/newsletter/Newsletter6';
import { Newsletter7 } from '@/components/sections/marketing/newsletter/Newsletter7';
import { Button } from '@material-tailwind/react';

export default function Newsletter() {
  return (
    <>
      <ToggleMode />
      <Button>XIn chao</Button>
      Side-by-side with details
      <Newsletter1 />
      Simple side-by-side
      <Newsletter2 />
      Simple side-by-side on brand
      <Newsletter4 />
      Simple stacked
      <Newsletter5 />
      Centered card
      <Newsletter6 />
      Side-by-side on card
      <Newsletter7 />
    </>
  );
}
