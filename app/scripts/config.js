'use strict';

var app = angular.module('app', [
	'ngResource',
	'ngRoute'
])

.config(['$routeProvider',function ($routeProvider) {

	$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl',
				controllerAs: 'Main'
//			resolve: {
//				links: function (dataService, $route) {
//					return dataService.getBoards($route.current.params);
//				}
//			}
			})
}])
