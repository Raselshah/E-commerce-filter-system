import React from "react";
import share from "../../Assests/Group 389.png";
import saveIcon from "../../Assests/Vector.svg";
import location from "../../Assests/Group (2).png";
import downArrow from "../../Assests/XMLID_224_.png";
import area from "../../Assests/area-svgrepo-com (1) 1.png";
import configure from "../../Assests/square-ui-svgtrepo-com 1 (1).png";
import space from "../../Assests/area-svgrepo-com 1 (1).png";
import typeIcon from "../../Assests/Vector (2).png";
import hand from "../../Assests/Group (11).png";
import tower from "../../Assests/Frame 343.png";
import locality from "../../Assests/Group (12).png";
import rera from "../../Assests/RERA.png";
import maps from "../../Assests/Mapsicle Map.png";
import circle from "../../Assests/Color.png";
import logo from "../../Assests/Ellipse 32.png";
import badge from "../../Assests/Grodfsup.png";
import reactAngle from "../../Assests/Rectangle 450.png";
import reactAngle2 from "../../Assests/Rectangle 452.png";
import leftArrow from "../../Assests/Group 536.png";
import rightArrow from "../../Assests/Group 535.png";
import bulding from "../../Assests/fdg.png";
import bnkSvave from "../../Assests/badge-rank-svgrepo-com 2.png";
import swimming from "../../Assests/sdfs.png";
import garden from "../../Assests/park-svgrepo-com 1.png";
import parking from "../../Assests/parking-svgrepo-com 1.png";
import kids from "../../Assests/kids-svgrepo-com 1.png";
import water from "../../Assests/asf.png";
import play from "../../Assests/football-svgrepo-com 1.png";
import gym from "../../Assests/gym-svgrepo-com 1.png";
import cc from "../../Assests/Grouzsfp (1).png";
import biometric from "../../Assests/fingerprint-security-svgrepo-com 1.png";
import lifeService from "../../Assests/lift-svgrepo-com 1.png";
import generator from "../../Assests/generator-electricity-electric-electrical-energy-svgrepo-com 1.png";
import strem from "../../Assests/Group 414.png";
import waste from "../../Assests/waste-svgrepo-com 1.png";
import fire from "../../Assests/sprinkler-svgrepo-com 1.png";
import floor from "../../Assests/23BHK-G-floor-plan-wb 4.png";

import upArrow from "../../Assests/up-arrow-svgrepo-com 8.png";
import "../Style/Style.css";

