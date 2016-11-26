angular.module('pdApp')
    .controller('VisualizarBairroController', VisualizarBairroController);

VisualizarBairroController.$inject = ['$scope','$rootScope','$state'];

function VisualizarBairroController($scope,$rootScope,$state) {

    $scope.entidade = {};


    $scope.voltar = voltar;
    $scope.onIniciar = onIniciar;


    function onIniciar() {
        if($rootScope.entidade){
            $scope.entidade = $rootScope.entidade;
        }
    }

    function voltar() {
        window.history.back();
    }


}