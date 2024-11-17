import Link from 'next/link';
import React from 'react'; 

const Custom404 = () => {
  return (
    <div className='flex flex-col h-[100dvh] w-full justify-center items-center' >
      <h1 className='text-4xl text-primary font-bold'>404 - Page Not Found</h1>
      <p className='text-2xl text-tertiary py-4'>
        Oops! The page you are looking for does not exist.
      </p>
      <Link href="/" className='text-3xl  text-blue-500'>
        Go back to the homepage
      </Link>
    </div>
  );
};

export default Custom404;
