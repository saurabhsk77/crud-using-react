import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  const history = useHistory();
  const { users, editUser } = useContext(GlobalContext);
  const [user, setUser] = useState({
    id: null,
    username: "",
    dob: "",
    maritalstatus: "prefer not to disclose",
    country: "india",
    startdate: "",
    enddate: "",
    gender: "",
    lastupdated: "",
  });
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.startdate < user.enddate) {
      editUser(user);
      alert("user updated successfully");
      history.push("/");
    } else {
      alert("enter valid date");
    }
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const time = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
    setUser({ ...user, [name]: value, lastupdated: `${time}` });
  };

  useEffect(() => {
    const curUser = users.find((user) => user.id === id);
    console.log(curUser);
    setUser(curUser);
    console.log(user);
  }, [id]);
  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username : </label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="dob">DOB : </label>
          <input
            type="date"
            name="dob"
            max="2010-01-01"
            value={user.dob}
            onChange={handleChange}
            required
            disabled
          />
        </div>

        <br />
        <div>
          <label htmlFor="maritalstatus">marital status : </label>
          <select
            name="maritalstatus"
            id="maritalstatus"
            value={user.maritalStatus}
            onChange={handleChange}
          >
            <option value="prefer not to disclose">
              prefer not to disclose
            </option>
            <option value="single">single</option>
            <option value="married">Married</option>
            <option value="divorced">divorced</option>
          </select>
        </div>
        <br />
        <div>
          <label htmlFor="country">Country : </label>
          <select
            name="country"
            id="country"
            value={user.country}
            onChange={handleChange}
          >
            <option value="India">India</option>
            <option value="usa">usa</option>
            <option value="Australia">Australia</option>
            <option value="England">England</option>
          </select>
        </div>
        <br />
        <div>
          <label htmlFor="startdate">start date :</label>
          <input
            type="date"
            name="startdate"
            value={user.startdate}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="enddate">end date :</label>
          <input
            type="date"
            name="enddate"
            value={user.enddate}
            onChange={handleChange}
          />
        </div>
        <br />

        {user.username.length > 2 && user.startdate && user.enddate ? (
          <button className="btn-primary">Update User</button>
        ) : (
          <button disabled>Save User</button>
        )}
      </form>
      <Link to="/">
        <button className="btn btn-secondary">cancel</button>
      </Link>
    </div>
  );
};

export default EditUser;
