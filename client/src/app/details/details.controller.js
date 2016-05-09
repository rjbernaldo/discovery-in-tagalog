export default class DetailsController {
  constructor($stateParams, Products) {
    this.$stateParams = $stateParams;

    this.Products = Products;
    this.product = undefined;

    this.Products.get({ id: $stateParams.id }, (res) => {
      this.product = res.product;
    });
  }
}

DetailsController.$inject = ['$stateParams', 'Products'];
