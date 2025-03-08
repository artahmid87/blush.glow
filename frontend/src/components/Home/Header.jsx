import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import Container from '../ui/Container';
import { AboutIcon, CalenderIcon, ContactUsIcon, FacebookIcon, ServiceIcon } from '../ui/icon';
import Link from 'next/link';

const Header = () => {
  const slidesReference = useRef([]);
  const titleReference = useRef(null);
  const descriptionReference = useRef(null);
  const buttonReference = useRef(null);

  const data = [
    {
      id: 1,
      title1: "Blush & Glow",
      title2: "Beauty Bar",
      images: '/images/home/appoinmentImg.jpg',
      describe: "Captivate Your Beauty Journey at Blush & Glow: Toronto's Premier Beauty Destination.",
      link: "/appointment",
      icon: <CalenderIcon />,
      span: "Make An Appointment"
    },
    {
      id: 2,
      title1: "Discover",
      title2: "My Passion",
      images: '/images/home/Nazma_Jahan-1.jpg',
      describe: "Crafting Beauty, One Client at a Time",
      link: "/about",
      icon: <AboutIcon />,
      span: "About"
    },
    {
      id: 3,
      title1: "Discover",
      title2: "My Passion",
      images: '/images/home/Facial.jpg',
      describe: "Refresh & Rejuvenate Every Day",
      link: "/services",
      icon: <ServiceIcon />,
      span: "Facial"
    },
    {
      id: 4,
      title1: "Frame",
      title2: "Your Beauty",
      images: '/images/home/Threading.jpg',
      describe: "Sculpted Brows, Perfect Looks",
      link: "/services",
      icon: <ServiceIcon />,
      span: "Threading"
    },
    {
      id: 5,
      title1: "Silky",
      title2: "Smooth Skin",
      images: '/images/home/Waxing.jpg',
      describe: "Confidence Starts with Care",
      link: "/services",
      icon: <ServiceIcon />,
      span: "Waxing"
    },
    {
      id: 6,
      title1: "Reach",
      title2: "Out Today",
      images: '/images/home/Contact.png',
      describe: "Let’s Create Your Glow Together",
      link: "/services",
      icon: <ContactUsIcon />,
      span: "Contact Me"
    },
  ];



  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({ delay: 0.5 });
    tl.fromTo(titleReference.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
    tl.fromTo(descriptionReference.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.5");
    tl.fromTo(buttonReference.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }, "-=0.5");
  }, []);

  return (
    <section  className='bg-[#f5f5f5] relative overflow-hidden'
    
    >
      <Swiper slidesPerView={1}
        autoplay={{ delay: 7000 }}
        loop={true}
        speed={2000}
        spaceBetween={100}
        centeredSlides={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}>
        {data.map((item, index) => (
          <SwiperSlide key={item.id} id='heading'>
            <Container>
              <div className="relative xl:py-20 md:mb-10 bg-cover bg-top mt-20 ">
                <div className="flex justify-center lg:justify-between lg:items-start" ref={el => (slidesReference.current[index] = el)}>
                  <div className="py-10 lg:py-0 flex flex-col justify-center lg:items-start items-center w-full lg:w-[40%]">
                    <h1 className="text-center lg:text-start font-secondery md:text-[70px] xl:text-[90px] lg:text-[65px] text-[40px] font-bold leading-[45px] md:leading-[70px]" ref={titleReference}>
                      <span>{item.title1}</span>
                      <span className="text-primary ml-4">{item.title2}</span>
                    </h1>
                    <h2 className="mt-8 h-16 text-center lg:text-start md:text-xl lg:text-lg text-tertiary" ref={descriptionReference}>
                      {item.describe}
                    </h2>

                    <div className='flex gap-4 flex-col xl:flex-row'>
                      <Link href={item?.link || "#"} className={`group hover:bg-primary bg-white transition-all flex  gap-2  items-center mt-10 py-4 pl-4 ${item.id == 1 ? ' w-60 h-12 md:w-[260px] justify-start' : 'md:w-[170px] justify-start'} md:py-7 md:lg:h-14 lg:py-4 w-60 h-12 md:w-64 lg:h-16  rounded-full shadow-lg cursor-pointer `} ref={buttonReference}>

                        <span className="flex justify-center items-center text-2xl group-hover:text-primary text-white transition-all w-8 h-8 md:w-10 md:h-10 group-hover:bg-white bg-primary rounded-full  ">
                          {item.icon}
                        </span>
                        <span className="text-md md:text-xl transition-all group-hover:text-white text-primary font-secondery">
                          {item.span}
                        </span>

                      </Link>

                      <a href="https://www.facebook.com/Blushglowbeautybar" className="group hover:bg-primary bg-white  flex  gap-2 justify-start self-center items-center md:mt-10 py-4 md:py-7 pl-2 lg:py-4 w-40 h-12 md:w-36 lg:h-14  rounded-full shadow-lg cursor-pointer mb-36 md:mb-0 transition-all duration-500 ease-in-out " ref={buttonReference}>

                        <span className="flex justify-center items-center text-2xl group-hover:text-primary text-white transition-all w-8 h-8 md:w-10 md:h-10 group-hover:bg-white bg-primary rounded-full  ">
                          <FacebookIcon className="rounded-full" />
                        </span>
                        <span className="text-md md:text-xl transition-all group-hover:text-white text-primary font-secondery">
                          Facebook
                        </span>

                      </a>
                    </div>

                  </div>


                  <div className="relative z-[9] lg:w-full h-[600px] lg:h-[550px] -mb-60 invisible lg:visible">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white flex justify-center items-center overflow-hidden">

                      <Image
                        src={item.images}
                        alt="Person"
                        width={500}
                        height={500}
                        priority
                        className="rounded-full w-[650px] h-[650px] object-cover"
                      />
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] z-[-1]">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className={`absolute w-full h-full rounded-full bg-primary opacity-50 animate-spinFade`}
                          style={{ animationDelay: `${i * 0.5}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Container>


          </SwiperSlide>
        ))}
      </Swiper>
      <div className=' w-[100%] absolute bottom-0  md:-bottom-4 left-0' style={{
        zIndex: 9
      }}>
        <Image
          src="/images/about/2.png"
          alt="Person"
          width={200}
          height={200}
          priority
          className='w-full h-28 md:h-44'
        />
      </div>
    </section>
  );
};

export default Header;

