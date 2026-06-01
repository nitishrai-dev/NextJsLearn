// && -> and
// || -> or
// ! -> not

// true && true -> true
// true && false -> false
// false && true -> false
// false && false -> false

// true || true -> true
// true || false -> true
// false || true -> true
// false || false -> false

let isLoggedin = true
let ispaid = false

console.log(isLoggedin && ispaid) // false
console.log(isLoggedin || ispaid) // true
console.log(!isLoggedin) // false