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
