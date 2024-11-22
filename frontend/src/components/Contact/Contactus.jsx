import React, { useEffect, useRef } from "react";
import Container from "../ui/Container";
import { LocationIcon, PhoneIcon, EmailIcon, FacebookIcon, InstagramIcon, YoutubeIcon } from "../ui/icon";
import HeadingComponent from "../ui/reusableComponent/HeadingComponent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Form from "../Home/Appointment/form";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ContactUs = () => {
  const contactInfoRef = useRef(null); // Ref for contact details
  const mapRef = useRef(null); // Ref for the map

  useEffect(() => {
    // Animate contact information (fade in and slide up)
    gsap.fromTo(
      contactInfoRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate map iframe (fade in and slide up)
    gsap.fromTo(
      mapRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
          scrub:true,
        },
      }
    );
  }, []);

  const headingData = [
    {
      headline: "Keep in Touch",
      title1: "CONTACT",
      title2: "INFORMATION",
      description: "",
    },
  ];

  return (
    <div className="bg-white">
      <Container>
     

        <div className="flex flex-wrap flex-col justify-center items-center md:flex-row py-8">
          {/* Contact Information Section */}
          <div className="gap-20 w-full md:w-[48%]" ref={contactInfoRef}>
          
          <div
         
          className="text-center py-5 flex flex-col justify-center items-center w-full"
          
        >
          <h1 className="text-2xl text-primary italic font-secondery">Keep in Touch</h1>
          <h1 className="text-2xl md:text-4xl font-bold font-secondery py-4">
            <span>CONTACT </span> 
            <span className="text-primary">INFORMATION</span>
          </h1>
          <p className="text-secondery font-loraFont text-center text-[14px] lg:text-[20px] pb-4 md:w-[60%] flex">
           
          </p>
        </div>

            <p className="text-[18px] pr-[20px] text-gray-500 ">
              For any inquiries or to get in touch with us, feel free to use the following contact details:
            </p>
            <h1 className="font-secondery text-5xl text-primary font-semibold py-6">
              Blush & Glow Beauty Bar
            </h1>
            <p className="flex text-secondery gap-2 text-[20px]">
              <span className="mt-2"><LocationIcon /></span>
              <span>5 Massey Square, East York,  ON M4C 5L6, Canada</span>
            </p>
            <p className="flex text-secondery gap-2 py-2 text-[18px]">
              <span className="mt-2"><PhoneIcon /></span>
              <a href="tel:+16476072276">+1 (647)-607-2276</a>
            </p>
            <p className="flex text-secondery gap-2 text-[18px]">
              <span className="mt-2"><EmailIcon /></span>
              <a href="mailto:blushglowbar@gmail.com">blushglowbar@gmail.com</a>
            </p>

            {/* Social Media Section */}
            <div className="py-8">
            <ul className='flex gap-10 pt-10'>
              <li className='text-3xl hover:text-primary transition-all'><a href="#"><FacebookIcon /></a></li>
              <li className='text-3xl  hover:text-primary transition-all'><a href="#"><InstagramIcon /></a></li>
              <li className='text-3xl  hover:text-primary transition-all'><a href="#"><YoutubeIcon /></a></li>
            </ul>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full md:w-[48%] border-4 border-gray-100 p-6" ref={mapRef}>
          <div  className='bg-[#fff6f4] p-2 md:p-8 w-full border-8 border-white'>
            <h1 className='text-3xl lg:text-4xl text-tertiary font-secondery py-6'>
            Appointment
            </h1>
            <Form />
          </div>
          </div>
        </div>
       <div className="py-10 mb-10">
       <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d721.1727982288214!2d-79.292957!3d43.696183!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d840a6f5aec37%3A0x1292455a177a54ce!2sBlush%20%26%20Glow%20Beauty%20Bar!5e0!3m2!1sen!2sbd!4v1720508571658!5m2!1sen!2sbd"
              className="w-full h-[400px]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
       </div>
      </Container>
    </div>
  );
};

export default ContactUs;
