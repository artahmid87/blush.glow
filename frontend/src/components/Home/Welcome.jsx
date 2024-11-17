import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; // Import ScrollTrigger
import Container from "../ui/Container";
import HeadingComponent from "../ui/reusableComponent/HeadingComponent";

const Welcome = () => {
  const sectionRefs = useRef([]); // Create a ref array for sections

  // This is Headline Data pass with HaedingComponent as for create Reusable component 
  const headingData = [
    {
      headline: "Welcome",
      title1: "PROFESSIONAL",
      title2: "TREATMENT",
      description: "At Blush & Glow Beauty Bar, we believe that beauty is personal, and your transformation should be nothing short of extraordinary. Our professional makeover treatments are designed to bring out your best features, boost your confidence, and leave you feeling empowered."
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    sectionRefs.current.forEach((sectionRef, index) => {
      gsap.from(sectionRef, {
        x: -100, // Start position (off the screen)
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: sectionRef,
          start: 'top center', // Start animation when the top of the element is 80% from the top of the viewport
          toggleActions: 'play none none reverse', // Play animation on scroll down, reverse on scroll up
         // Animation only happens once when it comes into view
        },
      });
    });
  }, []);

  return (
    <div className="py-20" style={{ zIndex: '100' }}>
      <Container>
        {/* -----Welcome Heading----- */}
        <HeadingComponent headingData={headingData} />
        
        {/* -----Welcome Container----- */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Section for Customized Makeovers */}
          <div 
            ref={el => sectionRefs.current[0] = el} // Attach ref for animation
            style={{
              backgroundImage: "url(images/home/welcomeImg.jpg)",
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: '1px 1px 10px #878787'
            }}
            className="w-full h-[250px] flex flex-col items-start py-6 px-2"
          >
            <h1 className="text-tertiary text-3xl lg:text-4xl font-medium font-secondery ml-10">Customized Makeovers</h1>
            <p className="text-gray-600 text-[12px] xl:text-lg ml-10 pt-6">A good Whether it’s for a special event, a new look, or a personal refresh, our expert stylists and beauty professionals will work with you to create a makeover that reflects your unique style and personality.</p>
          </div>

          {/* Section for Skilled Professionals */}
          <div 
            ref={el => sectionRefs.current[1] = el} // Attach ref for animation
            style={{
              backgroundImage: "url(images/home/welcomeImg.jpg)",
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: '1px 1px 10px #878787'
            }}
            className="w-full h-[250px] flex flex-col items-start py-6 px-2"
          >
            <h1 className="text-tertiary text-3xl lg:text-4xl font-medium font-secondery ml-10">Skilled Professionals</h1>
            <p className="text-gray-600 text-[16px] xl:text-lg ml-10 pt-6 text-justify">A Professional team of highly trained makeup artists, hairstylists, and skin specialists are passionate about making you look and feel your best.</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Welcome;
