const assert = require("assert");

// ========= Scope from parent =============

var apple = "apple";
let banana = "banana";
const citrus = "citrus";

assert(apple === "apple", "is apple");
assert(banana === "banana", "is true");
assert(citrus === "citrus", "is true");

// Have access to all variables in function scope
function getFruit() {
  console.log("in getFruit");
  assert(apple === "apple", "is not apple");
  assert(banana === "banana", "true");
  assert(citrus === "citrus", "is true");
}

getFruit();

// Have access to all variables in  block scope
{
  assert(apple === "apple", "is apple");
  assert(banana === "banana", "true");
  assert(citrus === "citrus", "is true");
}

// ========= Block Scope =============
// let and const are block scope
if (true) {
  var bmw = "bmw";
  let toyota = "toyota";
  const mazda = "mazda";

  assert(bmw === "bmw", "true");
  assert(toyota === "toyota", "true");
  assert(mazda === "mazda", "true");
}

assert(bmw === "bmw", "true");
assert.throws(() => toyota === "toyota", { name: "ReferenceError" });
assert.throws(() => mazda === "mazda", { name: "ReferenceError" });

// =========== function scope ============
// var is scope within the function,

(function() {
  var pizza = "pizza"; // scope to function, not usable outside the function
  let rice = "rice"; // scope to both function and block, not usbale outside both function and block
  const noodles = "noodles"; // scope to both function and block, not usbale outside both function and block

  assert(pizza === "pizza", "true");
  assert(rice === "rice", "true");
  assert(noodles === "noodles", "true");
})();

assert.throws(() => pizza === "pizza", { name: "ReferenceError" });
assert.throws(() => rice === "rice", { name: "ReferenceError" });
assert.throws(() => noodles === "noodles", { name: "ReferenceError" });
