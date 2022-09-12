import React, { useEffect, useReducer, useState } from "react";
import {
  dataList,
  buttonList,
  propertyList,
  positionStatus,
  Amenities,
  Furnishing,
  Facing,
} from "./dataList";
import leftIcon from "../../Assests/XMLID_2224_.png";
import buttonIcon from "../../Assests/Group.png";
import downKey from "../../Assests/XMLID_224_.png";
import select from "../../Assests/vvb.png";
import "../Style/Style.css";
import ProductCard from "./ProductCard.js";
import MultiRangeSlider from "./MultiRangeSlider";
import Pagination from "../Pagination/Pagination";
import MultiAreaSlider from "./MultiAreaSlider";
const FilterPage = () => {
  const [data, setData] = useState(dataList);
  const [result, setResultsFound] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(3);

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;

  const currentData = data?.slice(indexOfFirstData, indexOfLastData);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [checkBox, setCheckBox] = useState(propertyList);

  const [possessionCheckBox, setPossessionCheckBox] = useState(positionStatus);

  const [amenities, setAmenities] = useState(Amenities);
  const [furnishing, setFurnishing] = useState(Furnishing);
  const [facing, setFacing] = useState(Facing);

  const [buttonAllList, setButtonAllList] = useState(buttonList.slice(0, 5));

  const handlePossessionCheckBox = (id) => {
    const checkValue = possessionCheckBox;
    const changedCheckValue = checkValue.map((item) =>
      item.search.toLowerCase() === id.toLowerCase()
        ? { ...item, check: !item.check }
        : item
    );
    setPossessionCheckBox(changedCheckValue);
  };
  const setButtonAllListA = (id) => {
    console.log(id);
    const checkValue = buttonAllList;
    const changedCheckValue = checkValue.map((item) =>
      item.value.toLowerCase() === id.toLowerCase()
        ? { ...item, check: !item.check }
        : item
    );
    console.log(changedCheckValue);
    setButtonAllList(changedCheckValue);
  };
  const handleCheckBox = (id) => {
    const checkValue = checkBox;
    const changedCheckValue = checkValue.map((item) =>
      item.search.toLowerCase() === id.toLowerCase()
        ? { ...item, check: !item.check }
        : item
    );
    setCheckBox(changedCheckValue);
  };

  const [min, setMin] = useState(100000);
  const [max, setMax] = useState(1000000);
  const extremeMin = 100000;
  const extremeMax = 1000000;
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

  const [minArea, setMinArea] = useState(200);
  const [maxArea, setMaxArea] = useState(5000);
  const extremeMinArea = 200;
  const extremeMaxArea = 5000;

  const handleMinAreaChange = (e) => {
    let val = e.target.value;
    if (val > maxArea && !!maxArea) {
      setMinArea(maxArea - 1);
      return;
    }
    if (val < extremeMinArea) {
      setMinArea(extremeMinArea);
      return;
    }
    setMinArea(val);
    return;
  };

  const handleMaxAreaChange = (e) => {
    if (e.target.value < minArea && !!minArea) {
      setMaxArea(minArea + 1);
      return;
    }
    if (e.target.value > extremeMaxArea) {
      setMaxArea(extremeMaxArea);
      return;
    }
    setMaxArea(e.target.value);
    return;
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

    //  bhkButton filtering data
    const activeCheckData = buttonAllList
      .filter((item) => item.check)
      .map((item) => item.value.toLowerCase());

    console.log(activeCheckData);
    if (activeCheckData.length) {
      updateData = updateData.filter((item) =>
        activeCheckData.includes(item.square.toLocaleLowerCase())
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

    // area filtering data
    updateData = updateData.filter(
      (item) => item.area >= minArea && item.area <= maxArea
    );

    setData(updateData);
    !updateData.length ? setResultsFound(false) : setResultsFound(true);
  };
  useEffect(() => {
    applyFilter();
  }, [checkBox, min, max, possessionCheckBox, minArea, maxArea, buttonAllList]);
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  const handleEmptyData = () => {
    setToggle(!toggle);
    setCheckBox(propertyList);
    setButtonAllList(buttonList);
    setPossessionCheckBox(positionStatus);
    setAmenities(Amenities);
    setFurnishing(Furnishing);
    setFacing(Facing);
    setMin(100000);
    setMax(1000000);
    setMinArea(200);
    setMaxArea(5000);
  };

  return (
    <div className="max-w-screen-2xl px-6 xl:px-12 mt-10 mx-auto">
      <div>
        <h2 className="flex gap-x-2 justify-start items-center">
          <span>
            <img src={leftIcon} alt="" />
          </span>
          <span className="text-lg">Home/Filter page</span>
        </h2>
        <div className="grid grid-cols-3 lg:gap-x-8 xl:gap-x-16 mt-10">
          <div className="border-2 w-full overflow-hidden filter-page  rounded-lg px-3 sticky top-16">
            <div className="flex justify-between items-center mt-4 border-b">
              <h2 className="text-2xl text-primary mb-2">Filters</h2>
              <button
                onClick={() => handleEmptyData()}
                className="btn btn-outline hover:bg-primary hover:border-none flex justify-between items-center gap-x-2 border-primary btn-xs text-primary hover:text-white removeButton"
              >
                <span className="clearButton">
                  
                </span>
                <span className="text-xs ">Clear Filter</span>
              </button>
            </div>

            <div className="overflow-y-scroll filter-page-slide">
              <h2 className="mt-5 text-xl mb-4">Property Type</h2>

              <div className="products flex flex-col gap-2 pl-8 xl:gap-4 xl:pl-16 mt-2">
                {checkBox.map((item) => (
                  <div key={item.id} className="product">
                    <div
                      onClick={() => handleCheckBox(item.search)}
                      className={`productInput ${item.check && "active"}`}
                    >
                      <input className="" type="checkbox" id={item.id} />
                      {item.check && (
                        <>
                          <div className="productInputBefore"></div>
                          <div className="productInputAfter">
                            <img src={select} alt="" />
                          </div>
                        </>
                      )}
                    </div>
                    <label htmlFor={item.id}>{item.search}</label>
                  </div>
                ))}
              </div>

              <h2 className="mt-5 text-xl mb-4"> BHK Type</h2>
              <div className="grid grid-cols-3 gap-x-4 gap-y-4 px-6 xl:gap-x-6 xl:px-8 justify-start items-center">
                {buttonAllList.map((item) => (
                  <div key={item.id} className="">
                    <div onClick={() => setButtonAllListA(item.value)}>
                      <input hidden type="checkbox" id={item.id} />
                    </div>
                    <label
                      className={`${
                        item.check ? "text-white bg-primary" : "text-primary"
                      } btn btn-sm btn-outline w-full border-primary hover:bg-primary hover:border-none rounded-full hover:text-white `}
                      htmlFor={item.id}
                    >
                      {item.value}
                    </label>
                  </div>
                ))}

                {buttonAllList.length === 5 ? (
                  <button
                    onClick={() => setButtonAllList(buttonList)}
                    className="flex justify-between items-center text-primary hover:text-white "
                  >
                    <span className="text-xs xl:text-md text-primary">
                      See more
                    </span>
                    <span>
                      <img className="w-3 h-2" src={downKey} alt="" />
                    </span>
                  </button>
                ) : (
                  <button
                    onClick={() => setButtonAllList(buttonList.slice(0, 5))}
                    className="flex justify-between items-center text-primary hover:text-white"
                  >
                    <span className="text-md text-primary">See less</span>
                    <span>
                      <img className="w-3 h-2" src={downKey} alt="" />
                    </span>
                  </button>
                )}
              </div>
              {/* <div className="grid grid-cols-3 gap-x-4 gap-y-4 px-6 xl:gap-x-6 xl:px-8 justify-start items-center">
                {buttonAllList.map((btn) => (
                  <button
                    disabled={
                      active ? btn.value !== active : btn.value === active
                    }
                    key={btn.id}
                    onClick={() => setActiveButton(btn.value)}
                    className={`${
                      active === btn.value
                        ? "text-white bg-primary"
                        : "text-primary"
                    } btn btn-sm btn-outline w-full border-primary hover:bg-primary hover:border-none rounded-full hover:text-white `}
                  >
                    <span className="text-sm">{btn.value}</span>
                  </button>
                ))}

                {buttonAllList.length === 5 ? (
                  <button
                    onClick={() => setButtonAllList(buttonList)}
                    className="flex justify-between items-center text-primary hover:text-white "
                  >
                    <span className="text-xs xl:text-md text-primary">
                      See more
                    </span>
                    <span>
                      <img className="w-3 h-2" src={downKey} alt="" />
                    </span>
                  </button>
                ) : (
                  <button
                    onClick={() => setButtonAllList(buttonList.slice(0, 5))}
                    className="flex justify-between items-center text-primary hover:text-white"
                  >
                    <span className="text-md text-primary">See less</span>
                    <span>
                      <img className="w-3 h-2" src={downKey} alt="" />
                    </span>
                  </button>
                )}
              </div> */}

              <div className="">
                <h2 className="mt-5 text-xl mb-4">Price Range</h2>

                <MultiRangeSlider
                  valueRange={[100000, 1000000]}
                  minVal={min ? min : 0}
                  maxVal={max ? max : 0}
                  setMinVal={setMin}
                  setMaxVal={setMax}
                  default="0"
                  onChange={({ min, max }) => console.log(min, max)}
                />

                <div className="flex justify-center items-center gap-4 px-4 xl:px-10  mt-6">
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

              {/* area */}
              <div className="">
                <h2 className="mt-5 text-xl mb-4">Area</h2>

                <MultiAreaSlider
                  valueRange={[200, 5000]}
                  minVal={minArea ? minArea : 0}
                  maxVal={maxArea ? maxArea : 0}
                  setMinVal={setMinArea}
                  setMaxVal={setMaxArea}
                  default="0"
                  onChange={({ min, max }) => console.log(min, max)}
                />

                <div className="flex justify-center items-center gap-4 px-4  xl:px-10 mt-6">
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
                      value={minArea}
                      onChange={handleMinAreaChange}
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
                      value={maxArea}
                      onChange={handleMaxAreaChange}
                    />
                  </div>
                </div>
              </div>
              <h2 className="mt-5 text-xl mb-4">Possession Status</h2>

              <div className="products flex flex-col gap-2 xl:gap-4 pl-8 xl:pl-16 mt-2">
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
                          <div className="productInputAfter">
                            <img src={select} alt="" />
                          </div>
                        </>
                      )}
                    </div>
                    <label htmlFor={items._id}>{items.search}</label>
                  </div>
                ))}
              </div>

              <div tabIndex={0} className="collapse collapse-arrow ">
                <div className="collapse-title text-xl">Amenities</div>
                <div className="collapse-content">
                  <div className="products flex flex-col gap-2 xl:gap-4 pl-6 xl:pl-16 mt-2">
                    {amenities.map((item) => (
                      <div key={item.id} className="product">
                        <div
                          onClick={() => handleCheckBox(item.search)}
                          className="productInput"
                        >
                          <input type="checkbox" id={item.id} />
                          {item.check && (
                            <>
                              <div className="productInputBefore"></div>
                              <div className="productInputAfter">
                                <img src={select} alt="" />
                              </div>
                            </>
                          )}
                        </div>
                        <label htmlFor={item.id}>{item.search}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div tabIndex={0} className="collapse collapse-arrow ">
                <div className="collapse-title text-xl">Furnishing</div>
                <div className="collapse-content">
                  <div className="products flex flex-col gap-2 xl:gap-4 pl-6 xl:pl-16 mt-2">
                    {furnishing.map((item) => (
                      <div key={item.id} className="product">
                        <div
                          onClick={() => handleCheckBox(item.search)}
                          className="productInput"
                        >
                          <input type="checkbox" id={item.id} />
                          {item.check && (
                            <>
                              <div className="productInputBefore"></div>
                              <div className="productInputAfter">
                                <img src={select} alt="" />
                              </div>
                            </>
                          )}
                        </div>
                        <label htmlFor={item.id}>{item.search}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div tabIndex={0} className="collapse collapse-arrow ">
                <div className="collapse-title text-xl">Facing</div>
                <div className="collapse-content">
                  <div className="products flex flex-col gap-2 xl:gap-4 pl-6 xl:pl-16 mt-2">
                    {facing.map((item) => (
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
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 w-full">
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
                        onClick={() => handleCheckBox(item.search)}
                        className="btn btn-xs flex justify-between items-center gap-x-3 bg-primary border-none"
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
            <div className="mt-4 flex gap-x-4 flex-row">
              {possessionCheckBox?.map((item) => {
                if (item.check) {
                  return (
                    <div key={item.id} className="">
                      <button
                        onClick={() => handlePossessionCheckBox(item.search)}
                        className="btn btn-xs flex justify-between items-center gap-x-3 bg-primary border-none"
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
            <ProductCard setData={setData} newData={currentData} />

            <Pagination
              currentPage={currentPage}
              dataPerPage={dataPerPage}
              totalData={data.length}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPage;
