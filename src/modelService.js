(function (app) {
  'use strict'

  app.service('authorListModel', authorListModel)

  authorListModel.$inject = ['$rootScope', 'WriterModel', 'writerCollection']
  function authorListModel ($rootScope, Writer, writerCollection) {

    // var Person = AmpersandModel.extend({
    //     props: {
    //       id: 'number',
    //       name: 'string'
    //   },
    //   urlRoot: 'http://otherdomain.example.com/people'
    // });


    var fowler = new Writer ({
      name: "Fowler",
      quote: "Any fool can write",
      urlRoot: 'https://jsonplaceholder.typicode.com/posts/1',
    })

    fowler.save()
    fowler.fetch().then(function (response) {    })

    var twain = new Writer({
      name: "Twain",
      quote: "Why, I have known clergymen"
    })

    twain.save()

    var poe = new Writer({
      name: 'Poe',
      quote: 'Deep into that darkness peering'
    })

    poe.save()

    var plato = new Writer({
      name: 'Plato',
      quote: 'All things will be produced'
    })

    plato.save()


    this.list = writerCollection.list
    this.selectedAuthor = null

    this.setSelectedAuthor = function(author) {
      if(this.list.indexOf(author) > -1) {
        this.selectedAuthor = author
        $rootScope.$broadcast('authorModel::selectedAuthorUpdated', author)
      }
    }

  }

})(angular.module('app'))