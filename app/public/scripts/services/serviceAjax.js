'use strict';

myApp.factory('serviceAjax', function ($http) {
	return{
		afficheAll: function(){
			return $http.get("/todos/");
		},
		afficheItem: function(id){
			return $http.get("/todos/" + id);
		},
		modifieItem: function(id, newItem){
			return $http.put("/todos/" + id, newItem);
		},
		modifiePres: function(id, newItem){
			return $http.put("/todos/presentation/" + id, newItem);
		},
		ajouteItem: function(item){
			return $http.post("/todos", item);
		},
		supprimeItem: function(id){
			return $http.delete("/todos/" + id);
		}
	}
});
