(function (app) {
  'use strict'

  app.service('Person', Person)

  function Person () {

    return function ({firstName: firstName, lastName: lastName}) {
      this.firstName = firstName
      this.lastName = lastName
    }

  }


})(angular.module('app'))