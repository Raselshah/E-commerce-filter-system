import React, { useState } from "react";
import leftIcon from "../../Assests/XMLID_2224_.png";
import buttonIcon from "../../Assests/Group.png";

const FilterPage = () => {
  const [checkBox, setCheckBox] = useState([
    {
      id: 1,
      name: "Appartment",
      check: false,
    },
    {
      id: 2,
      name: "Independent House",
      check: false,
    },
    {
      id: 3,
      name: "Residential Plots",
      check: false,
    },
    {
      id: 4,
      name: "Studio",
      check: false,
    },
    {
      id: 5,
      name: "Duplex",
      check: false,
    },
    {
      id: 6,
      name: "Villa",
      check: false,
    },
    {
      id: 7,
      name: "Agricultural Land",
      check: false,
    },
  ]);

  const handleCheckBox = (id) => {
    setCheckBox((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, check: !item.check };
        } else if (id === 0) {
          return item.check === false;
        } else {
          return { ...item };
        }
      });
    });
  };
  console.log(checkBox);
  return (
    <div className="max-w-screen-2xl px-14 mt-10">
      <h2 className="flex gap-x-2 justify-start items-center">
        <span>
          <img src={leftIcon} alt="" />
        </span>
        <span className="text-lg">Home/Filter page</span>
      </h2>
      <div className="grid grid-cols-3 gap-16 mt-10">
        <div className="border-2 rounded-lg px-3">
          <div className="flex justify-between items-center mt-4 border-b">
            <h2 className="text-2xl text-primary mb-2">Filters</h2>
            <button className="btn btn-outline hover:bg-primary hover:border-none flex justify-between items-center gap-x-2 border-primary btn-xs">
              <span className="">
                <img className="" src={buttonIcon} alt="" />
              </span>
              <span
                onClick={() => handleCheckBox(0)}
                className="text-xs text-primary hover:text-white"
              >
                Clear Filter
              </span>
            </button>
          </div>
          <h2 className="mt-5 text-lg">Property Type</h2>

          {checkBox.map((item) => (
            <div key={item.id} className="pl-16 mt-2">
              <button onClick={() => handleCheckBox(item.id)} className="">
                <input
                  type="checkbox"
                  value={item.name}
                  id={item.id}
                  class="default:ring-2"
                />
                <label className="pl-4" htmlFor={item.name}>
                  {item.name}
                </label>
              </button>
            </div>
          ))}
        </div>
        <div className="col-span-2">
          <div className="flex justify-start gap-x-12 items-center mt-[-50px]">
            {" "}
            <h2 className="text-2xl text-secondary">Properties for you</h2>
            <p className="text-xl">1720 results</p>
          </div>
          <div className="mt-4 flex gap-x-4 flex-row">
            {checkBox.map((item) => {
              if (item.check) {
                return (
                  <div className="">
                    <button
                      onClick={() => handleCheckBox(item.id)}
                      className="btn btn-xs flex justify-between items-center gap-x-3 bg-primary border-none"
                      key={item.id}
                    >
                      <span className="text-white">{item.name}</span>
                      <span className="text-white">X</span>
                    </button>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPage;
