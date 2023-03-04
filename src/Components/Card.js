import React from "react";

const Card = ({ img, title, dec }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg">
      <div className="w-full p-5 pb-0 h-60 overflow-hidden  rounded-lg">
        <img src={img} className="w-full" />
      </div>
      <div className="p-6">
        <h4 className="text-lg mb-3 font-medium">{title}</h4>
        <p className="text-sm text-slate-500">{dec}</p>
        <button className="mt-3 bg-red-600 w-full text-white py-2">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
