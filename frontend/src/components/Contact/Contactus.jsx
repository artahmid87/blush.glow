import React, { useEffect, useRef } from "react";
import Container from "../ui/Container";
import { LocationIcon, PhoneIcon, EmailIcon, FacebookIcon, InstagramIcon, YoutubeIcon } from "../ui/icon";
import HeadingComponent from "../ui/reusableComponent/HeadingComponent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
        <HeadingComponent headingData={headingData} />

        <div className="flex flex-wrap flex-col justify-center items-center md:flex-row py-8">
          {/* Contact Information Section */}
          <div className="gap-20 w-full md:w-[48%]" ref={contactInfoRef}>
            <p className="text-[18px] pr-[20px] text-gray-500 text-center">
              For any inquiries or to get in touch with us, feel free to use the following contact details:
            </p>
            <h1 className="font-secondery text-5xl text-primary font-semibold py-6">
              Blush & Glow Beauty Bar
            </h1>
            <p className="flex text-secondery gap-2 text-[18px]">
              <span className="mt-1"><LocationIcon /></span>
              <span>5 Massey Square, East York, ON M4C 5L6, Canada</span>
            </p>
            <p className="flex text-secondery gap-2 py-2 text-[18px]">
              <span className="mt-1"><PhoneIcon /></span>
              <a href="tel:+16476072276">Call: +1 (647)-607-2276</a>
            </p>
            <p className="flex text-secondery gap-2 text-[18px]">
              <span className="mt-1"><EmailIcon /></span>
              <a href="mailto:blushglowbar@gmail.com">blushglowbar@gmail.com</a>
            </p>

            {/* Social Media Section */}
            <div className="py-8">
              <ul className="flex gap-4 text-3xl text-secondery">
                <li><a href="#"><FacebookIcon /></a></li>
                <li><a href="#"><InstagramIcon /></a></li>
                <li><a href="#"><YoutubeIcon /></a></li>
              </ul>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full md:w-[48%]" ref={mapRef}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d721.1727982288214!2d-79.292957!3d43.696183!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d840a6f5aec37%3A0x1292455a177a54ce!2sBlush%20%26%20Glow%20Beauty%20Bar!5e0!3m2!1sen!2sbd!4v1720508571658!5m2!1sen!2sbd"
              className="w-full h-[400px]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
