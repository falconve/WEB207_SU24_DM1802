let AddController = function ($scope, $http, $location) {
  // Khai báo object để lưu dữ liệu người dùng nhập
  $scope.addItem = {};

  // Khai báo object chứa 2 key
  // tương ứng với 2 trường cần kiểm tra
  $scope.kiemTraDuLieu = {
    tenSanPham: false,
    giaSanPham: false,
    giaToiThieu: false,
  };

  $scope.onAdd = function () {
    // Biến trạng thái
    let flag = false;

    if (true) {
      // chạy đoạn code nếu điều kiện là true
    } else {
      // chạy đoạn code nếu là false
    }

    // Kiếm tra trường tên sản phẩm
    // Kiểm tra trường tên sản phẩm đc nhập vào chưa
    if (!$scope.addItem.name) {
      $scope.kiemTraDuLieu.tenSanPham = true;
      flag = true;
    }

    // Kiếm tra trường giá sản phẩm đc nhập vào chưa
    if (!$scope.addItem.price) {
      $scope.kiemTraDuLieu.giaSanPham = true;
      flag = true;
    }

    // Trường giá sản phẩm phải lớn hơn 0
    if (parseInt($scope.addItem.price) < 0) {
      $scope.kiemTraDuLieu.giaSanPham = false; // Trường giá sản phẩm đã đc nhập
      $scope.kiemTraDuLieu.giaToiThieu = true;
      flag = true;
    }

    if (!flag) {
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
    }
  };
};
