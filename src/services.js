(function (app) {

    app.service('BookService', BookService);

    BookService.$inject = ['$http'];
    function BookService($http) {

        var book,
            bookId = 1;

        return {
            getBook: getBook,
            setData: setData,
            load: load,
            deleteBook: deleteBook,
            updateBook: updateBook,
            isAvailable: isAvailable
        };

        function getBook() {
            return book;
        }

        function setData(bookData) {
            book = bookData;
        }

        function load(id) {
            // $http.get('ourserver/books/' + bookId).success(function(bookData) {
            //     scope.setData(bookData);
            // });
            var bookData = {
                id: 1,
                name: 'Book Name',
                author: 'Book Author',
                stores: [
                    {id: 1, name: 'Barnes', quantity: 3},
                    {id: 2, name: 'Waterstones', quantity: 2},
                    {id: 3, name: 'Book Depository', quantity: 5}
                ]
            };

            setData(bookData);

        }

        function deleteBook() {
            // $http.delete('ourserver/books/' + bookId);
            console.log('deleting the book' + bookId);
        }

        function updateBook() {
            // $http.put('ourserver/books/' + bookId, ctrl.book);
            console.log('updating the book' + bookId);
        }

        function isAvailable() {
            if (!book.stores || book.stores.length === 0) {
                return false;
            }

            return book.stores.some(function(store) {
                return store.quantity > 0;
            });
        }



    }



}(angular.module('app')));