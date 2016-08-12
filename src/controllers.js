(function (app) {

    app.controller('MainController', MainController);

    MainController.$inject = ['BookService'];
    function MainController(BookService) {
        var ctrl = this;

        BookService.load();
        ctrl.book = BookService.getBook();
        ctrl.book.deleteBook = BookService.deleteBook;
        ctrl.book.updateBook = BookService.updateBook;

    }


}(angular.module('app')));