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
            photo.src += i+".jpg";
            $scope.photos.push(photo);
        }
    }]);