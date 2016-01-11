angular.module('todoListApp')
.directive('helloWorld',function(){
	return{
		template: "This is the Hello world directive!",
		restrict: "E"
	};
});