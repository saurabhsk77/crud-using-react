import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import BaseInput from "../common/BaseInput";
const Create = () => {
  const { createUser } = useContext(GlobalContext);
  const [user, setUser] = useState({
    username: "",
    dob: "",
    maritalstatus: "prefer not to disclose",
    country: "india",
    startdate: "",
    enddate: "",
    gender: "",
    lastupdated: "",
  });
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.startdate < user.enddate) {
      createUser(user);
      alert("user addded successfully");
      history.push("/");
    } else {
      alert("enter valid end date");
    }
    setUser({
      username: "",
      dob: "",
      maritalstatus: "prefer not to disclose",
      country: "India",
      startdate: "",
      enddate: "",
      gender: "",
      lastupdated: "",
    });
  };
  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    const str = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
    setUser({
      ...user,
      [name]: value,
      id: new Date().getTime().toString(),
      lastupdated: `${str}`,
    });
  };
  const handleCancelClick = () => {
    history.push("/");
  };

  return (
    <div className="container mt-4 form">
      <form onSubmit={handleSubmit}>
        <BaseInput
          label="username"
          name="username"
          type="text"
          value={user.username}
          onChange={handleChange}
          isrequired
        />
        <br />
        <div>
          <label htmlFor="dob">DOB : </label>
          <input
            type="date"
            name="dob"
            max="2010-01-01"
            value={user.dob}
            onChange={handleChange}
            isrequired
            className="formElement"
          />
        </div>
        <br />
        <div>
          <label htmlFor="gender">Gender:</label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
            className="formElement"
          />
          <label htmlFor="male">male</label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
            className="formElement"
          />
          <label htmlFor="female">female</label>
        </div>
        <br />
        <div>
          <label htmlFor="maritalstatus">marital status : </label>
          <select
            name="maritalstatus"
            id="maritalstatus"
            value={user.maritalStatus}
            onChange={handleChange}
            className="formElement"
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
            className="formElement"
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
            className="formElement"
          />
          <br />
          <label htmlFor="enddate">end date :</label>
          <input
            type="date"
            name="enddate"
            value={user.enddate}
            onChange={handleChange}
            className="formElement"
          />
        </div>
        <br />
        <div className="btns">
          {user.username.length > 2 && user.startdate && user.enddate ? (
            <button className="btn-primary">Save User</button>
          ) : (
            <button disabled>Save User</button>
          )}
        </div>
      </form>
      {/* <Link to="/"> */}
      <button className="btn btn-secondary" onClick={handleCancelClick}>
        cancel
      </button>
      {/* </Link> */}
    </div>
  );
};

export default Create;
