angular.module('swen303.services.specifications', [])

    .service('SpecificationService', function($http) {

        this.getSpecifications = function(product_id) {
            return $http.get('/api/specifications/'+product_id).then(function(payload) {
                return payload.data;
            });
        };

        this.uploadSpecifications = function(features) {
            return $http.post('/api/specifications/', JSON.stringify(features)).then(function(payload) {
                return payload.data;
            });
        };
    })
;
