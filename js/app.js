(function(){
  var app = angular.module('angularDemo4', []);

  app.controller('DemoController', function(){
    this.vehicles = tanks;
  });

  app.controller("ReviewController", function(){

      this.review = {};

      this.addReview = function(product){
        this.review.createdOn = Date.now();
        product.reviews.push(this.review);
        this.review = {};
      };
    });

  app.directive("tankDescriptions", function() {
      return {
        restrict: 'E',
        templateUrl: "html/tank-description.html"
      };
  });

    app.directive("tankReview", function() {
       return {
         restrict: 'E',
         templateUrl: "html/tank-review.html"
       };
    });

    app.directive("tankSpecs", function() {
       return {
         restrict: 'A',
         templateUrl: "html/tank-specs.html"
       };
    });

    app.directive("tankGallery", function() {
        return {
           restrict: 'E',
           templateUrl: "html/tank-gallery.html"
        };
    });

    //  app.controller('TabController', function(){
    //      this.tab = 1;
    //
    //      this.setTab = function(newValue){
    //        this.tab = newValue;
    //      };
    //
    //      this.isSet = function(tabName){
    //        return this.tab === tabName;
    //      }
    //  });

    app.directive("tankTabs", function() {
        return {
           restrict: "E",
           templateUrl: "html/tank-tabs.html",
           controller: function() {
              this.tab = 1;

              this.setTab = function(newValue){
                   this.tab = newValue;
              };

              this.isSet = function(tabName){
                   return this.tab === tabName;
              }
           },
           controllerAs: "tab"
        };
    });


  var tanks = [
      {
       name: 'Tiger1',
       price: 30000,
       description: 'Tiger is the common name of a German heavy tank developed in 1942 and used in World War II. The final official German designation was Panzerkampfwagen VI Tiger Ausf. E, often shortened to Tiger.',
       specs: 'gun: 8.8 cm KwK 36 L/56',
       images: [
         "pics/Tiger1.jpg",
         "pics/Tiger2.jpg",
         "pics/Tiger3.jpg"
       ],
       reviews: [{
          rating: '0',
          text: 'Tiger is a pussy!',
          author: 'George S. Patton',
          createdOn: 1397490980837
       },
       {
          rating: '5',
          text: 'My last home',
          author: 'Michael Wittmann',
          createdOn: 1397490980837
       }]
      },
      {
       name: 'Panther',
       price: 25000,
       description: 'The Panther was a German medium tank deployed during World War II from mid-1943 to the end of the European war in 1945.',
       specs: 'gun: 7.5 cm KwK 42 L/70',
       images: [
          "pics/Panther1.jpg",
          "pics/panther2.jpg",
          "pics/panther3.jpg"
       ],
       reviews: [{
          rating: '5',
          text: 'fearsome monster',
          author: 'gi@us.com',
          createdOn: 1397490980837
       },
       {
          rating: '4',
          text: 'great suspention system',
          author: 'gi2@us.com',
          createdOn: 1397490980837
       }]
      },
      {
       name: 'Jagdpanther',
       price: 40000,
       description: 'The Jagdpanther (German: "hunting panther") was a tank destroyer built by Nazi Germany during World War II based on the chassis of the Panther tank.',
       specs: 'gun: 8.8 cm Pak 43/3 or 43/4 L/71',
       images: [
           "pics/jagdpanther1.jpg",
           "pics/Jagdpanther2.jpg",
           "pics/jagdpanther3.jpg"
       ],
       reviews: [{
          rating: '4',
          text: 'very rare',
          author: 'me@ik.nl',
          createdOn: 1397490980837
       }]
      }
  ];

})();
