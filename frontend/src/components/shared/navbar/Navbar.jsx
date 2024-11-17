import Container from '@/components/ui/Container';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter
import ToggleBar from './ToggleBar';
import { CloseIcon, EmailIcon, FacebookIcon, InstagramIcon, LocationIcon, OpenIcon, PhoneIcon, YoutubeIcon } from '@/components/ui/icon';
import { gsap } from 'gsap';

gsap.config({ nullTargetWarn: false, trialWarn: false });

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 50) {
        gsap.to(navbarRef.current, { backgroundColor: '#fff', duration: 1, boxShadow: '2px 2px 10px gray' });
        gsap.to('.list', { color: '#000', duration: 1 });
      } else {
        gsap.to(navbarRef.current, { backgroundColor: 'transparent', duration: 1, boxShadow: '0px 0px 0px gray' });
        gsap.to('.list', { color: '#fff', duration: 1 });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        onComplete: () => {
          gsap.set(mobileMenuRef.current, { clearProps: "all" });
        }
      });
    }
  }, [isOpen]);


  const isActiveLink = (path) => router.pathname === path;

  return (
    <div style={{ zIndex: 999 }}>
      <nav ref={navbarRef} className="bg-transparent text font-secondery w-full md:p-4 fixed top-0 left-0" style={{ zIndex: 999 }}>
        <Container>
          <div className="container mx-auto flex justify-between items-center">
            <div>
              <Link href="/">
                <img className='invisible md:visible w-[200px] md:w-[250px] md:-ml-10 lg:-ml-0 h-14' src="/images/home/logo.png" alt="Logo" />
              </Link>
            </div>
            <div className="hidden md:flex mr-10 space-x-4 text-xl">
              <Link className={` hover:text-primary transition-all p-2 rounded ${isActiveLink('/') ? 'text-primary' : 'text-tertiary'}`} href="/">Home</Link>
            
              <Link className={` hover:text-primary transition-all p-2 rounded ${isActiveLink('/services') ? 'text-primary' : 'text-tertiary'}`} href="/services">Services</Link>
          
           
              <Link className={` hover:text-primary transition-all p-2 rounded ${isActiveLink('/appointment') ? 'text-primary' : 'text-tertiary'}`} href="/appointment">Appointment</Link>
              <Link className={` hover:text-primary transition-all p-2 rounded ${isActiveLink('/contact') ? 'text-primary' : 'text-tertiary'}`} href="/contact">Contact</Link>
              <ToggleBar />
            </div>
            <div className="md:hidden  w-full h-6 flex justify-between">
              <Link className="w-[200px] h-6 -ml-28" href="/">
                <img className='visible md:invisible' src="/images/home/logo.png" alt="Logo" />
              </Link>
              <button onClick={toggleMenu} className="text-white bg-primary w-8 h-8 focus:outline-none text-2xl flex justify-center items-center" type="button">
                {isOpen ? <CloseIcon /> : <OpenIcon />}
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          <div
            ref={mobileMenuRef}
            className={`md:hidden bg-white p-4 w-[140%] py-20 -ml-20 -mt-32 h-[120dvh] ${isOpen ? "block" : "hidden"}`}
            style={{ zIndex: "9999" }}
          >
            <div className="space-y-2 w-full flex flex-col justify-center items-center">
              <img className='w-[200px] md:hidden md:w-[250px] h-14' src="/images/home/logo.png" alt="Logo" />
              <Link onClick={toggleMenu} className={`block text-tertiary hover:text-primary transition-all p-2 rounded ${isActiveLink('/') ? 'text-primary' : ''}`} href="/">Home</Link>
          
              <Link onClick={toggleMenu} className={`block text-tertiary hover:text-primary transition-all p-2 rounded ${isActiveLink('/services') ? 'text-primary' : ''}`} href="/services">Services</Link>
          
         
              <Link onClick={toggleMenu} className={`block text-tertiary hover:text-primary transition-all p-2 rounded ${isActiveLink('/contact') ? 'text-primary' : ''}`} href="/contact">Contact</Link>
            </div>


            <div className="mt-4 flex flex-col justify-end items-center text-center text-sm w-1/2 ml-28">
          
          <p className="flex gap-2 text-sm"><span><a href=" https://www.google.com/maps/place/Blush+%26+Glow+Beauty+Bar/@43.6961831,-79.2929566,17z/data=!4m14!1m7!3m6!1s0x38d840a6f5aec37:0x1292455a177a54ce!2sBlush+%26+Glow+Beauty+Bar!8m2!3d43.6961831!4d-79.2929566!16s%2Fg%2F11s1sbcm3v!3m5!1s0x38d840a6f5aec37:0x1292455a177a54ce!8m2!3d43.6961831!4d-79.2929566!16s%2Fg%2F11s1sbcm3v?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D">5 Massey Square, East York, ON M4C 5L6, canada.</a></span></p>
          <p className="flex  gap-2 -ml-4 py-6 "><a href="cellto">Call: +1 (647)-607-2276</a></p>
          <p className="flex  gap-2 "><a href="mailto:blushglowbar@gmail.com">blushglowbar@gmail.com</a></p>

          <ul className='flex gap-10 pt-10'>
            <li className='text-3xl hover:text-primary transition-all'><a href="#"><FacebookIcon /></a></li>
            <li className='text-3xl  hover:text-primary transition-all'><a href="#"><InstagramIcon /></a></li>
            <li className='text-4xl  hover:text-primary transition-all'><a href="#"><YoutubeIcon /></a></li>
          </ul>

        </div>
          </div>
        </Container>
      </nav>
    </div>
  );
};

export default Navbar;
