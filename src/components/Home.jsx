import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";
import { BsListNested } from "react-icons/bs";

const Home = () => {
  const initialCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(initialCoffees);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffees={coffees}
            setCoffees={setCoffees}
            coffee={coffee}></CoffeeCard>
        ))}
      </div>
      <Link to="/addCoffee">
        <button className="btn btn-primary mt-10">Add Coffee</button>
      </Link>
    </div>
  );
};

export default Home;
