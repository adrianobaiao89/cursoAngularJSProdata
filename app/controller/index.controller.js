angular.module('pdApp')
    .controller('IndexController', IndexController);
function IndexController($scope) {
    $scope.nome = 'Adriano';
    $scope.ola = ola;
    function ola() {
        alert('Ola');
    }

    $scope.$on('testeEnvioEvento', onTesteEnvioEvento);
    function onTesteEnvioEvento(event, data) {
        var teste = data;
        console.log('Nome:', event.currentScope.nome)
    }

}