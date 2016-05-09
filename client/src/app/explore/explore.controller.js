export default class ExploreController {
  constructor($state, Products) {
    this.$state = $state;

    this.Products = Products;
    this.products = [];

    this.Products.query((res) => {
      this.products = chunk(res.products, 4);
    });
  }
}

function chunk(set, size) {
  let newSet = [];

  for (var i = 0; i < set.length; i+=size) {
    newSet.push(set.slice(i, i+size));
  }

  return newSet;
}

ExploreController.$inject = ['$state', 'Products'];
