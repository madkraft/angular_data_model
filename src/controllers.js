(function (app) {

    app.controller('MainController', MainController);


    function MainController() {
        var ctrl = this;

        ctrl.state = {
            books: 'Yolo'
        }


    };


}(angular.module('app')));