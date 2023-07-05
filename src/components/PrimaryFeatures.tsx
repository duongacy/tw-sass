import { useQueryCustom } from '@/api';
import backgroundImage from '@/images/background-features.jpg';
import { PrimaryFeatures } from '@/types/single/primary-features';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Container } from './Container';

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] =
    useState('horizontal');
  useEffect(() => {
    let lgMediaQuery = window.matchMedia(
      '(min-width: 1024px)'
    );
    function onMediaQueryChange({ matches }: any) {
      setTabOrientation(
        matches ? 'vertical' : 'horizontal'
      );
    }
    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener(
      'change',
      onMediaQueryChange
    );
    return () => {
      lgMediaQuery.removeEventListener(
        'change',
        onMediaQueryChange
      );
    };
  }, []);

  const { data:primaryFeatures }=  useQueryCustom<PrimaryFeatures>('/primary-features', {
    populate: {
      features:{
        populate: { image: { populate: '*' } },
      }
    },
  });
  
  return (
    <section
      id='features'
      aria-label='Features for running your books'
      className='relative overflow-hidden bg-primary-600 pb-28 pt-20 sm:py-32'
    >
      <Image
        className='absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]'
        src={backgroundImage}
        alt=''
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className='relative'>
        <div className='max-w-2xl md:mx-auto md:text-center xl:max-w-none'>
          <h2 className='font-display tracking-tight text-white md:text-5xl'>
            {primaryFeatures?.data.attributes.title}
          </h2>
          <h4 className='mt-6 tracking-tight text-primary-100'>
           {primaryFeatures?.data.attributes.description}
          </h4>
        </div>
        <Tab.Group
          as='div'
          className='mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0'
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className='-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5'>
                <Tab.List className='relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal'>
                  {primaryFeatures?.data.attributes.features?.data?.map(
                    (feature, featureIndex) => (
                      <div
                        key={feature.attributes.title}
                        className={clsx(
                          'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                          selectedIndex === featureIndex
                            ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                            : 'hover:bg-white/10 lg:hover:bg-white/5'
                        )}
                      >
                        <h4>
                          <Tab
                            className={clsx(
                              'font-display [&:not(:focus-visible)]:focus:outline-none',
                              selectedIndex === featureIndex
                                ? 'text-primary-600 lg:text-white'
                                : 'text-primary-100 hover:text-white lg:text-white'
                            )}
                          >
                            <span className='absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none' />
                            {feature.attributes.title}
                          </Tab>
                        </h4>
                        <small
                          className={clsx(
                            'mt-2 hidden lg:block',
                            selectedIndex === featureIndex
                              ? 'text-white'
                              : 'text-primary-100 group-hover:text-white'
                          )}
                        >
                          {feature.attributes.description}
                        </small>
                      </div>
                    )
                  )}
                </Tab.List>
              </div>
              <Tab.Panels className='lg:col-span-7'>
                {primaryFeatures?.data.attributes.features.data?.map((feature) => (
                  <Tab.Panel
                    key={feature.attributes.title}
                    unmount={false}
                  >
                    <div className='relative sm:px-6 lg:hidden'>
                      <div className='absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl' />
                      <p className='relative mx-auto max-w-2xl text-white sm:text-center'>
                        {feature.attributes.description}
                      </p>
                    </div>
                    <div className='mt-10 w-[45rem] overflow-hidden rounded-xl bg-secondary-50 shadow-xl shadow-primary-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]'>
                      <Image
                        src={
                          process.env
                            .NEXT_PUBLIC_STRAPI_API_URL +
                          feature.attributes.image.data
                            .attributes.url
                        }
                        width={
                          feature.attributes.image.data
                            .attributes.width
                        }
                        height={
                          feature.attributes.image.data
                            .attributes.height
                        }
                        alt=''
                        priority
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  );
}
