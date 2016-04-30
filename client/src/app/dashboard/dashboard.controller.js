export default class DashboardController {
  constructor(products) {
    this.products = products.getProducts();
  }
}

DashboardController.$inject = ['Products'];
