import { useState } from "react";
import { HouseRowMem } from "./houseRow";

const houseArray = [
  {
    id: 1,
    address: "12 valley",
    country: "Swiz",
    price: 9000000,
  },
  {
    id: 2,
    address: "89 road",
    country: "Swiz",
    price: 5000000,
  },
];

const HouseList = () => {
  const [houses, setHouses] = useState(houseArray);

  const addHouse = () => {
    setHouses([
      ...houses,
      {
        id: 3,
        address: "32 Valley",
        country: "USA",
        price: 1000000,
      },
    ]);
  };

  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((h) => (
            <HouseRowMem key={h.id} house={h} />
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addHouse}>
        Add
      </button>
    </>
  );
};

export default HouseList;
