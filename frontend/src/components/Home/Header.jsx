import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import Container from '../ui/Container';
import { CalenderIcon } from '../ui/icon';
import Link from 'next/link';

const Header = () => {
  const slidesRef = useRef([]);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  const data = [
    {
      id: 1,
      title1: "Blush & Glow",
      title2: "Beauty Bar",
      images: '/images/home/Nazma_Jahan-1.jpg',
      describe: "Captivate Your Beauty Journey at Blush & Glow: Toronto's Premier Beauty Destination.",
    },
    {
      id: 2,
      title1: "Blush & Glow",
      title2: "Beauty Bar",
      images: '/images/home/banner_layer.png',
      describe: "Love Yourself By Caring For Your Skin.",
    },
    {
      id: 3,
      title1: "Blush & Glow",
      title2: "Beauty Bar",
      images: '/images/home/banner_layer.png',
      describe: "Elevate Your Aura at Blush & Glow Beauty Bar - Your Toronto Haven for Timeless Glamour.",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({ delay: 0.5 });
    tl.fromTo(titleRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
    tl.fromTo(descriptionRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.5");
    tl.fromTo(buttonRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }, "-=0.5");
  }, []);

  return (
    <section className='bg-[#f5f5f5]'>
      <Swiper      slidesPerView={1}
    autoplay={{ delay: 5000 }}
    loop={true}
    speed={1200}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}>
      {data.map((item, index) => (
        <SwiperSlide key={item.id}>
            <Container>
          <div className="relative md:py-20 bg-cover bg-top overflow-hidden ">
            <div className="flex justify-center lg:justify-between lg:items-start" ref={el => (slidesRef.current[index] = el)}>
              <div className="flex flex-col justify-center items-start w-full lg:w-[40%]">
                <h1 className="font-secondery md:text-[70px] xl:text-[90px] lg:text-[65px] text-[50px] font-bold leading-[45px] md:leading-[70px]" ref={titleRef}>
                  <span>{item.title1}</span>
                  <span className="text-primary ml-4">{item.title2}</span>
                </h1>
                <p className="mt-8 text-md md:text-xl lg:text-lg text-tertiary" ref={descriptionRef}>
                  {item.describe}
                </p>
                
                <Link href="#appointment"  className="group hover:bg-primary bg-white transition-all flex  gap-2 justify-center items-center mt-10 py-2  px-8  rounded-full shadow-lg cursor-pointer mb-36 md:mb-0" ref={buttonRef}>
                
                    <span className="flex justify-center items-center text-2xl group-hover:text-primary text-white transition-all w-8 h-8 md:w-10 md:h-10 group-hover:bg-white bg-primary rounded-full -ml-4">
                      <CalenderIcon/>
                    </span>
                    <span className="text-md md:text-xl transition-all group-hover:text-white text-primary font-secondery">
                      Make An Appointment
                    </span>
             
                </Link>
              </div>

    
              <div className="relative z-[9] lg:w-full h-[600px] -mb-60 invisible lg:visible">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white flex justify-center items-center overflow-hidden">
                  <img src={item.images} alt="Person" className="rounded-full w-[650px] h-[650px]" />
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
               
          <div className='invisible lg:visible w-[100%] absolute -bottom-8 left-0' style={{
                zIndex:9
            }}> <img className='w-full md:h-28' src="/images/about/2.png" alt="" /></div>
        </SwiperSlide>
      ))}
    </Swiper>
    </section>
  );
};

export default Header;
