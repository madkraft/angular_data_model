(function (app) {
  'use strict'

  app.controller('MainController', MainController)

  MainController.$inject = ['$scope', 'authorListModel']
  function MainController ($scope, authorListModel) {
    var ctrl = this

    ctrl.list = authorListModel.list

    ctrl.selectQuote = function(author) {
      authorListModel.setSelectedAuthor(author)
    }

    ctrl.isSelected = function(author) {
      return author === authorListModel.selectedAuthor
    }

    $scope.$on('authorModel::selectedAuthorUpdated', function(event, author) {
      ctrl.quote = author.quote
    })

    ctrl.model = 'test'

  }

})(angular.module('app'))