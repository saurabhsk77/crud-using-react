import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const Table = () => {
  const { users, removeUser } = useContext(GlobalContext);
  const history = useHistory();
  const handleDeleteUser = (user) => {
    if (window.confirm("are you sure to delete the user?")) {
      removeUser(user);
    } else {
      alert("oooppsss!!");
    }
  };

  return (
    <div>
      {users.length > 0 ? (
        <table
          style={{
            width: "100%",
            border: "2px solid red",
            borderCollapse: "collapse",
            marginTop: "15px",
          }}
        >
          <thead style={{ textAlign: "center", justifyContent: "center" }}>
            <tr>
              <th>User ID</th>
              <th>username</th>
              <th>Date of Birth</th>
              <th>Marital Status</th>
              <th>Country</th>
              <th>subscription start date</th>
              <th>subscription end date</th>
              <th>Gender</th>
              <th>last updated</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center", justifyContent: "center" }}>
            {users.map((user) => {
              const {
                id,
                username,
                dob,
                maritalstatus,
                country,
                startdate,
                enddate,
                gender,
                lastupdated,
              } = user;
              return (
                <>
                  <tr>
                    <td>
                      <input value={id} disabled />
                    </td>
                    <td>
                      <input type="text" value={username} disabled />
                    </td>
                    <td>
                      <input type="date" value={dob} disabled />
                    </td>
                    <td>{maritalstatus}</td>
                    <td>{country}</td>
                    <td>{startdate}</td>
                    <td>{enddate}</td>
                    <td>{gender}</td>
                    <td>{lastupdated}</td>
                    <td>
                      <button
                        className="btn"
                        style={{
                          border: "2px solid blue",
                          marginRight: "2px",
                          borderRadius: "20px",
                        }}
                        onClick={() => history.push(`/details/${id}`)}
                      >
                        view
                      </button>
                      <button
                        className="btn"
                        style={{
                          border: "2px solid black",
                          marginRight: "2px",
                          borderRadius: "20px",
                        }}
                        onClick={() => history.push(`/edit/${id}`)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn"
                        style={{
                          border: "2px solid red",
                          marginRight: "2px",
                          borderRadius: "20px",
                        }}
                        onClick={() => handleDeleteUser(user)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className="container mr-auto mt-4">
          please add users:{" "}
          <button
            className="btn-primary"
            onClick={() => history.push("/users/add")}
          >
            add users
          </button>
        </div>
      )}
    </div>
  );
};

export default Table;
