import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-3">
          <div className="w-[300px] lg:w-full ">
            <img
              src="/assets/images/first.jpg"
              className="rounded-lg shadow-2xl"
              alt="first"
            />
          </div>
          <div className="w-[300px] lg:w-full flex flex-col justify-center items-center">
            <h1 className="cursive lg:text-5xl text-purple-500">
              Saurabh Gupta
            </h1>
            <p className="py-6 lg:text-lg text-sm">
              Here’s a curated collection of Indian bridal clothing. It’s
              exclusively created in keeping with the most voguish trends,
              Indian heritage, inspirations from Indian designers, and bollywood
              fashion. Our bridal collection has everything from dressing you to
              the nines on a wedding day to get you a praise-worthy trousseau.
            </p>
            <button className="btn btn-base"><a href="/">COUTURE 2023!</a></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
