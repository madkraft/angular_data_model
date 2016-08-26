(function (app) {
  'use strict'

  app.factory('WriterModel', WriterModel)

  WriterModel.$inject = ['$http', 'writerCollection']
  function WriterModel ($http, writerCollection) {

    function Writer(obj) {

      this.name = obj.name

      this.quote = obj.quote

      this.urlRoot = obj.urlRoot

      this.save = function () {
        writerCollection.list.push({name: this.name, quote: this.quote})
      }

      this.fetch = function () {
        if (this.urlRoot) {
          return $http.get(this.urlRoot)
        }
      }
    }

    return Writer

  }


})(angular.module('app'))