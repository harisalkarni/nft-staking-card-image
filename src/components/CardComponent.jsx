import React from "react";

const CardComponent = ({ imgUrl, type, title }) => {
  return (
    <div className="p-8 drop-shadow-lg bg-gray-100 inline-flex flex-col items-center justify-center">
      <img src={imgUrl} alt="midnight-flower" />
      <p className="text-md text-gray-400 mt-3">{type}</p>
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  );
};

export default CardComponent;
