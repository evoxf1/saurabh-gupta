import React, { useState } from "react";

const Aboutme = () => {
  const [showText, setShowText] = useState(false);
  const [imgClass, setImgClass] = useState("w-[300px] lg:w-500");
  const handleClick = () => {
    setShowText(!showText);
    setImgClass(imgClass === "w-[300px] lg:w-500" ? "w-[300px] lg:w-500 groww-img" : "w-[300px] lg:w-500 grow-img");
  };

  return (
    <div>
      <div className="p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-3">
          <div className="w-[300px] lg:w-full">
            <img
         
              src="/assets/images/SG.jpg"
              className={`${imgClass} rounded-lg shadow-2xl`}
              alt="saurabhgupta"
            />
          </div>
          <div className="w-[300px] lg:w-full flex flex-col justify-center items-center">
            <h1 className="lg:text-5xl text-secondary">Saurabh Gupta</h1>
            <p className="py-6 lg:text-lg text-sm">
              <button onClick={handleClick}>
                <span className="text-violet-300">Learn More</span>
              </button>
              {showText && (
                <div>
                  <p>
                    HEY! I am an Indian wedding dress designer cum a fashion
                    designer who specializes in creating traditional and
                    contemporary clothing for Indian weddings. I typically have
                    a background in fashion design and have self taught myself
                    about the tiniest aspect of what it takes to be a true
                    ethnic curator. I often draw inspiration from Indian culture
                    and history, incorporating elements such as embroidery,
                    beadwork, and traditional motifs into my designs. I also
                    incorporate modern trends and styles to create unique and
                    fashionable clothing for their clients.
                  </p>
                  <p>
                    In terms of career,as an Indian wedding dress designer I
                    work independently. Also setup my own design studio , and
                    will often work directly with clients to create custom-made
                    wedding ensembles.
                  </p>
                  <p className="text-secondary">
                    "Will someday be one of the top wedding dress designer in
                    the industry"
                  </p>
                  <p>
                    Please go check out my work by visiting my socials and feel
                    free to contact me.
                  </p>
                </div>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
