// The querySelectorAll() method returns all elements that matches a CSS selector(s).
const collapses = document.querySelectorAll(".collapse");
// The forEach() method calls a function for each element in an array.
collapses.forEach((item) =>
  item.addEventListener("click", function () {
    //DOMTokenList -> element.classList.toggle: Toggles between tokens in the list
    this.classList.toggle("collapse--expanded");
  })
);