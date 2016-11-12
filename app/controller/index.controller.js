angular.module('pdApp')
    .controller('IndexController', IndexController);
function IndexController($scope) {
    $scope.nome = 'Adriano';
    $scope.ola = ola;
    function ola() {
        alert('Ola');
    }

}