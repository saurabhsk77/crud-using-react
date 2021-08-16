import React, { useContext, useState } from "react";
import { Fragment } from "react";

import Table from "../common/Table";
import EditableTable from "../common/Table/EditableTable";
import ReadOnlyTable from "../common/Table/ReadOnlyTable";
import { GlobalContext } from "../context/GlobalState";

const Home = () => {
  const { users, editUser } = useContext(GlobalContext);
  const [editable, setEditable] = useState(false);
  const [user, setUser] = useState({
    id: null,
    username: "",
    dob: "",
    maritalstatus: "prefer not to disclose",
    country: "india",
    startdate: "",
    enddate: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  return (
    <>
      <Table />

      {/* <form>
        <table>
          <thead>
            <tr>
              <th>user id</th>
              <th>username</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </form> */}
    </>
  );
};

export default Home;
