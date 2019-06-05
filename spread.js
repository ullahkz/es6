// spread operator to combine and clone array or object
const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second);
// const combi = [...first, "a", ...second];
// console.log(combi);

const clone = [...first];

console.log(clone);
