let state = {
  count: 0,
};

// prevState contain the state(original)
// modify also prevState
// Mutable state
// call by referrence concept(used here)
// referrencing same memory object
let prevState = state;

function incrementState() {
  state.count = state.count + 1;
}

console.log("prevState", prevState);
console.log(state);
incrementState();
incrementState();
console.log(state);
console.log("prevState", prevState);
