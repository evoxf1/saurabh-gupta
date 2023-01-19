import React from "react";

const Service = ({ service }) => {
  const { serviceName, serviceDetail, source } = service;
  return (
    <div className="grid">
      <div className="sm:h-full card w-96 bg-base-100 shadow-xl py-10 px-10 hover:border-2 hover:border-gray-600 relative">
        <div className="card-body">
          <h2 className="card-title text-secondary font-bold border-1 border-yellow-600 rounded sm:text-left">
            {serviceName}
          </h2>
          <p>{serviceDetail}</p>
        </div>
        <figure className="">
          <img className="grid md:w-50 lg:w-100" src={source} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default Service;
