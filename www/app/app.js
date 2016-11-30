
//Criando o modulo eliteApp cuja unica dependencia é o modulo ionic
angular.module("eliteApp", ["ionic"]).run(function($ionicPlatform) {
	$ionicPlatform.ready(function(){
		if(window.cordova && window.cordova.plugins.Keyboard){
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

		}
		if(window.StatusBar){
			StatusBar.styleDefault();
		}

	});

})
.config(function($stateProvider, $urlRouterProvider	) {
$stateProvider
	.state('home', {
		url:"/home",
		templateUrl: "app/home/home.html"
	}).state('app', {
		url:"/app",
		templateUrl: "app/layout/menulayout.html"
	});



	$urlRouterProvider.otherwise('/app');

});

