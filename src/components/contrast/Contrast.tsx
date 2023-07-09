/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { ElementType, FC, HTMLAttributes } from 'react';
import { contrastBg } from './configure/contrastBg';
import { contrastRing } from './configure/contrastRing';
import { contrastText } from './configure/contrastText';

interface ContrastProps
  extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
  text?: keyof typeof contrastText.default;
  textHover?: keyof typeof contrastText.hover;
  textActive?: keyof typeof contrastText.active;
  textFocus?: keyof typeof contrastText.focus;

  bg?: keyof typeof contrastBg.default;
  bgHover?: keyof typeof contrastBg.hover;
  bgActive?: keyof typeof contrastBg.active;
  bgFocus?: keyof typeof contrastBg.focus;

  ring?: keyof typeof contrastRing.default;
  ringHover?: keyof typeof contrastRing.hover;
  ringActive?: keyof typeof contrastRing.active;
  ringFocus?: keyof typeof contrastRing.default;
  href?: string;
}

export const Contrast: FC<ContrastProps> = ({
  as: Tag = 'div',
  text = 'none',
  textHover = 'none',
  textActive = 'none',
  textFocus = 'none',

  bg = 'none',
  bgHover = 'none',
  bgActive = 'none',
  bgFocus = 'none',

  ring = 'none',
  ringHover = 'none',
  ringActive = 'none',
  ringFocus = 'none',

  className = '',
  ...otherProps
}) => {
  return (
    <Tag
      className={`
      ${contrastText.default[text]}
      ${contrastText.hover[textHover]}
      ${contrastText.active[textActive]}
      ${contrastText.focus[textFocus]}

      ${contrastBg.default[bg]}
      ${contrastBg.hover[bgHover]}
      ${contrastBg.active[bgActive]}
      ${contrastBg.focus[bgFocus]}

      ${contrastRing.default[ring]}
      ${contrastRing.hover[ringHover]}
      ${contrastRing.active[ringActive]}
      ${contrastRing.focus[ringFocus]}

      ${className}`}
      {...otherProps}
    />
  );
};
