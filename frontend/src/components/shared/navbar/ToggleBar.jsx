import { CloseIcon, EmailIcon, FacebookIcon, InstagramIcon, LocationIcon, OpenIcon, PhoneIcon, RoadSign, YoutubeIcon } from '@/components/ui/icon';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function ToggleBar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      gsap.to(sidebarRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power3.out',
      });
    } else {
      gsap.to(sidebarRef.current, {
        x: -1000,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.in',
      });
    }
  }, [isOpen]);

  return (
    <>
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className="fixed invisible md:visible top-0 left-[-30px] h-full w-[40%] bg-white text-tertiary"
        style={{ zIndex: '9999' }}
      >
        <nav className="py-4 px-8">
          <div>
            <img className='py-10' src="/images/home/logo.png" alt="" />
            <p className="text-[18px] text-secondery py-4 text-center">
              We take a bottom-line approach to each project. Our clients consistently see increased traffic, enhanced brand loyalty and new leads thanks to our work.
            </p>

            <div className=" mt-10 w-full md:text-md lg:text-2xl">
            
              <p className="flex gap-4 ">
                <span className="  xl:text-[80px] text-[60px] font-thin">
                <PhoneIcon />
                </span>
                <span className='flex flex-col'>
                <span className='xl:text-[35px] text-[25px] pb-2 xl:mt-2'>Call Us</span>
                <a className='xl:text-[22px] text-[20px]' href="tel:+1-647-607-2276">+1 (647)-607-2276</a>

                </span>
              </p>

              <p className="flex gap-4 py-10 ">
                <span className="  xl:text-[80px] text-[60px] font-thin">
                <EmailIcon />
                </span>
                <span className='flex flex-col'>
                <span className='xl:text-[35px] text-[25px] pb-2 xl:mt-2'>Write Us</span>
                <a className='xl:text-[22px] text-[20px]' href="mailto:blushglowbar@gmail.com">blushglowbar@gmail.com</a>

                </span>
              </p>

              <p className="flex gap-4 ">
                <span className="  xl:text-[80px] text-[60px] font-thin">
                <RoadSign />
                </span>
                <span className='flex flex-col'>
                <span className='xl:text-[35px] text-[25px] pb-2 xl:mt-2'>Address</span>
                <a className='xl:text-[22px] text-[20px]' href="https://www.google.com/maps/place/Blush+%26+Glow+Beauty+Bar/@43.6961831,-79.2929566,17z/data=!4m14!1m7!3m6!1s0x38d840a6f5aec37:0x1292455a177a54ce!2sBlush+%26+Glow+Beauty+Bar!8m2!3d43.6961831!4d-79.2929566!16s%2Fg%2F11s1sbcm3v!3m5!1s0x38d840a6f5aec37:0x1292455a177a54ce!8m2!3d43.6961831!4d-79.2929566!16s%2Fg%2F11s1sbcm3v?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"> 858 Danforth Rd, Scarborough, ON M1K 1H5, Canada.</a>

                </span>
              </p>
 
            
              <ul className="flex gap-10 pt-6 lg:ml-24 ml-10">
                <li className="text-5xl hover:text-primary transition-all">
                  <a href="https://www.facebook.com/Blushglowbeautybar">
                    <FacebookIcon />
                  </a>
                </li>
                <li className="text-5xl hover:text-primary transition-all">
                  <a href="#">
                    <InstagramIcon />
                  </a>
                </li>
                <li className="text-5xl hover:text-primary transition-all">
                  <a href="https://www.youtube.com/@BlushGlowBeautyBar">
                    <YoutubeIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        className={`focus:outline-none text-2xl ${isOpen ? 'text-white z-50' : 'text-white hover:bg-primary p-2 w-10 h-10 rounded-full hover:text-white transition-all duration-500 ease-in-out transform hover:rotate-180'}`}
        type="button"
      >
        {isOpen ? <CloseIcon /> : <OpenIcon />}
      </button>


      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
}
