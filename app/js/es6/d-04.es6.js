/* global _:true */
/* jshint unused: false */

(function()
{
  'use strict';

  $(document).ready(init);

  function init()
  {
    $('#operate').click(cubes);
  }

  function cubes()
  {
    $('#output > *').remove();

    var params = $('#input').val().split(',').map(n=>n.trim());

    var nums = _.range(params[0], params[1], params[2]);

    var cubedNums = nums.map(n=>Math.pow(n,3));

    cubedNums.forEach((n,i)=>
    {
      var $div = $('<div>');
      var $divTop = $('<div>').text(n);
      var $divBottom = $('<div>').append(`${nums[i]}<sup>3</sup>`);

      $div.append($divTop);
      $div.append($divBottom);

      $('#output').append($div);
      debugger;
    });
  }

})();