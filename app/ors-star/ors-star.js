(function () {
	'use strict';

	var app = angular.module('ors-star', []);

	app.directive('orsStar', function () {
		return {
			restrict: 'E',
			controller: function OrsStarCtrl($element){
				'ngInject';
				console.log('OrsStarCtrl', arguments);
				let html = 'toto';
				$element.html(html);
			}
		};
	});

})();
