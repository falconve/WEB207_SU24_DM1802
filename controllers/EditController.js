let EditController = function ($scope, $http, $routeParams, $location) {
  let editId = $routeParams.id; // lấy ra id tương ứng của từng sản phẩm

  // Khai báo object editItem để lưu dữ liệu người dùng nhập vào
  // và hiển thị dữ liệu lên view
  $scope.editItem = {};

  $http.get(`${API_URL}/${editId}`).then(function (res) {
    $scope.editItem = res.data;
  });

  $scope.onEdit = function () {
    let editItem = {
      name: $scope.editItem.name,
      price: $scope.editItem.price,
    };

    // Phương thức PUT dùng để sửa từ cái có sẵn
    $http.put(`${API_URL}/${editId}`, editItem);
    $location.path("/list");
  };
};
