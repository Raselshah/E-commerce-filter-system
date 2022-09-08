import React, { useEffect, useState } from "react";
import { dataList, buttonList } from "./dataList";
import leftIcon from "../../Assests/XMLID_2224_.png";
import buttonIcon from "../../Assests/Group.png";
import downKey from "../../Assests/XMLID_224_.png";
import "../Style/Style.css";
import ProductCard from "./ProductCard.js";
import MultiRangeSlider from "./MultiRangeSlider";

const FilterPage = () => {
  const [data, setData] = useState(dataList);
  const [filterButton, setFilterButton] = useState(buttonList);
  const [result, setResultsFound] = useState("");

  const [bhk, setBhk] = useState("");

  const [checkBox, setCheckBox] = useState([
    {
      id: 1,
      search: "Appartment",
      check: false,
    },
    {
      id: 2,
      search: "CasaGrand Hazen",
      check: false,
    },
    {
      id: 3,
      search: "Residential Plots",
      check: false,
    },
    {
      id: 4,
      search: "Studio",
      check: false,
    },
    {
      id: 5,
      search: "Duplex",
      check: false,
    },
    {
      id: 6,
      search: "Villa",
      check: false,
    },
    {
      id: 7,
      search: "Agricultural Land",
      check: false,
    },
  ]);

  const [possessionCheckBox, setPossessionCheckBox] = useState([
    {
      _id: 8,
      search: "Ready to move",
      check: false,
    },
    {
      _id: 9,
      search: "CasaGrand Hazen",
      check: false,
    },
    {
      _id: 10,
      search: "New Launch",
      check: false,
    },
  ]);

  const handlePossessionCheckBox = (id) => {
    const checkValue = possessionCheckBox;
    const changedCheckValue = checkValue.map((item) =>
      item.search.toLowerCase() === id.toLowerCase()
        ? { ...item, check: !item.check }
        : item
    );
    setPossessionCheckBox(changedCheckValue);
  };
  const handleCheckBox = (id) => {
    console.log(id);
    const checkValue = checkBox;
    const changedCheckValue = checkValue.map((item) =>
      item.search.toLowerCase() === id.toLowerCase()
        ? { ...item, check: !item.check }
        : item
    );
    setCheckBox(changedCheckValue);
  };

  const [min, setMin] = useState(200);
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

  const handleBhk = (value) => {
    // bhkButton filtering data
    let updateData = data.filter((data) => data.square === value);

    if (updateData.length === 0) {
      setResultsFound(false);
    }
    setData(updateData);
  };

  const applyFilter = () => {
    let updateData = dataList;

    // checkBox filtering data
    const checkData = checkBox
      .filter((item) => item.check)
      .map((item) => item.search.toLowerCase());

    if (checkData.length) {
      updateData = updateData.filter((item) =>
        checkData.includes(item.name.toLocaleLowerCase())
      );
    }

    // possessionCheckBox filtering data
    const possessionCheck = possessionCheckBox
      .filter((item) => item.check)
      .map((item) => item.search.toLowerCase());

    if (possessionCheck.length) {
      updateData = updateData.filter((item) =>
        possessionCheck.includes(item.move.toLowerCase())
      );
    }

    // Price Range filtering data
    updateData = updateData.filter(
      (item) => item.price >= min && item.price <= max
    );

    setData(updateData);
    !updateData.length ? setResultsFound(false) : setResultsFound(true);
  };
  useEffect(() => {
    applyFilter();
  }, [checkBox, min, max, bhk, possessionCheckBox]);

  return (
    <div className="max-w-screen-2xl px-8 mt-10 mx-auto">
      <h2 className="flex gap-x-2 justify-start items-center">
        <span>
          <img src={leftIcon} alt="" />
        </span>
        <span className="text-lg">Home/Filter page</span>
      </h2>
      <div className="grid grid-cols-3 gap-x-32 mt-10">
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

          <div className="products flex flex-col gap-4 pl-16 mt-2">
            {checkBox.map((item) => (
              <div key={item.id} className="product">
                <div
                  onClick={() => handleCheckBox(item.search)}
                  className="productInput"
                >
                  <input type="checkbox" id={item.id} />
                  {item.check && (
                    <>
                      <div className="productInputBefore"></div>
                      <div className="productInputAfter">✔</div>
                    </>
                  )}
                </div>
                <label htmlFor={item.id}>{item.search}</label>
              </div>
            ))}
          </div>

          <h2 className="mt-5 text-xl mb-4"> BHK Type</h2>
          <div className="grid grid-cols-3 gap-2 justify-between items-center">
            {buttonList.map((btn) => (
              <button
                key={btn.id}
                onClick={() => handleBhk(btn.value)}
                className="btn btn-sm btn-outline border-primary hover:bg-primary hover:border-none rounded-full text-primary hover:text-white"
              >
                <span className="text-xs">{btn.value}</span>
              </button>
            ))}

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
              onChange={({ min, max }) => console.log(min, max)}
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

          <div className="products flex flex-col gap-4 pl-16 mt-2">
            {possessionCheckBox.map((items) => (
              <div key={items._id} className="product">
                <div
                  onClick={() => handlePossessionCheckBox(items.search)}
                  className="productInput"
                >
                  <input type="checkbox" id={items._id} />
                  {items.check && (
                    <>
                      <div className="productInputBefore"></div>
                      <div className="productInputAfter">✔</div>
                    </>
                  )}
                </div>
                <label htmlFor={items._id}>{items.search}</label>
              </div>
            ))}
          </div>

          {/* {possessionCheckBox.map((item) => (
            <div key={item.id} className="pl-16 mt-2">
              <button
                onClick={() => handlePossessionCheckBox(item.id)}
                className=""
              >
                <input
                  type="checkbox"
                  value={item.search}
                  id={item.id}
                  class="default:ring-2"
                />
                <label className="pl-4" htmlFor={item.search}>
                  {item.search}
                </label>
              </button>
            </div>
          ))} */}

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
          <div className="flex justify-start gap-x-3 items-center mt-[-50px]">
            {" "}
            <h2 className="text-2xl text-secondary">
              Properties <span className="text-accent">for you</span>
            </h2>
            <div className="b-left"></div>
            <p className="text-2xl">{data.length} results</p>
          </div>

          <div className="mt-4 flex gap-x-4 flex-row">
            {checkBox?.map((item) => {
              if (item.check) {
                return (
                  <div key={item.id} className="">
                    <button
                      onClick={() => handleCheckBox(item.id)}
                      className="btn btn-xs flex justify-between items-center gap-x-3 bg-primary border-none"
                      key={item.id}
                    >
                      <span className="text-white">{item.search}</span>
                      <span className="text-white">X</span>
                    </button>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
          {result ? "" : <p className="text-center">No result found...</p>}
          <ProductCard newData={data} />
        </div>
      </div>
    </div>
  );
};

export default FilterPage;
