import Container from "../ui/Container";
import BlogSidebar from "./sideBar";

const Layout = ({ children }) => {
  return (
    <Container>
    <div className="py-20 bg-white">
      <main className="grid grid-cols-1 lg:grid-cols-2 place-items-center"> 
     <div className="w-full lg:w-[120%]">
     {children}
     </div>
      <div className="w-full lg:w-[70%]">
      <BlogSidebar/>
      </div>
        </main>
      
    </div>
    </Container>
  );
};


export default Layout;
