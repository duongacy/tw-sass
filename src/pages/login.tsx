import { AuthLayout } from '@/components/AuthLayout';
import { Button } from '@/components/Button';
import { TextField } from '@/components/Fields';
import { Logo } from '@/components/Logo';
import Head from 'next/head';
import Link from 'next/link';
export default function Login() {
  return (
    <>
      <Head>
        <title>Sign In - TaxPal</title>
      </Head>
      <AuthLayout>
        <div className='grid gap-16'>
          <Link href='/' aria-label='Home'>
            <Logo className='h-10 w-auto' />
          </Link>
          <div className='grid gap-2'>
            <h4 className='font-semibold text-neutral-900'>
              Sign in to your account
            </h4>
            <small className='text-neutral-700'>
              Don’t have an account?{' '}
              <Link
                href='/register'
                className='font-medium text-primary-600 hover:underline'
              >
                Sign up
              </Link>{' '}
              for a free trial.
            </small>
          </div>
        </div>
        <form action='#' className='mt-10 grid gap-y-8'>
          <TextField
            label='Email address'
            id='email'
            name='email'
            type='email'
            autoComplete='email'
            required
          />
          <TextField
            label='Password'
            id='password'
            name='password'
            type='password'
            autoComplete='current-password'
            required
          />
          <div>
            <Button
              type='submit'
              variant='solid'
              color='primary'
              className='w-full'
              href={undefined}
            >
              <span>
                Sign in{' '}
                <span aria-hidden='true'>&rarr;</span>
              </span>
            </Button>
          </div>
        </form>
      </AuthLayout>
    </>
  );
}
