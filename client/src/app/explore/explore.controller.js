export default class ExploreController {
  constructor(Products) {
    this.Products = Products;
    this.products = [];

    this.Products.query((res) => {
      this.products = chunk(res.products, 4);
    });
  }

  changeName() {
    this.name = 'angular-tips';
  }
}

function chunk(set, size) {
  let newSet = [];

  for (var i = 0; i < set.length; i+=size) {
    newSet.push(set.slice(i, i+size));
  }

  return newSet;
}

ExploreController.$inject = ['Products'];
