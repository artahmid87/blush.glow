import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import { useRouter } from "next/router";

const MainLayout = ({ children }) => {
  const { pathname } = useRouter();

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
          <div
            className="fixed bottom-8 right-8 border-[4.5px] bg-white text-blue rounded-full cursor-pointer transition-all flex justify-center items-center size-14 lg:size-20 duration-300"
            style={{ zIndex: 999 }}
          >
          </div>
        </>
      )}
    </>
  );
};

export default MainLayout;
