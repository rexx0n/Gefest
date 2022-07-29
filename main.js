let productsItems = document.querySelectorAll(".products__item");
productsItems.forEach((product) => {
  product.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelectorAll(".products__id > div").forEach((el) => {
      el.classList.add("products__info--none");
    });
    let info = document.querySelector(".products__id");
    let productInfo = info.querySelector(`.${this.id}`);
    productInfo.classList.remove("products__info--none");
  });
});
// let options = document.querySelectorAll(".products__option")
// options.forEach((option)=> {
//   option.addEventListener("change", function (event) {
//     let a = document.querySelector(".products__form > select")
//     console.log(a.value)
//     event.preventDefault()
//     console.log("ADSDA")
//     document.querySelectorAll(".products__media > div").forEach((el)=> {
//       el.classList.add("products__info--none")
//     });
//     let media = document.querySelector(".products__media")
//     let productInfoMedia = media.querySelector(`.${this.id}`)
//     productInfoMedia.classList.remove("products__info--none")
//   })
// })
let select = document.querySelector(".products__form > select");
select.addEventListener("change", function (event) {
  document.querySelectorAll(".products__media > div").forEach((el) => {
    el.classList.add("products__info--none");
  });
  let selectedValue = select.value;
  console.log(selectedValue);
  let a = document.querySelector(`.products__media .${selectedValue}`);
  a.classList.remove("products__info--none");
});

let images = document.querySelectorAll(".documents__img");
images.forEach((img) => {
  let next = img.querySelector(".documents__next");
  let back = img.querySelector(".documents__back");
  console.log(back);
  if (next !== null) {
    next.addEventListener("click", function (event) {
     addRemove(this, img, event, "nextElementSibling");
    });
  }
  if (back !== null) {
    back.addEventListener("click", function (event) {
      addRemove(this, img, event, "previousElementSibling");
    });
  }
});

function addRemove(element, img, event, name) {
  event.preventDefault();
  let sibling = element.parentNode[name]
  img.classList.add("documents__img--none");
  sibling.classList.remove("documents__img--none");
}
let a = {
  age: 13,
  name: "Al",
  say: function() {console.log("Hello")}
}
a.age = 15
let b = "age"
a[b] = 14