const DetailsPage = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="max-w-screen-2xl px-12 mx-auto mt-14">
      <div className="flex justify-between px-12 items-center">
        <div className="div">
          <div className="flex gap-x-4">
            <h2 className="text-3xl font-semibold">Godrej Properties</h2>
            <img src={saveIcon} alt="" />
            <img src={share} alt="" />
          </div>
          <div className="mt-2">
            <p className="flex justify-start gap-x-2 items-center">
              <span>
                <img src={location} alt="" />
              </span>
              <span>
                {" "}
                Sr. No. 29, Opp. Balewadi Stadium, Mumbai-Bangalore Highway,
                Balewadi, Pune
              </span>
            </p>
            <button className="btn btn-xs bg-gray-100 border-none mt-4">
              Ready To Move
            </button>
          </div>
        </div>
        <div className="div">
          <h2 className="text-2xl font-semibold">₹ 1 Cr - 2.45 Cr</h2>
          <p className="mt-2">1,2,3,4 BHK Apartments</p>
          <button className="mt-2 btn btn-sm text-white btn-secondary">
            I’m Interested
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 px-12 gap-3 justify-center items-center mt-8">
        <div className="col-span-2 w-full h-full">
          <img className="img-fluid w-full h-full" src={reactAngle} alt="" />
        </div>
        <div className="flex flex-col gap-y-3 w-full h-full">
          <img className="img-fluid w-full h-full" src={reactAngle2} alt="" />
          <img className="img-fluid w-full h-full" src={reactAngle2} alt="" />
        </div>
      </div>
      <div
        className={`flex justify-between px-6 items-center sticky  top-16 bg-white z-30 py-3 `}
      >
        <div className="div">
          <div className="flex gap-x-3">
            <h2 className="text-3xl font-semibold">Godrej Properties</h2>
            <img src={saveIcon} alt="" />
            <img src={share} alt="" />
          </div>
          <div className="mt-2">
            <button className="btn btn-xs bg-gray-100 border-none mt-4">
              Ready possession
            </button>
          </div>
        </div>
        <div className="div">
          <h2 className="text-2xl font-semibold">₹ 1 Cr - 2.45 Cr</h2>

          <button className="mt-2 btn btn-sm text-white btn-secondary">
            I’m Interested
          </button>
        </div>
      </div>
      <div className="border rounded-lg px-6 detailsPage py-4 mt-10">
        <h2 className="text-3xl font-semibold text-primary">
          About the property
        </h2>
        <div className="detailsPageLine"></div>

        <p className="text-xl mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including mor....
        </p>
        <button className="flex justify-center items-center gap-6 mx-auto mt-2">
          <span className="text-xl text-primary">Read More</span>
          <span>
            <img src={downArrow} alt="" />
          </span>
        </button>
      </div>

      <div className="border rounded-lg px-6 py-4 detailsPage mt-10">
        <h2 className="text-3xl font-semibold text-primary">Overview</h2>
        <div className="detailsPageLineTwo"></div>
        <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-8 mt-6">
          <div className="flex flex-col justify-center items-center">
            <img src={area} alt="" />
            <h2 className="mt-2 text-xl font-semibold">Project Area</h2>
            <p className="mt-2">3 Acres(60% open)</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={configure} alt="" />
            <h2 className="mt-2 text-xl font-semibold">Configration</h2>
            <p className="mt-2">3-4.5 BHK</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={space} alt="" />
            <h2 className="mt-2 text-xl font-semibold">
              Space(Super buildup area)
            </h2>
            <p className="mt-2">2500 - 5000 Sq.ft</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={typeIcon} alt="" />
            <h2 className="mt-2 text-xl font-semibold">Type</h2>
            <p className="mt-2">Appartment</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img src={hand} alt="" />
            <h2 className="mt-2 text-xl font-semibold">Possession starts</h2>
            <p className="mt-2">Jan, 2024</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={tower} alt="" />
            <h2 className="mt-2 text-xl font-semibold">Tower & Units</h2>
            <p className="mt-2">3 Tower, 500 Units</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={locality} alt="" />
            <h2 className="mt-2 text-xl font-semibold">Locality</h2>
            <p className="mt-2">White field</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={rera} alt="" />
            <h2 className="mt-2 text-xl font-semibold">RERA ID</h2>
            <p className="mt-2">D25436871025</p>
          </div>
        </div>
      </div>

      <div className="border rounded-lg px-6 py-4 detailsPage mt-10">
        <h2 className="text-3xl font-semibold text-primary">Specification</h2>
        <div className="detailsPageLineTwo"></div>

        <p className="text-xl mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including mor....
        </p>
        <button className="flex justify-center items-center gap-6 mx-auto mt-2">
          <span className="text-xl text-primary">Read More</span>
          <span>
            <img src={downArrow} alt="" />
          </span>
        </button>
      </div>

      <div className="border rounded-lg px-6 py-6 detailsPage mt-10 ">
        <h2 className="text-3xl font-semibold text-primary">Floor Plan</h2>
        <div className="detailsPageLineTwo"></div>
        <div className="mt-6 shadow-lg border-2 rounded-lg bg-white mx-32">
          <div className="grid grid-cols-5 p-6">
            <button className="btn bg-primary w-36 text-white leading-5">
              1 BHK Apartment
            </button>
          </div>
          <div className="border-b-2"></div>

          <img className="mx-auto py-6" src={floor} alt="" />

          <div className="flex justify-between items-center p-6">
            <div className="div">
              <h2 className="text-[#A0A0A0]">Super Built-up Area</h2>
              <p>700 Sq.ft</p>
            </div>
            <div className="div">
              <h2 className="text-[#A0A0A0]">Per Sq.ft Price</h2>
              <p>₹ 5.02 K </p>
            </div>
            <button className="bg-primary px-6 py-1 rounded-md text-white font-semibold">
              ₹ 1.2 Cr
            </button>
          </div>
        </div>
      </div>

      <div className="border rounded-lg px-4 py-4 detailsPage mt-10">
        <h2 className="text-3xl font-semibold text-primary">Amenities</h2>
        <div className="detailsPageLineTwo"></div>
        <div className="grid grid-cols-7 justify-between items-center mt-6 px-6 gap-y-12">
          <div className="flex flex-col justify-center items-center gap-y-4">
            <img src={swimming} alt="" />
            <p>Swimming pool</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-4">
            <img src={garden} alt="" />
            <p>Garden</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-4">
            <img src={parking} alt="" />
            <p>Parking</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-4">
            <img src={kids} alt="" />
            <p>Kids Play Area</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-4">
            <img src={water} alt="" />
            <p>24 Hr Water</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-4">
            <img src={play} alt="" />
            <p>Play Ground</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-4">
            <img src={gym} alt="" />
            <p>Gym</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-4">
            <img src={cc} alt="" />
            <p>Security Cameras</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-4">
            <img src={biometric} alt="" />
            <p>Biometric Entry</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-4">
            <img src={lifeService} alt="" />
            <p>Lift Service</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-4">
            <img src={generator} alt="" />
            <p>Generator Backup</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-4">
            <img src={strem} alt="" />
            <p>Steam room</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-4">
            <img src={waste} alt="" />
            <p>Waste Management</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-4">
            <img src={fire} alt="" />
            <p>Fire Sprinklers</p>
          </div>
        </div>
        <button className="flex justify-center mx-auto mt-6 text-primary text-lg">
          <span>View 30 More</span>
        </button>
      </div>
      <div className="border rounded-lg px-6 py-4 detailsPage mt-10">
        <h2 className="text-3xl font-semibold text-primary">
          Near by localites
        </h2>
        <div className="detailsPageLine"></div>
        <div className="grid grid-cols-3 px-12 mt-8 gap-x-12">
          <div className="w-full">
            <div className="btn btn-md flex justify-start gap-x-6 bg-white hover:bg-white hover:border-primary hover:text-primary border-gray-200 w-full">
              <span>
                <img src={circle} alt="" />
              </span>
              <span>Hospitals</span>
            </div>
          </div>
          <div className="col-span-2 w-full">
            <img src={maps} alt="" />
          </div>
        </div>
      </div>

      <div className="border rounded-lg px-6 py-4 detailsPage mt-10">
        <h2 className="text-3xl font-semibold text-primary">About Builder</h2>
        <div className="detailsPageLineTwo"></div>
        <div className="grid grid-cols-3 py-6">
          <div className="div">
            <div className="flex justify-start items-center gap-x-2 mt-2 px-4">
              <img src={logo} alt="" />
              <div className="div">
                <h2 className="flex justify-center items-center gap-x-2">
                  Probident Pvt.Ltd{" "}
                  <span>
                    {" "}
                    <img src={badge} alt="" />
                  </span>{" "}
                </h2>
                <p>Banglore</p>

                <div className="rating mt-2">
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center gap-x-12 mt-6 px-4">
              <div className="">
                <h2 className="text-[#939393]">No of projects</h2>
                <div className="flex justify-start items-center mt-3 gap-x-2">
                  <img src={bulding} alt="" />
                  <p>10</p>
                </div>
              </div>
              <div className="">
                <h2 className="text-[#939393]">Est Year</h2>
                <div className="flex justify-start items-center mt-3 gap-x-2">
                  <img src={bnkSvave} alt="" />
                  <p>1998</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <p className="leading-8">
              Example para It is a long anyword established fact that a reader
              will be distracted by the readable content of a page when looking
              at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here Content here, for env The point of
              using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here Content here, for env 'Content here, content here
              Content here, for envio as opposed to using 'Content here, content
              here Content here as..
            </p>
          </div>
        </div>
      </div>

      <div className="div">
        <h2 className="text-3xl text-primary mt-8 ml-12">You may also like</h2>
        <div className="grid grid-cols-3 gap-8 justify-between items-center mt-6">
          <div className="card w-full bg-base-100 border shadow-xl">
            <figure className="px-3 pt-3">
              <img
                src="https://placeimg.com/400/225/arch"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="m-3">
              <div className="div">
                <h2 className="text-2xl">Godrej Properties</h2>
                <p className="flex text-lg justify-start items-center px-1">
                  <span>
                    <img src="" alt="" />
                  </span>
                  Viman Nagar, Pune
                </p>
                <button className="text-xs btn btn-xs bg-[#EAEAEA] border-none px-3 mt-2">
                  Ready To Move
                </button>
              </div>
              <h2 className="flex justify-start items-center px-1 mt-2">
                <span>
                  <img src="" alt="" />
                </span>
                2, 3 ,4 BHK Apartments
              </h2>
              <div className="flex justify-between items-center mt-2">
                <h2 className="flex justify-start items-center px-1">
                  <span>
                    <img src="" alt="" />
                  </span>
                  2000-5000 Sq. Ft
                </h2>

                <h2 className="flex justify-start items-center text-2xl px-1">
                  <span>
                    <img src="" alt="" />
                  </span>
                  ₹ 70 L - 1 Cr
                </h2>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 bg-[#FFEDE1]">
              <h2 className="flex justify-start items-center px-1">
                <span>
                  <img src="" alt="" />
                </span>
                Ayan Kumar
              </h2>
            </div>
          </div>
        </div>

        <div className="flex justify-end ml-auto">
          <div className="div">
            <div className="flex px-2 gap-2">
              <button>
                <img src={leftArrow} alt="" />
              </button>
              <button>
                <img src={rightArrow} alt="" />
              </button>
            </div>
            <button
              onClick={scrollToTop}
              className="btn bg-[#BFF5FF] border-none mt-8 flex justify-end ml-auto"
            >
              <img src={upArrow} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
