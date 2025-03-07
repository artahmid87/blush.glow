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

  const formReference = useRef(null);
  const scheduleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      formReference.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: formReference.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

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
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
       id='Appointment'
      className='py-10 overflow-hidden bg-white'
    >
      <Container >
        <div
          className="flex flex-col lg:flex-row justify-between gap-4 mt-5 p-1 md:p-6 border-8 border-gray-100 relative"
          style={{
            position: 'relative',
          }}
        >

          <div
            style={{
              backgroundImage: 'url(images/home/1.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(6px)',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 0,
            }}
          ></div>


          <div
            className="flex flex-col lg:flex-row justify-between gap-4 relative w-full"
            style={{ zIndex: 1 }}
          >

            <div
              ref={formReference}
              className="bg-[#fff6f4] p-2 md:p-8 w-full lg:w-[58%] border-8 border-white"
            >
              <h2 className="text-3xl lg:text-4xl text-tertiary font-secondery py-6">
                Appointment
              </h2>
              <p className="text-secondery mb-6">
                Submit your details & You will get a confirmation Mail.
              </p>
              <Form />
            </div>


            <div ref={scheduleRef} className="w-full lg:w-[48%]">
              <Schedule />
            </div>
          </div>
        </div>

      </Container>
    </div>
  );
};

export default Appointment;
