'use strict'
const find = require('find-process');

find('port', 9090).then(function (list) {
    if (!list.length) {
      console.log('error');
    } else {
      console.log(list[0].pid);
    }
})
