import React from "react";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <div>
      <div className=" p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-3">
          <div className="w-[300px] lg:w-full ">
            <h1 className="text-5xl font-bold">Contact Me!</h1>
            <p className="py-6 lg:text-lg text-sm">
              Thank you for reaching out! If you would like to contact me via
              email, you can send an email to
              <p className="font-extrabold">saurabh1gupta1994@gmail.com</p> . If
              you would like to contact me through social media, you can find me
              on Instagram as<p className="font-extrabold">"thesaurabh.gupta"</p> 
              and on
              Facebook as "<p className="font-extrabold">"Saurabh Gupta"</p>.
              I'll be more than happy to help you with any queries or assistance
              you may require. Feel free to reach out with any questions,
              comments, or ideas you have. I am available most of the time to
              respond and help. Also you can call me on{" "}
              <p className="font-extrabold">+91-9991222237</p>(if busy you will
              be contacted back soon). If you have any specific concerns or
              issues you want me to address, please let me know, and I'll do my
              best to assist you. Thank you for considering me as your point of
              contact.
            </p>
          </div>
          <div className="w-[250px] lg:w-full ">
            <img
              src="/assets/images/first.jpg"
              className="rounded-lg shadow-2xl"
              alt="first"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
