// Initial state
let reduxState = {
  count: 0,
  name: "Sane Aalam",
  age: 22,
};

// Reducer function with action support
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };

    case "DECREMENT":
      return { ...state, count: state.count - 1 };

    case "RESET":
      return { ...state, count: 0 };

    default:
      return state;
  }
}

// Dispatching actions
reduxState = reducer(reduxState, { type: "INCREMENT" });
reduxState = reducer(reduxState, { type: "INCREMENT" });
reduxState = reducer(reduxState, { type: "DECREMENT" });
reduxState = reducer(reduxState, { type: "RESET" });
reduxState = reducer(reduxState, { type: "INCREMENT" });

console.log(reduxState);
// Output: { count: 1, name: 'Sane Aalam', age: 22 }
