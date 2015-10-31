angular.module('timelines')

.controller('multiController', ['appFact', function(appFact){
  appFact.init();
}]);