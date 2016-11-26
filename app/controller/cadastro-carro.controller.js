angular.module('pdApp')
    .controller('CadastroCarroController', CadastroCarroController);
CadastroCarroController.$inject = ['$scope', 'AlertService', '$filter'];
function CadastroCarroController($scope, AlertService, $filter) {
    var index = 0;
    $scope.entidade = {};

    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.excluir = excluir;

    iniciar();

    function iniciar(){
        if(!$rootScope.listaBairros){
            $rootScope.listaBairros = [];
        }
        $scope.listaBairros = $rootScope.listaBairros;
    }
    $scope.gridOptions = {
        columnDefs: [
            {name: 'Nome', field: 'nomeCarro'},
            {name: 'Fabricante', field: 'fabricanteCarro'},
            {name: 'Cor do Carro', field: 'corCarro'},
            {name: 'Dt Lancamento', field: 'dataLancamento', cellTemplate: 'app/template/grid/cell-template-date.html'},
            {name: '', field: 'excluir', cellTemplate: 'app/template/grid/cell-template-excluir.html', width: 40}
        ],
        data: 'listaCarros',
        enableColumnMenus: false
    };

    function salvar() {

        if ($scope.carroForm.$invalid) {
            $scope.carroForm.nomeCarro.$setTouched();
            $scope.carroForm.fabricanteCarro.$setTouched();
            $scope.carroForm.corCarro.$setTouched();
            $scope.carroForm.dataLancamento.$setTouched();
            AlertService.error('Formulário inválido');
            //alert('Formulário inválido');
            return;
        }
        $scope.listaCarros.push($scope.entidade);
        AlertService.success('Registro salvo com sucesso');
        limpar();

    }

    function limpar() {
        $scope.entidade = {};
        $scope.carroForm.$setUntouched();
        $scope.carroForm.$setPristine();
        angular.element('#nomeCarro').focus();
    }

    function excluir(index) {
        $scope.listaCarros.splice(index, 1);

    }
}