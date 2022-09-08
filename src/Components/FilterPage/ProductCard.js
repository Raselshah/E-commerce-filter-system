import React from "react";
import cardPhoto from "../../Assests/Rectangle 499.png";
import location from "../../Assests/Group (2).png";
import saveIcon from "../../Assests/Vector.png";
import shareIcon from "../../Assests/Group (4).png";
import rera from "../../Assests/RERA.png";
import home from "../../Assests/home-svgrepo-com 2.png";
import square from "../../Assests/square-ui-svgrepo-com 1 (1).png";
import area from "../../Assests/area-svgrepo-com 1 (1).png";
import hand from "../../Assests/Group (3).png";
import leftArrow from "../../Assests/XMLID_224_ (1).png";

const ProductCard = ({ newData }) => {
  console.log(newData);
  return (
    <div>
      {newData.map((data) => (
        <div
          key={data.id}
          className="card overflow-visible lg:card-side bg-gray-100/80 p-2 border shadow-xl mt-8"
        >
          <figure>
            <img className="img-fluid" src={cardPhoto} alt="Album" />
          </figure>
          <div className="px-3 w-full">
            <div className="flex justify-between items-items">
              <div className="div">
                <h2 className="text-2xl">{data.name}</h2>
                <p className="flex justify-center gap-x-2 items-center mt-2">
                  <span>
                    <img className="img-fluid" src={location} alt="" />
                  </span>
                  <span className="text-xs">
                    Sy No 61, Khata No 354/61, Gottigere, South Bangalore,
                    Bangalore
                  </span>
                </p>

                <div className="flex justify-between items-center mt-8">
                  <div className="flex justify-center items-center gap-4">
                    <img className="img-fluid w-5 h-5" src={home} alt="" />
                    <p>Villa</p>
                  </div>
                  <div className="flex justify-center items-center gap-4">
                    <img className="img-fluid w-5 h-5" src={square} alt="" />
                    <p>{data.square}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-8">
                  <div className="flex justify-center items-center gap-4">
                    <img className="img-fluid w-5 h-5" src={area} alt="" />
                    <p>2000-5000 sq.ft.</p>
                  </div>
                  <div className="flex justify-center items-center gap-4">
                    <img className="img-fluid w-5 h-5" src={hand} alt="" />
                    <p>{data.move}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <img className="img-fluid mt-[-20px] z-30" src={rera} alt="" />
                <div className="flex flex-col justify-center items-center">
                  <p>
                    <img className="img-fluid ml-1" src={saveIcon} alt="" />

                    <span className="text-xs text-center">Save</span>
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p>
                    <img className="img-fluid ml-1" src={shareIcon} alt="" />

                    <span className="text-xs text-center">Share</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="card-actions justify-between mt-8">
              <p className="text-2xl font-bold">{data.price}</p>
              <button className="cardButton flex justify-between items-center gap-x-2 px-4">
                <span>Know more</span>
                <img src={leftArrow} alt="" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
