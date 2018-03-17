"use strict";

myApp.controller("presentationCtrl", function($scope, serviceAjax, $routeParams) {
	
	var initialisation = function() {
		$scope.todo = {};
		$scope.changeTodo = {};
		$scope.editTodo = false;
		$scope.editPres = false;
		$scope.presExiste = false;
	}

	var afficheItem = function() {
		serviceAjax.afficheItem($routeParams.id).success(function(data) {
			if( data === "err" ) {
				alert("Probleme afficheItem");
			}
			else {
				$scope.todo = data[0];

				if( $scope.todo.presentation === undefined 
				 || $scope.todo.presentation === null 
				 || $scope.todo.presentation === "" ) {
					$scope.presExiste = false;
				}
				else {
					$scope.presExiste = true;
				}
			}
		});
	};


// Fonction modifier tache
	$scope.modifierTodo = function() {
		if( $scope.editTodo === false) {
			$scope.changeTodo = {};
			$scope.changeTodo.nom = $scope.todo.nom;
		}
		else {
			$scope.changeTodo = {};
		}
		$scope.editTodo = !$scope.editTodo;
		$scope.editPres = false;		
	};

	$scope.confirmerTodo = function(item) {
		serviceAjax.modifieItem(item._id, $scope.changeTodo).success(function(data) {
			if( data === "err" ) {
				alert("Probleme ajout");
			}
			else {
				$scope.todo.nom = $scope.changeTodo.nom;
				$scope.modifierTodo();
			}
		});
	};


// Fonction modifier presentation
	$scope.modifierPres = function() {
		if( $scope.editPres === false) {
			$scope.changeTodo = {};
			$scope.changeTodo.presentation = $scope.todo.presentation;
		}
		else {
			$scope.changeTodo = {};
		}
		$scope.editPres = !$scope.editPres;
		$scope.editTodo = false;
	};

	$scope.confirmerPres = function(item) {
		serviceAjax.modifiePres(item._id, $scope.changeTodo).success(function(data) {
			if( data === "err" ) {
				alert("Probleme ajout");
			}
			else {
				$scope.todo.presentation = $scope.changeTodo.presentation;

			// S'il n'y a plus de présentation	
				if( $scope.todo.presentation === undefined 
				 || $scope.todo.presentation === null 
				 || $scope.todo.presentation === "" ) {
					$scope.presExiste = false;
				}
				else {
					$scope.presExiste = true;
				}

				$scope.modifierPres();
			}
		});
	};


// Redirection du bouton retour
	document.getElementById("boutonRetour").onclick = function () {
        location.href = "/";
    };


    initialisation();
	afficheItem();
});