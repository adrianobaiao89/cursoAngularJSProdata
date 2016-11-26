angular.module('pdApp')
    .controller('CadastroBairroController', CadastroBairroController);
CadastroBairroController.$inject = ['$scope', 'AlertService', '$filter', '$rootScope', '$state'];
function CadastroBairroController($scope, AlertService, $filter, $rootScope, $state) {
    var index=0;
    $rootScope.entidade = {};

    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.excluir = excluir;
    $scope.editar = editar;
    $scope.visualizar = visualizar;

    iniciar();

    function iniciar(){
        if(!$rootScope.listaBairro){
            $rootScope.listaBairro = [];
        }
        $scope.listaBairro = $rootScope.listaBairro;
    }

    $scope.gridOptions = {
        columnDefs: [
            {name: 'Bairro', field: 'nomeBairro'},
            {name: 'Cidade', field: 'nomeCidade'},
            {name: 'Estado', field: 'nomeEstado'},
            {name: 'Ações', field: 'acoes', cellTemplate: 'app/template/grid/cell-template-acoes.html', width: 140}
        ],
        data: 'listaBairro',
        enableColumnMenus: false
    };


    function salvar() {
        if ($scope.bairroForm.$invalid) {
            $scope.bairroForm.nomeBairro.$setTouched();
            $scope.bairroForm.nomeCidade.$setTouched();
            $scope.bairroForm.nomeEstado.$setTouched();
            AlertService.error('Formulário inválido');
            return;
        }

        if($scope.entidade.id == null) {
            $scope.entidade.id = index++;
            $scope.listaBairro.push($scope.entidade);
        }
        else {
            for(i in $scope.listaBairro) {
                if($scope.listaBairro[i].id == $scope.entidade.id) {
                    $scope.listaBairro[i] = $scope.entidade;
                }
            }
        }
        $scope.entidade.nomeBairro = $filter('maiusculo')($scope.entidade.nomeBairro);
        $scope.entidade.nomeCidade = $filter('maiusculo')($scope.entidade.nomeCidade);
        $scope.entidade.nomeEstado = $filter('maiusculo')($scope.entidade.nomeEstado);
        AlertService.success('Registro salvo com sucesso');
        limpar();

    }

    function limpar() {
        $scope.entidade = {};
        $scope.bairroForm.$setUntouched();

        angular.element('#nomeBairro').focus();
    }

    function excluir(linha) {
        var index = $scope.listaBairro.indexOf(linha);
        $scope.listaBairro.splice(index, 1);

    }
    function editar(linha) {
        $scope.entidade = angular.copy(linha);

    }
    function visualizar(linha) {
        $rootScope.entidade = angular.copy(linha);
        $state.go('visualizarBairro');
    }

}