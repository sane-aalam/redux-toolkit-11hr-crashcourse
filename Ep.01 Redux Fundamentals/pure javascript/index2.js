let state = {
  count: 0,
  name: "Sane Aalam",
  age: 22,
};

let prevState = state;

function incrementState() {
  //   state.count = state.count + 1;
  // state = { state: state.count + 1 };
  state = { ...state, count: state.count + 1 };
}

console.log("prevState", prevState);
incrementState();
console.log(state);
incrementState();
console.log(state);
console.log("prevState", prevState);

if (prevState != state) {
  console.log("not equal!");
}

// prevState {count: 0, name: 'Sane Aalam', age: 22}
// index2.js:17 {count: 1, name: 'Sane Aalam', age: 22}
// index2.js:19 {count: 2, name: 'Sane Aalam', age: 22}
// index2.js:20 prevState {count: 0, name: 'Sane Aalam', age: 22}
// index2.js:23 not equal!
