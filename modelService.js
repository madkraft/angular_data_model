(function (app) {
  'use strict'

  app.service('authorListModel', authorListModel)

  authorListModel.$inject = ['$rootScope']
  function authorListModel ($rootScope) {

    var fowler = {
      name: "Fowler",
      quote: "Any fool can write"
    }

    var twain = {
      name: "Twain",
      quote: "Why, I have known clergymen"
    }

    var poe = {
      name: "Poe",
      quote: "Deep into that darkness peering"
    }

    var plato = {
      name: "Plato",
      quote: "All things will be produced"
    }

    this.list = [fowler, twain, poe, plato]
    this.selectedAuthor = null

    this.setSelectedAuthor = function(author) {
      if(this.list.indexOf(author) > -1) {
        this.selectedAuthor = author
        $rootScope.$broadcast('authorModel::selectedAuthorUpdated', author)
      }
    }

  }

})(angular.module('app'))