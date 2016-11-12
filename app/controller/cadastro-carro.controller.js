angular.module('pdApp')
    .controller('CadastroCarroController', CadastroCarroController);
function CadastroCarroController($scope, AlertService) {
    $scope.entidade = {};
    $scope.listaCarros = [];
    $scope.salvar = salvar;
    $scope.limpar = limpar;
    function salvar() {

        if($scope.carroForm.$invalid){
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
        $scope.entidade ={};
        $scope.carroForm.$setUntouched();
        $scope.carroForm.$setPristine();
        angular.element('#nomeCarro').focus();
    }
}