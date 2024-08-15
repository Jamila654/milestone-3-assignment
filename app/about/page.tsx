import Navbar from "@/components/navbar";
const About = () => {
  return (
    <>
      <Navbar />
      <main className=" min-h-screen flex items-center justify-center bg-[#F5F5DC]">
        <div className=" flex flex-col">
          <h1 className=" text-center text-xl md:text-3xl lg:text-5xl text-[#800000]">
            About
          </h1>
          <p className=" text-sm text-center md:text-lg lg:text-xl p-4 md:p-8">
            Welcome to our blog, where passion meets insight! Here, we explore a
            diverse range of topics, from the latest trends and timeless wisdom
            to personal stories and expert advice. Our goal is to create a space
            where curiosity thrives and readers find inspiration and valuable
            perspectives. Whether you're seeking practical tips,
            thought-provoking articles, or just a good read, our carefully
            curated content is designed to engage, inform, and entertain. Join
            us on this journey of discovery and enrich your life with every
            visit. Thank you for being part of our community!
          </p>
        </div>
      </main>
    </>
  );
};

export default About;
