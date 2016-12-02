(function(){
		'use strict';


//Angular dependecie injection
		angular.module('eliteApp').controller('teamDetailCtrl', ['$stateParams', teamDetailCtrl]);


//Function principal
		function teamDetailCtrl($stateParams){
			var vm = this;

			console.log($stateParams);
		};


}());




/**************************Snippet Angular Controllers******************************************/
/*(function(){
		'use strict';


//Angular dependecie injection
		angular.module('appName').controller('controllerName', ['$stateParams', controllerName]);


//Function principal
		function controllerName(){
			var vm = this;

			
		};


}());*/


/**************************************************************************************/

