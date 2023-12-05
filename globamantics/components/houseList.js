import { useEffect, useState } from "react";
import { HouseRowMem } from "./houseRow";

const HouseList = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        // async operation
        const response = await fetch("/houses.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const housesData = await response.json();

        // setting the state to the API call output
        setHouses(housesData);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error gracefully, e.g., show a message to the user
      }
    };

    fetchHouses();
  }, []);

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
