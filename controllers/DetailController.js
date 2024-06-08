let DetailController = function ($scope, $http, $routeParams) {
  // Lấy id từ thanh địa chỉ
  let detailId = $routeParams.id; // 8920

  // Khai báo object rỗng để lưu dữ liệu từ API trả về
  $scope.detailItem = {};

  // http://localhost:3000/products/8920
  $http.get(`${API_URL}/${detailId}`).then(function (res) {
    $scope.detailItem = res.data;
    //console.log($scope.detailItem);
  });
};
