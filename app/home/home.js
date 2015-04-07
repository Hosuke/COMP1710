/**
 * Created by Hosuke on 7/04/15.
 */
angular.module('home', [])
    .config(function ($stateProvider){
        $stateProvider
            .state('tea.home', {
                url: 'home'
            });
    });