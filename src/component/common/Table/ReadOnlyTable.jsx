import React from "react";

const ReadOnlyTable = ({ user }) => {
  const handleClick = (e) => {};
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.username}</td>
      <td>
        <button type="button" onClick={(event) => handleClick}>
          edit
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyTable;
