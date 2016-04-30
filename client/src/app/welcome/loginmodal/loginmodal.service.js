export default class LoginModalService {
  constructor($modal) {
    this.$modal = $modal;
  }

  openModal() {
    this.$modal.open({

    });
  }
}

LoginModalService.$inject = ['$uibModal']
