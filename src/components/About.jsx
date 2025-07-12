import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center
    justify-center bg-black text-white"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome to Aakash Labs</h1>
        <p className="mt-4 text-lg space-y-4 md:text-xl
        leading-relaxed text tracking-wider my-8 slider text-left]">
          We are an innovation company dedicated to revolutionizing the future.
        </p>
        <img src="/about.webp" alt="Aakash Labs" className=" h-auto rounded-lg shadow-lg" />
      </div>
    </section>
  );
};

export default About;
