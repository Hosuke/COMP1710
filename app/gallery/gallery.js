/**
 * Created by Hosuke on 2/05/15.
 */

angular.module('gallery', [])
    .config(function ($stateProvider){
        $stateProvider
            .state('tea.gallery', {
                url: 'gallery',
                views: {
                    'header@': {
                        templateUrl: 'app/header/header.tmpl.html',
                        controller: 'HeaderController'
                    },
                    "main@": {
                        templateUrl: 'app/gallery/gallery.tmpl.html',
                        controller: 'GalleryController'
                    }
                }
            });
    })
    .controller("GalleryController", ['$scope',function($scope){
        $scope.photos = [
            //{
            //    "title":"",
            //    "src":""
            //},
        ];
        for (i=1; i<11; i++) {
            var photo = {};
            photo.src = "assets/images/gallery";
            if (i<10) {photo.src += "0"}
            photo.src += i+".png";
            $scope.photos.push(photo);
        }
        $scope.photos[0].title = "tea-leaf withering";
        $scope.photos[0].description = "Once the tea has been collected, they will then be left on the floor, being exposed to the sunlight so that it would dry up.";
        $scope.photos[2].title = "tea-leaf shaking";

        $scope.photos[3].description = "Through the artificial hand tea shaking, this process will damage the plant cell which in turn oxidising the Tea Polyphenols. After oxidisation, the tea will then release a unique fragrance.";

        $scope.photos[6].title = "tea-leaf frying";
        $scope.photos[6].description = "The enzymes in the tea will stop oxidisation under high temperature as denature occurs.";

        $scope.photos[7].title = "tea-leaf rolling";
        $scope.photos[7].description = "Artificial tea rolling will cause the water in the leaf to evaporate fast and hence, preventing the tea from undergoing further fermentation.";
    }]);