;(function (global) {
  'use strict'

  if (typeof exports === 'object') {
  	var Countable = require('../vendor/Countable');
  } else if (typeof define === 'function' && define.amd) {
  	require(['../vendor/Countable']);
  } else {
    Countable = global.Countable;
  }

  var util = {

    renderReadTime: function (wpm, fromElement, toElement) {
      Countable.once($(fromElement)[0], function (counter) {
        var minutes = Math.round(counter.words / wpm),
            effectiveTime = (minutes < 1) ? 
            	"a few secs" : minutes + " min read";
        $(toElement).html(effectiveTime);
      });
    }

  }

  if (typeof exports === 'object') {
    module.exports = util
  } else if (typeof define === 'function' && define.amd) {
    define(function () { return util })
  } else {
    global.util = util
  }

}(this));
