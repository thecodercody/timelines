angular.module('timelines', ['ngRoute'])

.factory('appFact', function appFactory(){
  return {};
})

.controller('oneController', ['appFact', function(appFact){
  appFact.init = init;

  function init(){    

    var timelineBlocks = $('.cd-timeline-block'),
      offset = 0.8;

    //hide timeline blocks which are outside the viewport
    hideBlocks(timelineBlocks, offset);

    //on scolling, show/animate timeline blocks when enter the viewport
    $(window).on('scroll', function(){
      (!window.requestAnimationFrame) 
        ? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
        : window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
    });

    function hideBlocks(blocks, offset) {
      blocks.each(function(){
        ( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
      });
    }

    function showBlocks(blocks, offset) {
      blocks.each(function(){
        ( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
      });
    }
  }
  appFact.init();
}])

.config(function($routeProvider, $locationProvider){
    $routeProvider

      // landing page
      .when('/', {
        templateUrl : '../views/one.html',
        controller : 'oneController'
      })

      .when('/two', {
        templateUrl: '../views/two.html',
        controller: 'twoController'
      })

      .when('/three', {
        templateUrl: '../views/three.html',
        controller: 'twoController'
      })

      .when('/four', {
        templateUrl: '../views/four.html',
        controller: 'twoController'
      })

      .when('/five', {
        templateUrl: '../views/five.html',
        controller: 'twoController'
      })

      .when('/six', {
        templateUrl: '../views/six.html',
        controller: 'twoController'
      })

      .when('/seven', {
        templateUrl: '../views/seven.html',
        controller: 'twoController'
      })

      .when('/eight', {
        templateUrl: '../views/eight.html',
        controller: 'twoController'
      })

      .when('/nine', {
        templateUrl: '../views/nine.html',
        controller: 'twoController'
      })

      // all others
      .otherwise({redirectTo: '/'});
      $locationProvider.html5Mode(true);
  });

  


  