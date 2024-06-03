// Khai báo biến là 1 hàm
let ListController = function ($scope, $http) {
  // Khai báo 1 mảng rỗng để lưu dữ liệu
  // lấy từ API
  $scope.productList = [];

  // Hàm lấy dữ liệu từ API
  $scope.onGetData = function () {
    // Sử dụng $http để truy cập vào link API
    // PHƯƠNG THỨC GET để lấy dữ liệu
    $http.get(API_URL).then(function (res) {
      $scope.productList = res.data;
    });
  };

  $scope.onGetData();
};
