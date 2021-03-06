angular.module('swen303.home', ['swen303.services.product'])

    .config(function($stateProvider) {
        $stateProvider.state('home', {
            url: '/',
            views: {
                "main": {
                    templateUrl: 'home/home.html',
                    controller: 'HomeController'
                }
            },
            resolve: {
                Products: ['ProductService', function(ProductService) {
                    return ProductService.getFeaturedProducts().then(function(payload) {
                        return payload;
                    });
                }]
            }
        });
    })

    .controller('HomeController', function($scope, $state, Products, ProductService) {
        $scope.products = Products;
        $scope.searchTerm = '';
        $scope.searchResults = [];

        //Search items
        $scope.search = function() {
            if (!$scope.searchTerm) {
                return
            } else {
                //Search in all
                ProductService.search($scope.searchTerm, 0).then(function(payload) {
                    $scope.searchResults = payload;
                });
            }
        };

    })

;
