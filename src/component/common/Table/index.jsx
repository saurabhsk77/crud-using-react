import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import EditableTable from "./EditableTable";
import ReadOnlyTable from "./ReadOnlyTable";
const Table = () => {
  const { users } = useContext(GlobalContext);
  const [isEditable, setIsEditable] = useState(null);
  const handleEditClick = (event, user) => {
    setIsEditable(user.id);
  };
  return (
    <div>
      <form>
        <table>
          <thead>
            <tr>
              <th>User Id</th>
              <th>username</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </form>
    </div>
  );
};

export default Table;
