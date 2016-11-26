(function () {
    angular.module('pdApp')
        .controller('IndexController', IndexController);
    function IndexController(localStorageService) {
        var vm = this;
        vm.lista = [
            {nome: 'Adriano', sexo: 'M'}
            ];
        vm.listaAux = [];
        vm.setarInformacoesNoStorage = setarInformacoesNoStorage;

        iniciar();

        function iniciar() {
            verifivarSuporteAoStorage();
            vm.listaAux = localStorageService.get('listaTeste');
        }

        function verifivarSuporteAoStorage() {


            if (!localStorageService.isSupported) {
                alert('Desculpe, seu navegador não suporta nossa aplicação');
                return;
            }
        }
        function setarInformacoesNoStorage() {
            localStorageService.set('listaTeste', vm.lista);

        }
    }

})();