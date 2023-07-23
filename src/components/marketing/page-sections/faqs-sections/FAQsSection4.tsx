import { FC } from 'react';
import { FAQsSectionProps } from './types';

const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];
export const FAQsSection4: FC<FAQsSectionProps> = ({
  className,
  ...props
}) => {
  return (
    <div className={`bg-white ${className}`} {...props}>
      <div className='mx-auto max-w-7xl divide-y divide-neutral-900/10 px-6 py-24 sm:py-32 lg:px-8 lg:py-40'>
        <h2 className='text-2xl font-bold leading-10 tracking-tight text-neutral-900'>
          Frequently asked questions
        </h2>
        <dl className='mt-10 space-y-8 divide-y divide-neutral-900/10'>
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className='pt-8 lg:grid lg:grid-cols-12 lg:gap-8'
            >
              <dt className='text-base font-semibold leading-7 text-neutral-900 lg:col-span-5'>
                {faq.question}
              </dt>
              <dd className='mt-4 lg:col-span-7 lg:mt-0'>
                <p className='text-base leading-7 text-neutral-600'>
                  {faq.answer}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};
