let products = document.querySelectorAll(".products__item div");
products.forEach((product) => {
  product.addEventListener("click", function (e) {
    let id = this.id;
    let info = document.querySelector(".products__id");
    let productInfo = info.querySelector(`.${id}`);
    if (productInfo.classList.contains("products__info--none")) {
      productInfo.classList.remove("products__info--none");
      productInfo.classList.add("products__info");
    } else {
      productInfo.classList.add("products__info--none");
    }
    products.forEach((e) => {
      let id = this.id;
      let info = document.querySelector(".products__id");
      let productInfo2 = info.querySelector(`.${id}`);
      if (productInfo !== productInfo2) {
        menu2.classList.add("products__info--none")
      }
    });
  });
});
