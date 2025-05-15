import React from "react";
import { Link, useLoaderData, useParams } from "react-router";

const CoffeeDetails = () => {
  const coffees = useLoaderData();
  const { id } = useParams();
  const singleCoffee = coffees.find((coffee) => coffee._id === id);
  const { name, quantity, supplier, taste, details, Photo, price } =
    singleCoffee;
  return (
    <div className="card bg-base-100 w-full mx-auto shadow-sm">
      <figure>
        <img src={Photo} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price: ${price} USD</p>
        <p>Details: {details}</p>
        <p>Taste: {taste}</p>
        <p>Supplier: {supplier}</p>
        <p>Quantity: {quantity}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
          <Link to="/">
            <button className="btn btn-primary">Back Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
