(function()
{
  'use strict';

  $(document).ready(init);

  function init()
  {
    $('#operate').click(squares);
  }

  function squares()
  {
    $('#output > *').remove();    

    var squaredNums = $('#input').val().split(',').map(n=>n.trim()).map(n=>n*n);

    for(var i = 0; i < squaredNums.length; ++i)
    {
      var $div = $('<div>');
      $div.text(squaredNums[i]);
      $('#output').append($div);
    }

    //$('#output').text(squaredNums);
  }

})();