import React, { useState } from "react";

const EditableTable = ({ user }) => {
  const [name, setName] = useState("");

  return (
    <tr>
      <td>{user.id}</td>
      <td>
        <input type="text" name="username" value={user.username} />
      </td>
    </tr>
  );
};

export default EditableTable;
