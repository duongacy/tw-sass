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
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];

export const FAQsSection9: FC<FAQsSectionProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={`bg-neutral-900 ${className}`}
      {...props}
    >
      {' '}
      <div className='mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8'>
        <h2 className='text-2xl font-bold leading-10 tracking-tight text-white'>
          Frequently asked questions
        </h2>
        <p className='mt-6 max-w-2xl text-base leading-7 text-neutral-300'>
          Have a different question and can’t find the
          answer you’re looking for? Reach out to our
          support team by{' '}
          <a
            href='#'
            className='font-semibold text-primary-400 hover:text-primary-300'
          >
            sending us an email
          </a>{' '}
          and we’ll get back to you as soon as we can.
        </p>
        <div className='mt-20'>
          <dl className='space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10'>
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className='text-base font-semibold leading-7 text-white'>
                  {faq.question}
                </dt>
                <dd className='mt-2 text-base leading-7 text-neutral-300'>
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};
