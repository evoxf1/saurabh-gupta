import React from "react";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      id: 1,
      serviceName:
        "Consultations",
        serviceDetail: "This initial meeting allows the designer to get to know the client and understand their vision for their wedding dress.",
        source:'assets/images/consultations.jpg'
    },
    {
      id: 2,
      serviceName:
        "Sketching and Design",
        serviceDetail: "The designer will create a sketch or multiple sketches of the dress based on the client preferences, They will work with the client to make revisions and adjustments until the final design is approved.",
        source:'assets/images/sketching.jpg'
    },
    {
      id: 3,
      serviceName:
        "Fabric Selection",
        serviceDetail: " The designer will help the client select the perfect fabric for the dress, taking into consideration the type of wedding, the season, and the clients personal style.",
        source:'assets/images/fabric.jpg'
    },
    {
      id: 4,
      serviceName:
        "Fittings and Alterations",
        serviceDetail: " The designer will create a pattern for the dress and a prototype, then the client will have multiple fittings where they will try on the dress and make any necessary adjustments to ensure a perfect fit.",
        source:'assets/images/fitting.jpg'
    },
    {
      id: 5,
      serviceName:
        "Accessories",
        serviceDetail: " Many custom wedding dress designers also offer a wide range of bridal accessories, including veils, headpieces, and jewelry.",
        source:'assets/images/accessoriers.jpg'
    },
    {
      id: 6,
      serviceName:
        "Preservation",
        serviceDetail: " After the wedding, many designers will also offer preservation services for the dress to ensure it is kept in the best possible condition for future generations.",
        source:'assets/images/preserve.jpg'
    },
  ];
  return (
    <div className="p-10 ">
      <h1 className="w-[300px] lg:w-full justify-center items-center text-5xl font-bold text-secondary text-center py-10">
        {" "}
        Customisations⭐
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:grid-cols-1 py-10">
        {services.map((service, i) => {
          return <Service key={i} service={service}></Service>;
        })}
      </div>
    </div>
  );
};

export default Services;
