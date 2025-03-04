import React from "react";

const Container = ({ className, children }) => {
  return (
    <section className={`${className} max-w-[1480px] mx-auto px-4`}>
      {children}
    </section>
  );
};

export default Container;
