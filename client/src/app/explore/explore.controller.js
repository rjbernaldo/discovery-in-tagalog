export default class ExploreController {
  constructor(Products) {
    this.Products = Products;
    this.products = [];

    this.Products.query((res) => {
      console.log('res', res);
    });
  }

  changeName() {
    this.name = 'angular-tips';
  }
}

ExploreController.$inject = ['Products'];
