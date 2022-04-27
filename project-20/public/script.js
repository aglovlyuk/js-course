const productArea = document.getElementById("products-area");
const template = document.getElementById("product-item");

const createElements = ({ "img-src": imgSrc, url, product, price}) => {
    // structure in html-template
    let productItem = template.content.cloneNode(true);

    let img = productItem.querySelector(".product-item__img");
    img.src = imgSrc;

    let link = productItem.querySelector(".product-item__link");
    link.href = url;

    let productTitle = productItem.querySelector(".product-item__ttl");
    productTitle.textContent = product;

    let priceTxt = productItem.querySelector(".product-item__price");
    priceTxt.textContent = price;

    productArea.append(productItem);
};

fetch("http://localhost:3000/api/products")
    .then((response) => response.json())
    .then((data) => {
        data.forEach(createElements);
    })
    .catch((error) => console.error(error));
