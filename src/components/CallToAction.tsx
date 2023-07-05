import { useQueryCustom } from '@/api';
import { CallToAction } from '@/types/single/call-to-action';
import Image from 'next/image';
import { Button } from './Button';
import { Container } from './Container';

export const CallToActionComponent = () => {
  const { data: callToActionQuery } =
    useQueryCustom<CallToAction>('/call-to-action', {
      populate: {
        background: {
          populate: '*',
        },
      },
    });
  return (
    <section
      id='get-started-today'
      className='relative overflow-hidden bg-primary-600 py-32'
    >
      <Image
        className='absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2'
        src={
          process.env.NEXT_PUBLIC_STRAPI_API_URL +
          (callToActionQuery?.data.attributes.background
            .data.attributes.url ?? '')
        }
        alt={
          callToActionQuery?.data.attributes.background.data
            .attributes.alternativeText ?? ''
        }
        width={
          callToActionQuery?.data.attributes.background.data
            .attributes.width ?? 0
        }
        height={
          callToActionQuery?.data.attributes.background.data
            .attributes.height ?? 0
        }
        unoptimized
      />
      <Container className='relative'>
        <div className='mx-auto max-w-lg text-center'>
          <h2 className='font-display tracking-tight text-white'>
            {callToActionQuery?.data.attributes.title}
          </h2>
          <h4 className='mt-4 tracking-tight text-white'>
            {callToActionQuery?.data.attributes.description}
          </h4>
          <Button
            href='/register'
            color='white'
            className='mt-10'
          >
            {callToActionQuery?.data.attributes.buttonText}
          </Button>
        </div>
      </Container>
    </section>
  );
};
