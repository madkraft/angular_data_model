(function (app) {
  'use strict'

  app.service('writerCollection', writerCollection)

  function writerCollection () {

    this.list = []

  }

})(angular.module('app'))