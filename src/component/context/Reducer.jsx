const Reducer = (state, action) => {
  if (action.type === "ADD_USER") {
    return {
      ...state,
      users: [...state.users, action.payload],
    };
  }
  if (action.type === "DELETE_USER") {
    return {
      ...state,
      users: state.users.filter((user) => user.id !== action.payload.id),
    };
  }
  if (action.type === "EDIT_USER") {
    const editedUser = action.payload;
    const updatedUser = state.users.map((user) => {
      if (user.id === editedUser.id) {
        return editedUser;
      }
      //   return user;
    });
    return {
      ...state,
      users: updatedUser,
    };
  }
};
export default Reducer;
