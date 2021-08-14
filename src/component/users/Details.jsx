import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const Details = () => {
  const { users } = useContext(GlobalContext);
  const { id } = useParams();
  const currUser = users.find((user) => user.id === id);
  console.log(currUser);
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h3 className="display-4">User Id: {id}</h3>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">
          user name:<b>{currUser.username} </b>
        </li>
        <li className="list-group-item">
          dob: <b>{currUser.dob} </b>
        </li>
        <li className="list-group-item">
          country: <b> {currUser.country}</b>
        </li>
        <li className="list-group-item">
          marital status: <b>{currUser.maritalstatus}</b>
        </li>
      </ul>
    </div>
  );
};

export default Details;
