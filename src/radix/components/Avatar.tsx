import * as React from 'react';
import * as Avatar from '@radix-ui/react-avatar';

type RadixAvatarProps = {
  falbackText?: string;
} & Avatar.AvatarImageProps &
  React.RefAttributes<HTMLImageElement>;

export const RadixAvatar = React.forwardRef<
  HTMLSpanElement,
  RadixAvatarProps
>(
  (
    {
      className = '',
      alt,
      src,
      falbackText = '',
      ...props
    },
    ref
  ) => {
    return (
      <Avatar.Root
        className={
          'flex h-11 w-11 select-none items-center justify-center overflow-hidden rounded-full' +
          className
        }
        {...props}
        ref={ref}
      >
        <Avatar.Image
          className='h-full w-full rounded-[inherit] object-cover'
          src={src}
          alt={alt}
        />
        <Avatar.Fallback
          className='leading-1 flex h-full w-full items-center justify-center font-medium'
          delayMs={600}
        >
          {falbackText}
        </Avatar.Fallback>
      </Avatar.Root>
    );
  }
);
