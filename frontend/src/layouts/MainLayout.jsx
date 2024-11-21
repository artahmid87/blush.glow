import { useEffect, useState } from "react";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import { useRouter } from "next/router";
import { UpperArrow } from "@/components/ui/icon";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin); 

const MainLayout = ({ children }) => {
  const { pathname } = useRouter();
  const [showButton, setShowButton] = useState(false); 
  const [showMobileNumber, setShowMobileNumber] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headingPageOffset = document.querySelector("h1")?.offsetTop || 0; 

  
      if (scrollPosition > headingPageOffset) {
        setShowButton(true);
      } else {
        setShowButton(false);
        setShowMobileNumber(false); 
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
  
    gsap.to(window, { scrollTo: { y: 0 }, duration: 1, ease: "power3.out" });

    gsap.to(".scroll-circle", { opacity: 0, scale: 0.5, duration: 0.3 });
  };

  const hiddenRoutes = [
    "/login",
    "/dashboard",
    "/dashboard/bookingList",
    "/dashboard/blog",
    "/dashboard/newPost",
    "/dashboard/updateBlog",
    "/dashboard/uploadGallery",
    "/dashboard/gallery",
    "/dashboard/displayServices",
    "/dashboard/category",
    "/dashboard/addPrice",
    "/dashboard/updateBlog/[id]",
    "/dashboard/gallery/[id]",
    "/dashboard/confirmationBooking/[id]",
    "/dashboard/updateCategory/[id]",
    "/dashboard/updatePrice/[id]",
    "/dashboard/blog-category",
    "/dashboard/appointment",
  ];

  const showNavbarFooter = !hiddenRoutes.includes(pathname);

  return (
    <>
      {showNavbarFooter && (
        <>
          <div
            className="size-5 fixed hidden lg:block left-0 top-0 bg-blue rounded-full"
            style={{ zIndex: 99999 }}
          />
          <Navbar />
        </>
      )}
      {children}
      {showNavbarFooter && (
        <>
          <Footer />
          {/* Floating Button */}
          {showButton && (
            <div
              className="fixed bottom-8 right-8 border-[4.5px] bg-white text-blue rounded-full cursor-pointer transition-all flex justify-center items-center size-14 lg:size-20 duration-300"
              style={{ zIndex: 999 }}
              onClick={scrollToTop}
              onMouseEnter={() => setShowMobileNumber(true)} // Show mobile number on hover
            onMouseLeave={() => setShowMobileNumber(false)} // Hide mobile number on hover out
            >
              <UpperArrow className = "text-4xl text-primary font-bold"/>
            </div>
          )}

          {/* Mobile Number */}
          <div
            className={`fixed bottom-12 right-32 bg-white text-black px-8 text-xl py-4 rounded-lg shadow-md transition-all duration-300 transform ${showMobileNumber ? "opacity-100" : "opacity-0 scale-0"}`}
            style={{
              zIndex: 998,
              transition: "opacity 0.5s ease, transform 0.5s ease",
            }}
            id="mobile-number"
          >
           +1 (647)-607-2276
          </div>

          
        </>
      )}
    </>
  );
};

export default MainLayout;
