// Initial state
let reduxState = {
  count: 0,
  name: "Sane Aalam",
  age: 22,
};

// ✅ Reducer function (pure)
function reducer(state) {
  return {
    ...state,
    count: state.count + 1 // immutably updating count
  };
}

// 🔁 Simulate 5 dispatches
reduxState = reducer(reduxState); // count: 1
reduxState = reducer(reduxState); // count: 2
reduxState = reducer(reduxState); // count: 3
reduxState = reducer(reduxState); // count: 4
reduxState = reducer(reduxState); // count: 5

console.log(reduxState); 
// Output: { count: 5, name: 'Sane Aalam', age: 22 }
