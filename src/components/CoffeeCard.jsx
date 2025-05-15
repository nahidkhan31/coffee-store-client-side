import React from "react";
import { CiEdit } from "react-icons/ci";
import { GrView } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, price, quantity, Photo } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // start deleting the coffee
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-sm border-2">
        <figure>
          <img src={Photo} alt="Movie" />
        </figure>
        <div className="flex mt-6 w-full justify-around">
          <div>
            <h2 className="">{name}</h2>
            <p>Price: ${price}</p>
            <p>Quantity: {quantity}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="join join-vertical space-y-1">
              <Link to={`/coffeeDetails/${_id}`}>
                <button className="btn join-item">
                  <GrView />
                </button>
              </Link>

              <Link to={`/updateCoffee/${_id}`}>
                <button className="btn join-item">
                  <CiEdit />
                </button>
              </Link>

              <button
                onClick={() => handleDelete(_id)}
                className="btn join-item">
                <MdDeleteForever />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
