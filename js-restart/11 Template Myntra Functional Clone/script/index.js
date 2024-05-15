let itemsContainerElement = document.querySelector(".items-container");

let item = {
  item_image: "images/1.jpg",
  rating: {
    stars: 4.5,
    noOfReviews: 1400,
  },
  company_name: "Carlton London",
  Item_name: "Rhodium-Plated CZ Floral Studs",
  current_price: 606,
  original_price: 1045,
  discount_percentage: 42,
};

itemsContainerElement.innerHTML = `
<div class="item-container">
  <img class="item-image" src="${item.item_image}" alt="item image" />
  <div class="rating">
  ${item.rating.stars} ⭐ | ${item.rating.noOfReviews}
  </div>
  <div class="company-name">${item.company_name}</div>
  <div class="item-name">${item.Item_name}</div>
  <div class="price">
    <span class="current-price">${item.current_price}</span>
    <span class="original-price">${item.original_price}</span>
    <span class="discount">${item.discount_percentage}</span>
  </div>
  <button class="btn-add-bag">Add to Bag</button>
</div>
`;
