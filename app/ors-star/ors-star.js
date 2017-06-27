(function () {
	'use strict';

	var app = angular.module('ors-star', []);

	app.directive('orsStar', function () {
		return {
			restrict: 'E',
			controller: function OrsStarCtrl($element){
				'ngInject';
				console.log('OrsStarCtrl', arguments);
				let note = 3;
				let html = '';
				for (let i = 0; i < note; i++) {
					html += '<img src="./ors-star/img/yellow_star.png">';					
				}
				for (let i = note; i < 5; i++) {
					html += '<img src="./ors-star/img/white_star.png">';					
				}
				$element.html(html);
			}
		};
	});

})();
