(function (app) {
  'use strict'

  app.service('authorListModel', authorListModel)

  authorListModel.$inject = ['$rootScope']
  function authorListModel ($rootScope) {

    // var Person = AmpersandModel.extend({
    //     props: {
    //       id: 'number',
    //       name: 'string'
    //   },
    //   urlRoot: 'http://otherdomain.example.com/people'
    // });


    // var me = new Person({
    //   firstName: 'Foo',
    //   lastName: 'Bar'
    // })

    // model.save()

    // model.fetch()
    // var me = new Person({id: 123});
    // me.fetch();

    // Destroy
    // var task = new Task({id: 123});
    // task.destroy({
    //     success: function () {
    //         alert('Task destroyed!');
    //     },
    //     error: function () {
    //         alert('There was an error destroying the task');
    //     },
    // });

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