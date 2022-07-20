let products = document.querySelectorAll(".products__item div");
products.forEach((product) => {
  product.addEventListener("click", function (e) {
    let id = this.id;
    let info = document.querySelector(".products__id");
    let infos = document.querySelector('.products__id div')
    let productInfo = info.querySelector(`.${id}`);
    if (productInfo.classList.contains("products__info--none")) {
      productInfo.classList.remove("products__info--none");
      productInfo.classList.add("products__info");
    } else {
      productInfo.classList.add("products__info--none");
    }
    infos.forEach((e) => {
      if (e.classList.contains('products__info')) {
        e.classList.add("products__info--none")
        e.classList.remove('products__info')

      }
    });
  });
});
