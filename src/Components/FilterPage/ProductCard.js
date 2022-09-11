import React, { useState } from "react";
import cardPhoto from "../../Assests/Rectangle 499.png";
import location from "../../Assests/Group (2).png";
import saveIcon from "../../Assests/Vector.png";
import saveIcon2 from "../../Assests/Vector.svg";
import shareIcon from "../../Assests/Group (4).png";
import rera from "../../Assests/RERA.png";
import home from "../../Assests/home-svgrepo-com 2.png";
import square from "../../Assests/square-ui-svgrepo-com 1 (1).png";
import area from "../../Assests/area-svgrepo-com 1 (1).png";
import hand from "../../Assests/Group (3).png";
import leftArrow from "../../Assests/XMLID_224_ (1).png";
import upArrow from "../../Assests/up-arrow-svgrepo-com 8.png";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ newData }) => {
  const navigate = useNavigate();
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
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
                  <h2 className="text-2xl text-[#3D3D3D]">{data.name}</h2>
                  <p className="flex justify-start gap-x-1 items-center mt-2">
                    <img className="img-fluid" src={location} alt="" />

                    <span className="text-xs text-[#7B7B7B]">
                      Sy No 61, Khata No 354/61, Gottigere, South Bangalore,
                      Bangalore
                    </span>
                  </p>

                  <div className="flex justify-around gap-x-2 items-center">
                    <div className="flex justify-start flex-col items-start mt-8 gap-8">
                      <div className="flex justify-start items-center gap-3">
                        <img className="img-fluid w-5 h-5" src={home} alt="" />
                        <p className="text-sm">Villa</p>
                      </div>
                      <div className="flex justify-center items-center gap-3">
                        <img className="img-fluid w-5 h-5" src={area} alt="" />
                        <p className="text-sm">{data.area} sq.ft.</p>
                      </div>
                    </div>
                    <div className="flex justify-start flex-col items-start mt-8 gap-6">
                      <div className="flex justify-center items-center gap-3">
                        <img
                          className="img-fluid w-5 h-5"
                          src={square}
                          alt=""
                        />
                        <p className="text-sm text-[#000000]">{data.square}</p>
                      </div>
                      <div className="flex justify-center items-center gap-3">
                        <img className="img-fluid w-5 h-5" src={hand} alt="" />
                        <p className="text-sm">{data.move}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <img
                    className="img-fluid mt-[-20px] z-30"
                    src={rera}
                    alt=""
                  />
                  <div className="flex flex-col ml-8 justify-end items-center">
                    <div
                      onClick={() => {
                        handleColorChange(data.id);
                      }}
                      className="cursor-pointer flex flex-col justify-end items-center"
                    >
                      {wishlist.find((w) => w.id === data.id) ? (
                        <img src={saveIcon2} alt="" />
                      ) : (
                        <img src={saveIcon} alt="" />
                      )}

                      <span className="text-xs text-center">Save</span>
                    </div>
                  </div>
                  <div className="flex flex-col ml-8 justify-center items-center">
                    <p>
                      <img className="img-fluid ml-1" src={shareIcon} alt="" />

                      <span className="text-xs text-center">Share</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-actions justify-between pl-8 mt-8">
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
      <button
        onClick={scrollToTop}
        className="btn bg-[#BFF5FF] border-none mt-12 flex justify-end ml-auto"
      >
        <img src={upArrow} alt="" />
      </button>
    </>
  );
};

export default ProductCard;
