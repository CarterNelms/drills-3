/* jshint unused: false */

(function()
{
  'use strict';

  $(document).ready(init);

  function init()
  {
    $('#makeString').click(makeString);
  }

  function makeString()
  {
    $('#output > *').remove();

    var first = $('#first').val();
    var last = $('#last').val();
    var movie = $('#movie').val();

    var str = `${first.toLowerCase()} ${last.toLowerCase()} loves ${movie.toUpperCase()}.`;

    $('#output').text(str);
  }

})();