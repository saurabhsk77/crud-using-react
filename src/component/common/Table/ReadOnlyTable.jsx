import React from "react";

const ReadOnlyTable = ({ user, handleEditClick }) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.username}</td>
      <td>
        <button type="button" onClick={(event) => handleEditClick(event, user)}>
          edit
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyTable;
