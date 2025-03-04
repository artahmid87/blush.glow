
import MainLayout from "@/layouts/MainLayout";
import React from "react";

const Layout = ({ children }) => {


  return (
    <section>
        <MainLayout>{children}</MainLayout>
    </section>
  );
};

export default Layout;
