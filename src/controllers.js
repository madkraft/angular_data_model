(function (app) {

    'use strict';

    app.controller('EditableBookController', EditableBookController);
    app.controller('BooksListController', BooksListController);

    EditableBookController.$inject = ['booksManager'];
    function EditableBookController(booksManager) {
        var ctrl = this;

        booksManager.getBook(1).then(function(book) {
            ctrl.book = book;
        });

    }

    BooksListController.$inject = ['booksManager'];
    function BooksListController(booksManager) {
        var ctrl = this;

        booksManager.loadAllBooks().then(function(books) {
            ctrl.books = books;
        });

    }


}(angular.module('app')));