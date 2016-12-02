
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
		abstract:true,//sendo abstrata não pode-se navegar para a home
		url:"/home",
		templateUrl: "app/home/home.html"
	})
		//Filhas de home
	.state('home.leagues',{
			url:"/leagues",
			views:{
				//Utilizando o nome da view dado no html e dizendo que aquela view possui aquele template html
				//Se só tiver uma view nao precisa abrir o atributo view pois está implicito
				"tab-leagues":{ 
					templateUrl:"app/home/leagues.html"
				}
			}
	})

	.state('home.myteams', {
			url:"/myteams",
			views:{
				"tab-myteams":{
					templateUrl:"app/home/myteams.html"
				}
			}
	})


	.state('app', {
		abstract:true,
		url:"/app",
		templateUrl: "app/layout/menulayout.html"
	})

	.state('app.location', {
			url:"/location",
			views: {
				'maincontent':{
					templateUrl:"app/location/location.html",
				}
			}

	})

		.state('app.standings', {
			url:"/standings",
			views: {
				//Essa maincontent é a view que está responsavel por guardar esses links (na menulayout.html)
				'maincontent':{
					templateUrl:"app/standings/standings.html",
				}
			}

	})


	.state('app.teams', {
			url:"/teams",
			views: {
				'maincontent':{
					templateUrl:"app/teams/teams.html",
				}
			}

	})
	.state('app.team-detail', {
			url:"/teams/:id",
			views: {
				'maincontent':{
					templateUrl:"app/teams/team-details.html",
				}
			}

	})


	.state('app.game', {
			url:"/game",
			views: {
				'maincontent':{
					templateUrl:"app/game/game.html",
				}
			}

	})


	.state('app.rules', {
			url:"/rules",
			views: {
				'maincontent':{
					templateUrl:"app/rules/rules.html",
				}
			}

	});


	$urlRouterProvider.otherwise('/app/teams');

});

