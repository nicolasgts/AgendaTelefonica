/**
 * Created by root on 26/02/16.
 */
(function() {
 'use strict';
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope , $http){
         			$scope.app = "Lista Telefonica";
         			$scope.contatos = [
         				{nome:"Pedro" , telefone: "99998888" , data : new Date(), operadora: {nome : "Oi" , codigo : 31 , categoria: "Celular" } },
         				{nome:"Vitu" , telefone: "87008888", data : new Date(),  operadora: {nome : "Tim" , codigo : 41 ,  categoria: "Celular"}},
         				{nome:"Maria" , telefone: "88688888" , data : new Date() , operadora : {nome : "Tim" , codigo : 41 , categoria: "Celular"} },
         			];
         			$scope.operadoras = [
         					{nome : "Oi" , codigo : 31 , categoria: "Celular" , preco :2  },
         					{nome : "Tim" , codigo : 41 , categoria: "Celular" , preco : 1  },
         					{nome : "Claro" , codigo : 61 , categoria: "Celular" , preco :3 },
         					{nome : "GVT" , codigo : 91 , categoria: "Fixo" , preco :2 },
         					{nome : "Embratel" , codigo : 101 , categoria: "Fixo", preco :2 }
         			];
         			$scope.adicionarContato = function (){
         				//$scope.contatos.push(angular.copy(contato));
         				//delete $scope.contato;
         				//$scope.contatoForm.$setPristine();

                              var contato = {nome:"Pedro" , telefone: "99998888" , data : new Date(), operadora: {nome : "Oi" , codigo : 31 , categoria: "Celular" } }

                              $http.post('/adicionar/', {item: produto})
   	                            .success(function(data) {
     	                        $scope.contatos = data;
                    	        })
         			};


            $scope.apagarContatos = function(index) {
 	                $http.post('/excluir/' + index)
            	.success(function(data) {
     	        $scope.contatos = data;
   	        })
	        }


                    //$scope.apagarContatos = function (contatos) {
         			//		$scope.contatos = contatos.filter(function(contato){
         			//			if(!contato.selecionado) return contato;
         			//		});
         			//};
         			$scope.isContatoSelecionado = function (contatos) {
         					return contatos.some(function (contato){
         								return contato.selecionado;
         					});
         			};
         			$scope.ordenarPor = function (campo){
         				$scope.criterioDeOrdenacao = campo;
         				$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
         			}

         });
})();

