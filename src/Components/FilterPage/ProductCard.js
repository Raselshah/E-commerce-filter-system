import React, { useState } from "react";
import cardPhoto from "../../Assests/Rectangle 499.png";
import location from "../../Assests/Group (2).png";
import saveIcon from "../../Assests/Vector.svg";
import shareIcon from "../../Assests/Group (4).png";
import rera from "../../Assests/RERA.png";
import home from "../../Assests/home-svgrepo-com 2.png";
import square from "../../Assests/square-ui-svgrepo-com 1 (1).png";
import area from "../../Assests/area-svgrepo-com 1 (1).png";
import hand from "../../Assests/Group (3).png";
import leftArrow from "../../Assests/XMLID_224_ (1).png";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ newData }) => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState();

  // const handleColorChange = (id) => {
  //   setToggle(id);
  // };
  const [wishlist, setWishlist] = useState([]);
  const handleColorChange = (id) => {
    const check_wishlist = wishlist.find((item) => item.id === id);
    if (!check_wishlist) {
      const product = newData.find((item) => item.id === id);
      setWishlist([...wishlist, product]);
    } else {
      setWishlist(wishlist.filter((item) => item.id !== id));
    }
  };

  return (
    <div>
      {newData.map((data) => (
        <div
          key={data.id}
          className="card overflow-visible lg:card-side bg-gray-100/80 p-2 border mt-8"
        >
          <figure>
            <img className="img-fluid" src={cardPhoto} alt="Album" />
          </figure>
          <div className="pl-3 w-full">
            <div className="flex justify-between items-items">
              <div className="w-full">
                <h2 className="text-2xl">{data.name}</h2>
                <p className="flex justify-start gap-x-2 items-center mt-2">
                  <span>
                    <img className="img-fluid" src={location} alt="" />
                  </span>
                  <span className="text-xs">
                    Sy No 61, Khata No 354/61, Gottigere, South Bangalore,
                    Bangalore
                  </span>
                </p>

                <div className="flex  justify-between items-center">
                  <div className="flex justify-start flex-col items-start mt-8 gap-6">
                    <div className="flex justify-start items-center gap-4">
                      <img className="img-fluid w-5 h-5" src={home} alt="" />
                      <p>Villa</p>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                      <img className="img-fluid w-5 h-5" src={area} alt="" />
                      <p>{data.area} sq.ft.</p>
                    </div>
                  </div>
                  <div className="flex justify-start flex-col items-start mt-8 gap-6">
                    <div className="flex justify-center items-center gap-4">
                      <img className="img-fluid w-5 h-5" src={square} alt="" />
                      <p>{data.square}</p>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                      <img className="img-fluid w-5 h-5" src={hand} alt="" />
                      <p>{data.move}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <img className="img-fluid mt-[-20px] z-30" src={rera} alt="" />
                <div className="flex flex-col justify-center items-center">
                  <div
                    onClick={() => {
                      handleColorChange(data.id);
                    }}
                    className="cursor-pointer flex flex-col justify-center items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill={`${
                        wishlist.find((w) => w.id === data.id)
                          ? "LightSalmon"
                          : "none"
                      }`}
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`h-8 text-primary ${
                        wishlist.find((w) => w.id === data.id) &&
                        "text-[#FFA07A]"
                      } img-fluid ml-1`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                      />
                    </svg>

                    {/* <img
                      className={`${
                        wishlist.find((w) => w.id === data.id) &&
                        "bg-orange-500"
                      } img-fluid ml-1`}
                      src={saveIcon}
                      alt=""
                    /> */}

                    <span className="text-xs text-center">Save</span>
                  </div>
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
              <p className="text-2xl font-bold">₹ {data.price} L</p>
              <button
                onClick={() => navigate("/details")}
                className="cardButton flex justify-between items-center gap-x-2 px-4"
              >
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
