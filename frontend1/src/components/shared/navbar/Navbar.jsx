import Container from '@/components/ui/Container';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router'; 
import ToggleBar from './ToggleBar';
import { CloseIcon, DownArrowIcon, EmailIcon, FacebookIcon, InstagramIcon, LocationIcon, OpenIcon, PhoneIcon, YoutubeIcon } from '@/components/ui/icon';
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

  const today = new Date();

  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const saveContact = () => {
    const contact = {
      name: 'Blush & Glow Beauty Bar',
      phone: '+1 (647)-607-2276',
      email: 'blushglowbar@gmail.com',
      address: '858 Danforth Rd, Scarborough, ON M1K 1H5, Canada',
    };

    const vCard = `
BEGIN:VCARD
VERSION:3.0
FN:${contact.name}
TEL:${contact.phone}
EMAIL:${contact.email}
ADR:${contact.address}
END:VCARD
    `.trim();

    const blob = new Blob([vCard], { type: 'text/vcard' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${contact.name}.vcf`;
    link.click();
  };

  const isActiveLink = (path) => router.pathname === path;

  return (
    <div style={{ zIndex: 999 }} className='md:py-5 '>

      {/* top menu */}
      <div className='hidden md:block'>
        <div className="fixed top-0 left-0 w-full h-fit pb-2 md:py-0 lg:h-10 bg-[#d9d2d2] flex flex-col lg:flex-row justify-between md:px-10 items-center z-[1000] ">

          <div className='text-gray-600 text-[12px] md:text-lg'>
            {formattedDate}
          </div>
          <div className='flex flex-col md:flex-row gap-4 justify-center items-center'>
            <ul className='flex  gap-4 text-gray-600'>
              <li className='flex gap-1 text-[12px] md:text-lg mt-1 lg:mt-0'>
                <span className="mt-[2px] md:mt-1"><PhoneIcon /></span><a href="tel:+1-647-607-2276"> +1 (647)-607-2276</a>
              </li>
              <li className='flex  gap-1  text-[12px] md:text-lg mt-1 md:-mt-0'> <span className='mt-[2px] md:mt-1'> <EmailIcon /></span><a href="mailto:blushglowbar@gmail.com">blushglowbar@gmail.com</a></li>
            </ul>

            <ul>
              <li className='md:pb-1'>    <button onClick={saveContact} className='border-primary border px-2 py-0.5   rounded-lg hover:bg-[#e1e1e1] transition-all duration-300 ease-in-out  text-[12px] md:text-[15px]'>
                Save Contact
              </button></li>
            </ul>
          </div>
        </div>
      </div>
      {/* mobile view top menu  */}
      <div className='fixed top-0 left-0 w-full py-3 flex flex-col justify-between items-center z-[1000] bg-[#d9d2d2] md:hidden'>
        <div className='flex justify-center items-center'>
         <div className='flex gap-4 items-center'>
         <li className='flex gap-1 text-[12px]'>
            <span className="mt-[2px]"><PhoneIcon /></span><a href="tel:+1-647-607-2276"> +1 (647)-607-2276</a>
          </li>
          <button onClick={saveContact} className='border-primary border px-2 py-0.5 rounded-lg hover:bg-[#e1e1e1] transition-all duration-300 ease-in-out  text-[12px]'>
            Save Contact
          </button>
         </div>
        </div>
      </div>

      {/* // nav menu */}
      <Container>

        <nav ref={navbarRef} className="bg-transparent text font-secondery w-full md:p-4 fixed lg:top-10 md:top-7 top-10 left-0 pr-4 " style={{ zIndex: 999 }}>



          <div className="container mx-auto flex justify-between items-center md:mt-4 lg:mt-0">
            <div>
              <Link href="/">
                <img className='invisible md:visible w-[300px] md:w-full md:-ml-4 lg:-ml-0 h-14' src="/images/home/logo.png" alt="Logo" />
              </Link>
            </div>
            <div className="hidden md:flex mr-4 space-x-4 text-xl">
              <Link className={` hover:text-primary transition-all duration-300 ease-in-out p-2 rounded ${isActiveLink('/') ? 'text-primary' : 'text-tertiary'}`} href="/">Home</Link>

              <Link className={` hover:text-primary transition-all duration-300 ease-in-out p-2 rounded ${isActiveLink('/services') ? 'text-primary' : 'text-tertiary'}`} href="/services">Services</Link>


              <Link className={` hover:text-primary transition-all duration-300 ease-in-out p-2 rounded ${isActiveLink('/appointment') ? 'text-primary' : 'text-tertiary'}`} href="/appointment">Appointment</Link>
              <Link className={` hover:text-primary transition-all duration-300 ease-in-out p-2 rounded ${isActiveLink('/contact') ? 'text-primary' : 'text-tertiary'}`} href="/contact">Contact</Link>
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
            className={`md:hidden bg-white p-4 py-10 h-screen ${isOpen ? "block" : "hidden"}`}
            style={{ zIndex: "9999" }}
          >
            <div className="w-full flex flex-col justify-start items-start -mt-8">


              {/* Menu Items */}
              <Link
                onClick={toggleMenu}
                className={`flex justify-between items-center w-full text-lg font-medium text-tertiary hover:text-primary py-4 border-b border-gray-200 ${isActiveLink('/') ? 'text-primary' : ''}`}
                href="/"
              >
                Home <span><DownArrowIcon /></span>
              </Link>
              <Link
                onClick={toggleMenu}
                className={`flex justify-between items-center w-full text-lg font-medium text-tertiary hover:text-primary py-4 border-b border-gray-200 ${isActiveLink('/services') ? 'text-primary' : ''}`}
                href="/services"
              >
                Services <span><DownArrowIcon /></span>
              </Link>
              <Link
                onClick={toggleMenu}
                className={`flex justify-between items-center w-full text-lg font-medium text-tertiary hover:text-primary py-4 border-b border-gray-200 ${isActiveLink('/appointment') ? 'text-primary' : ''}`}
                href="/appointment"
              >
                Appointment <span><DownArrowIcon /></span>
              </Link>
              <Link
                onClick={toggleMenu}
                className={`flex justify-between items-center w-full text-lg font-medium text-tertiary hover:text-primary py-4 border-b border-gray-200 ${isActiveLink('/about') ? 'text-primary' : ''}`}
                href="/about"
              >
                About <span><DownArrowIcon /></span>
              </Link>
              <Link
                onClick={toggleMenu}
                className={`flex justify-between items-center w-full text-lg font-medium text-tertiary hover:text-primary py-4 border-b border-gray-200 ${isActiveLink('/imageShowcase') ? 'text-primary' : ''}`}
                href="/imageShowcase"
              >
                Gallery <span><DownArrowIcon /></span>
              </Link>
              <Link
                onClick={toggleMenu}
                className={`flex justify-between items-center w-full text-lg font-medium text-tertiary hover:text-primary py-4 border-b border-gray-200 ${isActiveLink('/blog') ? 'text-primary' : ''}`}
                href="/blog"
              >
                Blog <span><DownArrowIcon /></span>
              </Link>
              <Link
                onClick={toggleMenu}
                className={`flex justify-between items-center w-full text-lg font-medium text-tertiary hover:text-primary py-4 border-b border-gray-200 ${isActiveLink('/contact') ? 'text-primary' : ''}`}
                href="/contact"
              >
                Contact <span><DownArrowIcon /></span>
              </Link>
            </div>

            {/* Contact Section */}
            <div className="mt-6 w-full text-sm">
              <p className="flex  gap-2 text-sm md:text-xl mt-2"><span className="mt-1"><LocationIcon /></span><span><a href=" https://www.google.com/maps/place/Blush+%26+Glow+Beauty+Bar/@43.6961831,-79.2929566,17z/data=!4m14!1m7!3m6!1s0x38d840a6f5aec37:0x1292455a177a54ce!2sBlush+%26+Glow+Beauty+Bar!8m2!3d43.6961831!4d-79.2929566!16s%2Fg%2F11s1sbcm3v!3m5!1s0x38d840a6f5aec37:0x1292455a177a54ce!8m2!3d43.6961831!4d-79.2929566!16s%2Fg%2F11s1sbcm3v?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D">5 Massey Square, East York, <br /> ON M4C 5L6, canada.</a></span></p>
              <p className="flex  gap-2 py-4 text-sm md:text-xl"><span className="mt-1"><PhoneIcon /></span><a href="tel:+1-647-607-2276"> +1 (647)-607-2276</a></p>
              <p className="flex  gap-2 text-sm md:text-xl"><span className="mt-1"><EmailIcon /></span><a href="mailto:blushglowbar@gmail.com">blushglowbar@gmail.com</a></p>


              <ul className="flex gap-6 mt-6">
                <li className="text-xl hover:text-primary">
                  <a href="#"><FacebookIcon /></a>
                </li>
                <li className="text-xl hover:text-primary">
                  <a href="#"><InstagramIcon /></a>
                </li>
                <li className="text-2xl hover:text-primary">
                  <a href="#"><YoutubeIcon /></a>
                </li>
              </ul>
            </div>
          </div>





        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
