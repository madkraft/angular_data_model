(function(app) {

    'use strict';

    app.service('booksManager', booksManager);

    booksManager.$inject = ['$http', '$q', 'BookService'];
    function booksManager($http, $q, Book) {

        var booksManager = {
            _pool: {},
            _retrieveInstance: function(bookId, bookData) {
                var instance = this._pool[bookId];

                if (instance) {
                    instance.setData(bookData);
                } else {
                    instance = new Book(bookData);
                    this._pool[bookId] = instance;
                }
            },
            _search: function(bookId) {
                return this._pool[bookId];
            },
            _load: function(bookId, deferred) {
                var scope = this;

                $http.get('ourserver/books/' + bookId)
                    .success(function(bookData) {
                        var book = scope._retrieveInstance(bookData.id, bookData);
                        deferred.resolve(book);
                    })
                    .error(function() {
                        deferred.reject();
                    });
            },

            getBook: function(bookId) {
                var deferred = $q.defer();
                var book = this._search(bookId);
                if (book) {
                    deferred.resolve(book);
                } else {
                    this._load(bookId, deferred);
                }
                return deferred.promise;
            },
            loadAllBooks: function() {
                var deferred = $q.defer();
                var scope = this;
                $http.get('ourserver/books')
                    .success(function(booksArray) {
                        var books = [];
                        booksArray.forEach(function(bookData) {
                            var book = scope._retrieveInstance(bookData.id, bookData);
                            books.push(book);
                        });

                        deferred.resolve(books);
                    })
                    .error(function() {
                        deferred.reject();
                    });

                return deferred.promise;
            },
            setBook: function(bookData) {
                var scope = this;
                var book = this._search(bookData.id);

                if (book) {
                    book.setData(bookData);
                } else {
                    book = scope._retrieveInstance(bookData);
                }

                return book;
            }
        };

        return booksManager;

    }

})(angular.module('app'));