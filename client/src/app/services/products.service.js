import angular from 'angular';

class Products {
  constructor() {
    this.products = [];
  }

  getProducts() {
    // http call here?
    this.products = [];
    let seed = { name: 'Product 1', description: 'This is the first Product' };
    this.products.push(seed);

    return this.products;
  }
}

export default angular.module('services.products', [])
  .service('Products', Products)
  .name;
