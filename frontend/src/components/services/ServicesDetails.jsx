import React, { useEffect } from 'react';
import Container from '../ui/Container';
import HeadingComponent from '../ui/reusableComponent/HeadingComponent';
import { useFindAllCategoriesQuery, useFindAllPriceQuery } from '@/redux/api/Api';
import ApiUrl from '../ui/APIURL';
import Image from 'next/image';


const Services = () => {
  const { data: categories } = useFindAllCategoriesQuery();
  const { data: prices } = useFindAllPriceQuery();

  const groupedPrices = categories
    ?.filter(category => category.isActive)
    .map(category => ({
      ...category,
      prices: prices?.filter(price => price.CategoryId === category.id),
    }));

  const headingData = [
    {
      headline: "What we provide",
      title1: "Services",
      title2: "Plan",
      description: "",
    },
  ];


  return (
    <div className='overflow-hidden py-20 bg-white relative'>
      <div className='invisible lg:visible banner animate-slide-top-bottom absolute top-24 -right-4 w-60 h-60'>
       
        <Image
         src="/images/service/14.png"
          alt=""
          width={300}
          height={300}
          priority
          
        />
      </div>

      <Container>
        <HeadingComponent headingData={headingData} />

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 md:mt-10 mt-0"
          style={{
            backgroundImage: 'url(images/service/4-5.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            backgroundAttachment: 'fixed',
          }}
          id='price'
        >
          {groupedPrices?.map(category => (
            <div key={category.id} className="mb-10" id={`#${categories.title}`}>
              {/* Category Section */}
              <h1 className="text-3xl text-center md:text-start font-bold uppercase mb-6 font-secondery text-primary">
                {category.title}
              </h1>

              {/* Services within each active category */}
              <div className="space-y-6">
                {category.prices?.map(price => (
                  <div
                    key={price.id}
                    className="flex items-center justify-between p-4 border-b border-gray-400"
                  >
                    {/* Service Item */}
                    <div id='service' className="flex items-center space-x-4">
                      <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                        

                        <Image
                          src={`${ApiUrl}/images/service_img/${price.image}`}
                          alt={price.title}
                          width={500}
                          height={500}
                          priority
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div>
                        <h2 className="text-xl font-medium font-secondery capitalize">
                          {price.title}
                        </h2>
                        <h3 className="text-sm font-primary text-secondery">
                          {price.shortInfo}
                        </h3>
                      </div>
                    </div>

                    <div className="text-lg font-semibold text-gray-700" >
                      ${price.price}
                    </div>

                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
