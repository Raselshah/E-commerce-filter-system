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
import "../Style/Style.css";

const DetailsPage = () => {
  return (
    <div className="max-w-screen-2xl px-12 mx-auto mt-14">
      <div className="flex justify-between items-center">
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
        <div className="grid grid-cols-4 gap-6 mt-6">
          <div className="flex flex-col justify-center items-center">
            <img src={area} alt="" />
            <p className="mt-2">Project Area</p>
            <p className="mt-2">3 Acres(60% open)</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={configure} alt="" />
            <p className="mt-2">Configration</p>
            <p className="mt-2">3-4.5 BHK</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={space} alt="" />
            <p className="mt-2">Space(Super buildup area)</p>
            <p className="mt-2">2500 - 5000 Sq.ft</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={typeIcon} alt="" />
            <p className="mt-2">Type</p>
            <p className="mt-2">Appartment</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img src={hand} alt="" />
            <p className="mt-2">Possession starts</p>
            <p className="mt-2">Jan, 2024</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={tower} alt="" />
            <p className="mt-2">Tower & Units</p>
            <p className="mt-2">3 Tower, 500 Units</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={locality} alt="" />
            <p className="mt-2">Locality</p>
            <p className="mt-2">White field</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={rera} alt="" />
            <p className="mt-2">RERA ID</p>
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

      <div className="border rounded-lg px-6 py-4 detailsPage mt-10">
        <h2 className="text-3xl font-semibold text-primary">Floor Plan</h2>
        <div className="detailsPageLineTwo"></div>
        <div className="div">
          <h2>hello</h2>
        </div>
      </div>

      <div className="border rounded-lg px-6 py-4 detailsPage mt-10">
        <h2 className="text-3xl font-semibold text-primary">Amenities</h2>
        <div className="detailsPageLineTwo"></div>
        <div className="div">
          <h2>hello</h2>
        </div>
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
        <div className="grid grid-cols-3">
          <div className="div">
            <div className="flex justify-start items-center gap-x-2 mt-6 px-4">
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
              <div className="div">
                <h2>No of projects</h2>
              </div>
              <div className="div">
                <h2>Est Year</h2>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <p>
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
    </div>
  );
};

export default DetailsPage;
