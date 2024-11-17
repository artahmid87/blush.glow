import React, { useEffect, useRef } from 'react';
import Container from '../../ui/Container';
import Form from './form';
import Schedule from './Schedule';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Appointment = () => {

  const formRef = useRef(null);
  const scheduleRef = useRef(null);

  useEffect(() => {
    // Form animation
    gsap.fromTo(
      formRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Schedule animation
    gsap.fromTo(
      scheduleRef.current,
      { opacity: .9, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: scheduleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          scrub:true,
        },
      }
    );
  }, []);

  return (
    <div
      id='appointment'
    
      className='py-20 overflow-hidden bg-white'
      
    >


      <Container>
        <div className='flex flex-col lg:flex-row justify-between gap-4 items-center mt-5 p-1 md:p-6 border-8 border-gray-100'
          style={{
            backgroundImage: 'url(images/home/13.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
          }}
        >
          {/* Form Section */}
          <div ref={formRef} className='bg-[#fff6f4] p-2 md:p-8 w-full lg:w-[58%] border-8 border-white'>
            <h1 className='text-3xl lg:text-4xl text-tertiary font-secondery py-6'>
              Make Appointment
            </h1>
            <p className='text-secondery mb-6'>
              Submit your details & You will get a confirmation Mail.
            </p>
            <Form />
          </div>

          {/* Schedule Section */}
          <div ref={scheduleRef} className ="w-full lg:w-[48%] ">
            <Schedule />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Appointment;
