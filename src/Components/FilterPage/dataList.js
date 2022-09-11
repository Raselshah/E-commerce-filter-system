/*

Property Type - ( Apartment, Independent House, Plot, Studio, Duplex, Villa, Agricultural Land)
BHK Type - ( Studio, 1RK, 1BHK, 2BHK, 3BHK, 4 BHK, 5 BHK, 5+BHK )
Budget -  ( slider start 10 lac to 10+ Cr. )
Possesssion Status - ( Ready to move, Under construction, New Launch )
Area - ( slider start  200 sq.ft.   to  5K+sq.ft. )
Amenities - ( Swimming Pool, Gated Community, Gym, Open Parking, EV Charging, Gas Pipline, Club House)
Furnishing - ( Furnished, Semi-Furnished, Unfurnished)
Facing -   ( North Facing, East Facing, West Facing, South Facing, North - East Facing, North - West Facing, South - East Facing, South - West Facing)

 */
export const Furnishing = [
  {
    id: 20,
    search: "Furnished",
    check: false,
  },
  {
    id: 21,
    search: "Semi-Furnished",
    check: false,
  },
  {
    id: 22,
    search: "Unfurnished",
    check: false,
  },
];

export const Facing = [
  {
    id: 23,
    search: "North Facing",
    check: false,
  },
  {
    id: 24,
    search: "East Facing",
    check: false,
  },
  {
    id: 25,
    search: "South Facing",
    check: false,
  },
  {
    id: 26,
    search: "North - East Facing",
    check: false,
  },
  {
    id: 27,
    search: "North - West Facing",
    check: false,
  },
  {
    id: 28,
    search: "South - East Facing",
    check: false,
  },
  {
    id: 29,
    search: "South - West Facing",
    check: false,
  },
];
export const Amenities = [
  {
    id: 11,
    search: "Swimming Pool",
    check: false,
  },
  {
    id: 12,
    search: "Gated Community",
    check: false,
  },
  {
    id: 13,
    search: "Gym",
    check: false,
  },
  {
    id: 14,
    search: "Open Parking",
    check: false,
  },
  {
    id: 15,
    search: "EV Charging",
    check: false,
  },
  {
    id: 16,
    search: "Villa",
    check: false,
  },
  {
    id: 17,
    search: "Gas Pipline",
    check: false,
  },
  {
    id: 18,
    search: "Club House",
    check: false,
  },
];

export const propertyList = [
  {
    id: 1,
    search: "Apartment",
    check: false,
  },
  {
    id: 2,
    search: "Independent House",
    check: false,
  },
  {
    id: 3,
    search: "Plot",
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
];

export const positionStatus = [
  {
    _id: 8,
    search: "Ready to move",
    check: false,
  },
  {
    _id: 9,
    search: "Under construction",
    check: false,
  },
  {
    _id: 10,
    search: "New Launch",
    check: false,
  },
];

export const dataList = [
  {
    id: 1,
    name: "Apartment",
    location: "Sy No 61, Khata No 354/61, Gottigere, South Bangalore,Bangalore",
    home: "Villa",
    square: "Studio",
    area: 800,
    price: 100000,
    move: "Ready to move",
  },
  {
    id: 2,
    name: "Independent House",
    location: "Sy No 61, Khata No 354/61, Gottigere, South Bangalore,Bangalore",
    home: "Villa",
    square: "1RK",
    area: 2000,
    price: 300000,
    move: "New Launch",
    facing: "East Facing",
  },
  {
    id: 3,
    name: "Plot",
    location: "Sy No 61, Khata No 354/61, Gottigere, South Bangalore,Bangalore",
    home: "Villa",
    square: "1BHK",
    area: 3910,
    price: 250000,
    move: "Under Construction",
    facing: "North Facing",
  },
  {
    id: 4,
    name: "Villa",
    location: "Sy No 61, Khata No 354/61, Gottigere, South Bangalore,Bangalore",
    home: "Villa",
    square: "2BHK",
    area: 5000,
    price: 520000,
    move: "New Launch",
    furnishing: "Semi-Furnished",
  },
  {
    id: 5,
    name: "Duplex",
    location: "Sy No 61, Khata No 354/61, Gottigere, South Bangalore,Bangalore",
    home: "Villa",
    square: "4 BHK",
    area: 3500,
    price: 150000,
    move: "Under Construction",
    furnishing: "Furnished",
  },
  {
    id: 6,
    name: "Studio",
    location: "Sy No 61, Khata No 354/61, Gottigere, South Bangalore,Bangalore",
    home: "Villa",
    square: "5+BHK",
    amenities: "Swimming Pool",
    area: 2600,
    price: 1000000,
    move: "Ready to move",
  },
  {
    id: 7,
    name: "Agricultural Land",
    location: "Sy No 61, Khata No 354/61, Gottigere, South Bangalore,Bangalore",
    home: "Villa",
    amenities: "Gated Community",
    square: "1RK",
    area: 3100,
    price: 370000,
    move: "Ready to move",
  },
  {
    id: 8,
    name: "Agricultural Land",
    location: "Sy No 61, Khata No 354/61, Gottigere, South Bangalore,Bangalore",
    home: "Villa",
    amenities: "Gated Community",
    square: "1RK",
    area: 3100,
    price: 370000,
    move: "Ready to move",
  },
  {
    id: 9,
    name: "Agricultural Land",
    location: "Sy No 61, Khata No 354/61, Gottigere, South Bangalore,Bangalore",
    home: "Villa",
    amenities: "Gated Community",
    square: "1RK",
    area: 3100,
    price: 370000,
    move: "Ready to move",
  },
  {
    id: 10,
    name: "Agricultural Land",
    location: "Sy No 61, Khata No 354/61, Gottigere, South Bangalore,Bangalore",
    home: "Villa",
    amenities: "Gated Community",
    square: "1RK",
    area: 3100,
    price: 370000,
    move: "Ready to move",
  },
  {
    id: 11,
    name: "Agricultural Land",
    location: "Sy No 61, Khata No 354/61, Gottigere, South Bangalore,Bangalore",
    home: "Villa",
    amenities: "Gated Community",
    square: "1RK",
    area: 3100,
    price: 370000,
    move: "Ready to move",
  },
];

export const buttonList = [
  {
    id: 45,
    value: "Studio",
    check: false,
  },
  {
    id: 46,
    value: "1RK",
    check: false,
  },
  {
    id: 47,
    value: "1BHK",
    check: false,
  },
  {
    id: 48,
    value: "2BHK",
    check: false,
  },
  {
    id: 49,
    value: "3BHK",
    check: false,
  },
  {
    id: 50,
    value: "4 BHK",
    check: false,
  },
  {
    id: 60,
    value: "5 BHK",
    check: false,
  },
  {
    id: 61,
    value: "5+BHK",
    check: false,
  },
];
