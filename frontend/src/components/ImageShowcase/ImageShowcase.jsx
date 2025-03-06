import React, { useEffect, useRef } from 'react';
import { useGetAllGalleryQuery } from '@/redux/api/Api';
import { gsap } from 'gsap';
import Container from '../ui/Container';
import HeadingComponent from '../ui/reusableComponent/HeadingComponent';
import ApiUrl from '../ui/APIURL';
import Image from 'next/image';

const ImageShowCase = () => {
  const { data, isError, error, isLoading } = useGetAllGalleryQuery();


  const headingData = [
    {
      headline: "",
      title1: "Image",
      title2: "Gallery",
      description: ""
    }
  ];

  return (
    <Container>
      <div className="  py-20">
        {
          isLoading && (<div className="text-center py-20 text-7xl flex justify-center items-center"> Loading....</div>)
        }{
          isError && (<div className="text-center py-20 text-7xl flex flex-col justify-center items-center"> <h1>Something Went Wrong!</h1> <h1>Please! try again</h1></div>)
        }
        <HeadingComponent headingData={headingData} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden shadow-lg"
            >
              <Image
                src={`${ApiUrl}/images/gallery_img/${item?.path}`}
                alt=""
                width={500}
                height={500}
                priority
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
           
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center text-white text-lg font-semibold ">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ImageShowCase;
