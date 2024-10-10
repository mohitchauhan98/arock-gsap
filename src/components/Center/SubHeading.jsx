import React from "react";
import "remixicon/fonts/remixicon.css";

const SubHeading = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-start gap-4">
        <i className="ri-play-mini-fill px-4 py-3 rounded-full border-2"></i>
        <h3 className="uppercase ">
          Play <br /> the film
        </h3>
      </div>
      <div className="flex gap-24 font-[a4]">
        <h3 className="uppercase ">
          Creater <br /> curator
        </h3>
        <h3 className="uppercase ">
          New york <br /> los angeles
        </h3>
      </div>
    </div>
  );
};

export default SubHeading;
