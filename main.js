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
let options = document.querySelectorAll(".products__option")
options.forEach((option)=> {
  option.addEventListener("click", function (event) {
    event.preventDefault()
    console.log("ADSDA")
    document.querySelectorAll(".products__media > div").forEach((el)=> {
      el.classList.add("products__info--none")
    });
    let media = document.querySelector(".products__media")
    let productInfoMedia = media.querySelector(`.${this.id}`)
    productInfoMedia.classList.remove("products__info--none")
  })
})

let images = document.querySelectorAll(".documents__img")
console.log(images)
images.forEach((img) => {
 img.addEventListener("click", function (event) {
  let next = this.querySelector(".documents__next")
  
 })
})
