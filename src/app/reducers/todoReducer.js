const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "EDIT_TODO":
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            ...action.payload,
          };
        }
        return todo;
      });
    default:
      return state;
  }
};
export default todoReducer;
