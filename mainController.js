(function (app) {
  'use strict'

  app.controller('MainController', MainController)

  MainController.$inject = ['$scope', 'authorListModel', 'Person', 'Model']
  function MainController ($scope, authorListModel, Person, Model) {
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






    // var me = new Person({
    //   firstName: 'Anton',
    //   lastName: 'Kostiuchkov',
    //   age: 27
    // })

    // var friend = new Person({
    //   firstName: 'Alex',
    //   lastName: 'Dumi'
    // })

    // console.log(me)
    // console.log(friend)



  }

})(angular.module('app'))