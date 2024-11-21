import { CloseIcon, EmailIcon, FacebookIcon, InstagramIcon, LocationIcon, OpenIcon, PhoneIcon, YoutubeIcon } from '@/components/ui/icon';
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
            <img src="/images/home/logo.png" alt="" />
            <p className="text-[16px] text-secondery py-4 text-center">
              We take a bottom-line approach to each project. Our clients consistently see increased traffic, enhanced brand loyalty and new leads thanks to our work.
            </p>

            <div className="gap-20 w-full md:text-md lg:text-2xl">
              <p className="flex gap-2">
                <span className="mt-1">
                  <LocationIcon />
                </span>
                <span>
                  <a href=" https://www.google.com/maps/place/Blush+%26+Glow+Beauty+Bar/@43.6961831,-79.2929566,17z/data=!4m14!1m7!3m6!1s0x38d840a6f5aec37:0x1292455a177a54ce!2sBlush+%26+Glow+Beauty+Bar!8m2!3d43.6961831!4d-79.2929566!16s%2Fg%2F11s1sbcm3v!3m5!1s0x38d840a6f5aec37:0x1292455a177a54ce!8m2!3d43.6961831!4d-79.2929566!16s%2Fg%2F11s1sbcm3v?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D">
                    5 Massey Square, East York, ON M4C 5L6, Canada.
                  </a>
                </span>
              </p>
              <p className="flex gap-2 py-6">
                <span className="mt-1">
                  <PhoneIcon />
                </span>
                <a href="cellto">Call: +1 (647)-607-2276</a>
              </p>
              <p className="flex gap-2">
                <span className="mt-1">
                  <EmailIcon />
                </span>
                <a href="mailto:blushglowbar@gmail.com">blushglowbar@gmail.com</a>
              </p>

              <ul className="flex gap-10 pt-10">
                <li className="text-3xl hover:text-primary transition-all">
                  <a href="#">
                    <FacebookIcon />
                  </a>
                </li>
                <li className="text-3xl hover:text-primary transition-all">
                  <a href="#">
                    <InstagramIcon />
                  </a>
                </li>
                <li className="text-3xl hover:text-primary transition-all">
                  <a href="#">
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
        className={`focus:outline-none text-2xl ${isOpen ? 'text-white z-50' : 'text-tertiary hover:bg-primary p-2 w-10 h-10 rounded-full hover:text-white transition-all duration-500 ease-in-out transform hover:rotate-180'}`}
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
