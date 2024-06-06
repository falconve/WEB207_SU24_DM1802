let AddController = function ($scope, $http, $location) {
  // Khai báo object để lưu dữ liệu người dùng nhập
  $scope.addItem = {};

  $scope.onAdd = function () {
    let addItem = {
      // Tạo id là 4 số ngẫu nhiễn dùng hàm Math.random
      id: Math.floor(Math.random() * 9999).toString(),
      name: $scope.addItem.name,
      price: $scope.addItem.price,
    };

    // Dùng phương thức POST để lưu dữ liệu
    $http.post(API_URL, addItem);
    //alert("them san pham thanh cong");
    // Chuyển hướng người dùng về trang danh sách sản phẩm
    $location.path("/list");
  };
};
