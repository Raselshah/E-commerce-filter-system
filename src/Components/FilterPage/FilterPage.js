import React, { useState } from "react";
import leftIcon from "../../Assests/XMLID_2224_.png";
import buttonIcon from "../../Assests/Group.png";
import downKey from "../../Assests/XMLID_224_.png";
import "../Style/Style.css";
import MultiRangeSlider from "./MultiRangeSlider";
import ProductCard from "./ProductCard";

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

  const [possessionCheckBox, setPossessionCheckBox] = useState([
    {
      id: 1,
      name: "Ready to move",
      check: false,
    },
    {
      id: 2,
      name: "Under Construction",
      check: false,
    },
    {
      id: 3,
      name: "New Launch",
      check: false,
    },
  ]);
  const filterData = [...checkBox, ...possessionCheckBox];
  const handlePossessionCheckBox = (id) => {
    setPossessionCheckBox((prev) => {
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

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(4000);
  const extremeMin = 0;
  const extremeMax = 5000;

  const handleMinChange = (e) => {
    let val = e.target.value;
    if (val > max && !!max) {
      setMin(max - 1);
      return;
    }
    if (val < extremeMin) {
      setMin(extremeMin);
      return;
    }
    setMin(val);
    return;
  };

  const handleMaxChange = (e) => {
    if (e.target.value < min && !!min) {
      setMax(min + 1);
      return;
    }
    if (e.target.value > extremeMax) {
      setMax(extremeMax);
      return;
    }
    setMax(e.target.value);
    return;
  };
  return (
    <div className="max-w-screen-2xl px-14 mt-10 mx-auto">
      <h2 className="flex gap-x-2 justify-start items-center">
        <span>
          <img src={leftIcon} alt="" />
        </span>
        <span className="text-lg">Home/Filter page</span>
      </h2>
      <div className="grid grid-cols-3 gap-16 mt-10">
        <div className="border-2 w-full rounded-lg px-3 pb-12 filter-page">
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
          <h2 className="mt-5 text-xl mb-4">Property Type</h2>

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

          <h2 className="mt-5 text-xl mb-4"> BHK Type</h2>
          <div className="grid grid-cols-3 gap-2 justify-between items-center">
            <button className="btn btn-sm btn-outline border-primary hover:bg-primary hover:border-none rounded-full text-primary hover:text-white">
              <span className="text-xs">+ 1 RK/1 BHK</span>
            </button>
            <button className="btn btn-sm btn-outline border-primary hover:bg-primary hover:border-none rounded-full text-primary hover:text-white">
              <span className="text-xs">+ 2 BHK</span>
            </button>
            <button className="btn btn-sm btn-outline border-primary hover:bg-primary hover:border-none rounded-full text-primary hover:text-white">
              <span className="text-xs">+ 3 BHK</span>
            </button>
            <button className="btn btn-sm btn-outline border-primary hover:bg-primary hover:border-none rounded-full text-primary hover:text-white">
              <span className="text-xs">+ 4 BHK</span>
            </button>
            <button className="btn btn-sm btn-outline border-primary hover:bg-primary hover:border-none rounded-full text-primary hover:text-white">
              <span className="text-xs">+ 5 BHK</span>
            </button>
            <button className="flex justify-between items-center text-primary hover:text-white">
              <span className="text-md">See more</span>
              <span>
                <img className="w-3 h-2" src={downKey} alt="" />
              </span>
            </button>
          </div>

          <div className="">
            <h2 className="mt-5 text-xl mb-4">Price Range</h2>

            <MultiRangeSlider
              valueRange={[200, 5000]}
              minVal={min ? min : 0}
              maxVal={max ? max : 0}
              setMinVal={setMin}
              setMaxVal={setMax}
              default="0"
              onChange={({ min, max }) =>
                console.log(`min = ${min}, max = ${max}`)
              }
            />

            <div className="flex justify-center items-center gap-4 mt-4">
              <div className="w-full">
                {" "}
                <label for="name" style={{ color: "#212121" }}>
                  Min Budget
                </label>
                <input
                  type="number"
                  id="name"
                  name="name"
                  required
                  className="w-full"
                  minLength="4"
                  maxLength="8"
                  size="10"
                  value={min}
                  onChange={handleMinChange}
                />
              </div>
              <div className="w-full">
                <label for="name" style={{ color: "#212121" }}>
                  Max Budget
                </label>

                <input
                  type="number"
                  id="name"
                  name="name"
                  required
                  className="w-full"
                  minLength="4"
                  maxLength="8"
                  size="10"
                  value={max}
                  onChange={handleMaxChange}
                />
              </div>
            </div>
          </div>
          <h2 className="mt-5 text-xl mb-4">Possession Status</h2>

          {possessionCheckBox.map((item) => (
            <div key={item.id} className="pl-16 mt-2">
              <button
                onClick={() => handlePossessionCheckBox(item.id)}
                className=""
              >
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

          <div tabIndex={0} className="collapse collapse-arrow ">
            <div className="collapse-title text-xl">Amenities</div>
            <div className="collapse-content">
              <p>Amenities</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-arrow ">
            <div className="collapse-title text-xl">Furnishing</div>
            <div className="collapse-content">
              <p>Furnishing</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-arrow ">
            <div className="collapse-title text-xl">Facing</div>
            <div className="collapse-content">
              <p>Facing</p>
            </div>
          </div>
        </div>

        <div className="col-span-2 card-area w-full">
          <div className="flex justify-start gap-x-12 items-center mt-[-50px]">
            {" "}
            <h2 className="text-2xl text-secondary">Properties for you</h2>
            <p className="text-xl">1720 results</p>
          </div>
          <div className="mt-4 flex gap-x-4 flex-row">
            {filterData?.map((item) => {
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
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default FilterPage;
