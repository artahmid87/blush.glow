
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import Container from "../ui/Container";
import { useReviewQuery } from "@/redux/api/Api";
import HeadingComponent from "../ui/reusableComponent/HeadingComponent";

const Review = () => {

   const {data , isSuccess , isLoading , isError} = useReviewQuery()

 // This is Headline Data pass with HaedingComponent as for create Reusable component 
  const headingData = [
    {
      headline :"Review",
      title1 :"Client",
      title2:"Feedback",
      description:` Your thoughts and opinions mean the world to us. They help us grow, improve, and serve you better. Whether it's a suggestion, a compliment, or something we could do better, we’re all ears!
      Please take a moment to share your valuable feedback. Your input will help us create an even better experience for you and others.
      `
    }
  ] 
  return (
    <div className ="py-10">

  <Container><HeadingComponent headingData ={headingData} /></Container> 

    <Swiper
      slidesPerView={1}
      autoplay={{ delay: 4000, }}
      loop={true}
      speed={1200}

      pagination={{
        clickable: true,
      }}

      navigation={true}
      modules={[Autoplay, Pagination, Navigation]} >

      {
        data?.review?.map((item)=>(
          <SwiperSlide key={item.id}>
          <a href={item.reviewLink}>
      <div className='relative py-20  bg-cover bg-top md:bg-none overflow-hidden'>
            <Container> 
              <div className="flex justify-center items-center">
              <div className="md:w-[80%] w-full flex flex-col justify-center items-center">
                <p className="text-center text-tertiary text-xl  md:text-3xl font-secondery italic"><span className="text-4xl">“</span>{item.description } <span  className="text-4xl">”</span></p>
                <h1 className="text-xl mt-10 font-semibold text-primary">{item.name}</h1>
                <img className="w-20 h-10" src="images/home/star.png" alt="" />
                <img className="w-[60px] h-[60px] rounded-full border-2 border-gray-400 mt-4" src={item.imageUrl} alt="" />
              </div>
              </div>
            </Container>
            
        </div>
        </a>
        </SwiperSlide>

        ))
      }

    </Swiper>
    </div>
  );
};


export default Review



