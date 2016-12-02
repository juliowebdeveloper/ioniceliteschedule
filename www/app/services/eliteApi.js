(function(){
	
		'use-strict';

		angular.module('eliteApp').factory('eliteApi', [eliteApi]);

		function eliteApi(){

				var leagues = JSON.parse('[{ "id": 2029,"name": "6th Grade Saturday 2014-15 League", "isDirty": false},{ "id": 2024,"name": "7th Grade MS JV Friday 2014-15 League","isDirty": false}]');
				
				var leagueData = JSON.parse('{"league": { "name": "Summer Showdown 2014","id": 2011}');




					function getLeagues(){
						return leagues;
					}


					function getLeagueData(){
						return leagueData;
					}

				return{
						getLeagues: getLeagues,
						getLeagueData: getLeagueData
				};
		};



}());





/*********************Snipped for service creation*************************************

(function(){
	
		'use-strict';

		angular.module('moduleName').factory('serviceName', [serviceName]);

		function serviceName(){


				return{

				};
		};



}());

/*****************************************************8*************************************
