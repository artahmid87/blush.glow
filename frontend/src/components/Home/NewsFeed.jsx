import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import Link from 'next/link';
import HeadingComponent from '../ui/reusableComponent/HeadingComponent';
import { useGetBlogQuery } from "@/redux/api/Api";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const NewsFeed = () => {
  const { data, isLoading, isError } = useGetBlogQuery();

  const headingRef = useRef(null);
  const blogRefs = useRef([]);

  blogRefs.current = [];

  const addToBlogRefs = (el) => {
    if (el && !blogRefs.current.includes(el)) {
      blogRefs.current.push(el);
    }
  };

  // Headline Data to pass to HeadingComponent
  const headingData = [
    {
      headline: "Beauty Bar News",
      title1: "World of ",
      title2: "beauty",
      description: "Stay up-to-date with the latest trends, beauty tips, and exclusive offers from Blush & Glow Beauty Bar Here’s what’s happening in the world of beauty."
    }
  ];

  useEffect(() => {

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );


    blogRefs.current.forEach((blog, index) => {
      gsap.fromTo(
        blog,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: index * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: blog,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            scrub:true,
          },
        }
      );
    });
  }, []);

  return (
    <div className='py-32 bg-[#fff6f4] relative'>
            <div className='w-[100%] absolute top-0 left-0 ' style={{
        zIndex: 99
      }}> <img className='w-full h-52' src="/images/home/9.png" alt="" /></div>
      <Container>
        <div className="relative" style={{
          zIndex:99
        }}>
          <div ref={headingRef}>
            <HeadingComponent headingData={headingData} />
             {/* middle animation */}
          <div className=' banner animate-slide-left-right absolute top-0 left-1/2 w-full h-full -ml-10' style={{
            zIndex: -1
          }}>
            <img className="opacity-20" src="/images/home/2.png" alt="" />
          </div>
          </div>
          <div className='grid grid-cols-1 place-items-center place-content-center md:grid-cols-2 lg:grid-cols-3 gap-6 py-10'>
            {isLoading && (
              <div className="text-center py-20 text-7xl flex justify-center items-center"> Loading....</div>
            )}
            {isError && (
              <div className="text-center py-20 text-7xl flex justify-center items-center">
                <h1>Something Went Wrong!</h1>
              </div>
            )}
            {data?.slice(0, 3).map((item, index) => (
              <div
                key={item.id}
                className='relative w-full h-[400px] mb-10'
                ref={addToBlogRefs}
              >
                <img className='w-full h-[400px]' src={"https://blush.glow.api.ara-dreamhome.com/images/blog_img/" + item?.file} alt={item?.title} />

                <Link href={`blog/${item.id}/#blog`}>
                <div className='absolute bottom-[-10%] left-0 w-[80%] h-[300px] bg-white p-6'>
                  <p className="text-[16px] text-primary pt-4 ">
                    {new Date(item.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                  <h1 className='mt-4 text-tertiary text-2xl font-secondery pb-8'>
                    {item.title.slice(0, 70)}...
                  </h1>
                  <Link href={`blog/${item.id}/#blog`} className='underline text-gray-400 font-secondery text-2xl'>
                    Learn More
                  </Link>
                </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <div className='invisible lg:visible banner animate-slide-top-bottom absolute top-1/2 -left-4 w-80 h-80' style={{
        zIndex:0
      }}>
        <img src="/images/home/16.png" alt="" />
      </div>
    </div>
  );
}

export default NewsFeed;
